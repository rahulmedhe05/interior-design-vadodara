const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const templatePath = path.join(__dirname, 'page-template.tsx');

// Read template
const template = fs.readFileSync(templatePath, 'utf8');

// Get all directories in app folder
const dirs = fs.readdirSync(appDir).filter(item => {
  const itemPath = path.join(appDir, item);
  return fs.statSync(itemPath).isDirectory() && 
         !['leads', '[business]', '[slug]'].includes(item) &&
         !item.startsWith('.');
});

console.log(`Found ${dirs.length} page directories to update`);

let updated = 0;
dirs.forEach(dir => {
  const pageContent = template.replace(/\{\{SLUG\}\}/g, dir);
  const pagePath = path.join(appDir, dir, 'page.tsx');
  
  fs.writeFileSync(pagePath, pageContent);
  updated++;
  
  if (updated % 20 === 0) {
    console.log(`Updated ${updated} pages...`);
  }
});

console.log(`\nSuccessfully updated ${updated} pages!`);
