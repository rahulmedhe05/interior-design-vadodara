const fs = require('fs');
const path = require('path');

const appDir = '/Applications/MY BUSINESS/Interior Design/app';

// Area slugs that should NOT be renamed
const areaSlugs = [
  "ajwa-road", "akota", "alkapuri", "atladara", "bhayli", "bill", "chhani", 
  "dandia-bazaar", "ellora-park", "fatehgunj", "gorwa", "gotri", "harni", 
  "jetalpur", "karelibaug", "kareli-baug", "manjalpur", "new-sama", "nizampura", 
  "old-padra-road", "op-road", "race-course-road", "rc-dutt-road", "sama", 
  "savli", "sayajigunj", "subhanpura", "tandalja", "tarsali", "vadodara", 
  "vasna", "wadi", "waghodia-road"
];

// Special folders to skip
const skipFolders = ['leads', '[business]', '[slug]', 'globals.css'];

// Helper to remove directory recursively
function rmDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        rmDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

// Get all directories that need renaming (don't have -in-vadodara suffix)
const dirs = fs.readdirSync(appDir).filter(item => {
  const itemPath = path.join(appDir, item);
  try {
    return fs.statSync(itemPath).isDirectory() && 
           !skipFolders.includes(item) &&
           !areaSlugs.includes(item) &&
           !item.endsWith('-in-vadodara');
  } catch (e) {
    return false;
  }
});

console.log(`Found ${dirs.length} keyword folders to rename`);

let renamed = 0;
dirs.forEach(dir => {
  const oldPath = path.join(appDir, dir);
  const newName = `${dir}-in-vadodara`;
  const newPath = path.join(appDir, newName);
  
  // If destination exists, remove it first
  if (fs.existsSync(newPath)) {
    console.log(`Removing existing: ${newName}`);
    rmDir(newPath);
  }
  
  // Rename folder
  fs.renameSync(oldPath, newPath);
  
  // Update SLUG in page.tsx
  const pagePath = path.join(newPath, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    content = content.replace(`const SLUG = "${dir}";`, `const SLUG = "${newName}";`);
    fs.writeFileSync(pagePath, content);
  }
  
  renamed++;
  if (renamed % 20 === 0) console.log(`Renamed ${renamed} folders...`);
});

console.log(`\nSuccessfully renamed ${renamed} keyword folders!`);
