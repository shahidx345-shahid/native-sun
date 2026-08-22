const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceDir = 'c:/native sun/Native Sun Studios';
const targetDir = 'c:/native sun/next-portfolio/src/app';

const files = fs.readdirSync(sourceDir).filter(f => f.startsWith('portfolio_') && f.endsWith('.html'));

const excludeIds = [
  'HOME_01', 'HOME_LOGO_01', 'HOME_LOGO_02', 'HOME_LOGO_03', 
  'HOME_NAV-HOME-BUTTON_NATURAL_03', 'HOME_NAV-PORTFOLIO-BUTTON_NATURAL_04',
  'HOME_NAV-SERVICES-BUTTON_NATURAL_05', 'HOME_NAV-ABOUT-BUTTON_NATURAL_06',
  'HOME_NAV-CONTACT-BUTTON_NATURAL_07',
  'HOME_33', 'HOME_FOOTER_COPYRIGHT_34', 'HOME_FOOTER-HOME-BUTTON_NATURAL_35',
  'HOME_FOOTER-PORTFOLIO-BUTTON_NATURAL_36', 'HOME_FOOTER-SERVICES-BUTTON_NATURAL_37',
  'HOME_FOOTER-ABOUT-BUTTON_NATURAL_38', 'HOME_FOOTER-CONTACT-BUTTON_NATURAL_39',
  'HOME_RESUME-BUTTON_NATURAL_40', 'HOME_41'
];

files.forEach(file => {
  const html = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
  const $ = cheerio.load(html);
  
  // Find the container div
  let containerId = `container_${file.replace('.html', '')}`;
  let container = $(`#${containerId}`);
  if (!container.length) {
    // some might just be container_portfolio
    container = $("div[id^='container_']").first();
  }

  const elements = [];
  container.children('div').each((i, el) => {
    const id = $(el).attr('id');
    if (excludeIds.includes(id)) return;
    
    // Look for a tags
    let a = $(el).find('a').first();
    // Some elements might have <a><img/></a>, others just <img/>
    let img = $(el).find('img').first();
    
    if (img.length === 0) {
      // Empty spacer or just anchor without image
      return; 
    }

    let src = img.attr('src');
    if (src.startsWith('Assets/Slices/')) {
      src = src.replace('Assets/Slices/', '/');
    }
    
    let width = parseInt(img.attr('width') || 0);
    let height = parseInt(img.attr('height') || 0);
    let href = a.length ? a.attr('href') : null;
    let overSrc = null;
    
    // The hover state is typically attached to the a or the img itself!
    // Often it's onmouseover="MM_swapImage('ImageX','','Assets/Slices/images/..._OVER.png',1)"
    let onmouseover = a.attr('onmouseover') || img.attr('onmouseover');
    if (onmouseover) {
      const match = onmouseover.match(/'([^']+_OVER[^']*)'/i);
      if (match) {
        overSrc = match[1].replace('Assets/Slices/', '/');
      }
    }
    
    // Fix extension .html references to our nextjs routes
    if (href) {
      if (href === 'index.html') href = '/';
      else if (href === 'portfolio.html') href = '/portfolio';
      else if (href === 'about_us.html') href = '/about';
      else if (href === 'contact.html') href = '/contact';
      else if (href.endsWith('.html')) href = '/' + href.replace('.html', '');
    }

    elements.push({ id, src, overSrc, href, width, height });
  });

  // Now pack elements into flex rows that sum to 979
  const rows = [];
  let currentRow = [];
  let currentWidth = 0;

  elements.forEach(el => {
    if (currentWidth + el.width > 979) {
      rows.push(currentRow);
      currentRow = [el];
      currentWidth = el.width;
    } else {
      currentRow.push(el);
      currentWidth += el.width;
      if (currentWidth === 979) {
        rows.push(currentRow);
        currentRow = [];
        currentWidth = 0;
      }
    }
  });
  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  // Generate code
  let tsx = `import Image from "next/image";\n`;
  const hasLinks = elements.some(e => e.href);
  if (hasLinks) tsx += `import Link from "next/link";\n`;

  tsx += `\nexport default function Page() {\n  return (\n    <div className="flex flex-col">\n`;

  rows.forEach((row, rIdx) => {
    // We add flex block. If this is just 1 element and width=979, we don't strictly need flex but flex won't hurt.
    tsx += `      <div className="flex">\n`;
    row.forEach((el, eIdx) => {
      if (el.overSrc && el.href) {
        tsx += `        <Link href="${el.href}" className="group relative block" style={{ width: ${el.width}, height: ${el.height} }}>\n`;
        tsx += `          <Image src="${el.src}" alt="${el.id || 'Project slice'}" width={${el.width}} height={${el.height}} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />\n`;
        tsx += `          <Image src="${el.overSrc}" alt="${el.id || 'Project slice'} Hover" width={${el.width}} height={${el.height}} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />\n`;
        tsx += `        </Link>\n`;
      } else if (el.href) {
        tsx += `        <Link href="${el.href}" className="block" style={{ width: ${el.width}, height: ${el.height} }}>\n`;
        tsx += `          <Image src="${el.src}" alt="${el.id || 'Project slice'}" width={${el.width}} height={${el.height}} priority />\n`;
        tsx += `        </Link>\n`;
      } else {
        tsx += `        <Image src="${el.src}" alt="${el.id || 'Project slice'}" width={${el.width}} height={${el.height}} priority />\n`;
      }
    });
    tsx += `      </div>\n`;
  });

  tsx += `    </div>\n  );\n}\n`;

  // Create folder and write
  const routeName = file.replace('.html', '');
  const routeDir = path.join(targetDir, routeName);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'page.tsx'), tsx);
  console.log(`Generated route /${routeName}`);
});
