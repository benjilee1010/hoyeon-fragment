/**
 * Apply stored edits (e.g. from localStorage export) to the HTML files
 * so prices, titles, and other content show on the GitHub version.
 *
 * Usage:
 *   1. Export your edits from the browser (on localhost):
 *      In DevTools Console: copy(JSON.stringify(JSON.parse(localStorage.getItem('artPortfolioEdits')||'{}'), null, 2))
 *   2. Paste into a file named edits.json in this folder.
 *   3. Run: node bake-edits.js [edits.json]
 *
 * Or use the save-server flow: run "npm run save-server", open the site, then click "Done editing".
 */
const path = require('path');
const fs = require('fs');
const { applyEditsToHtml } = require('./save-server.js');

const editsPath = path.resolve(process.argv[2] || path.join(__dirname, 'edits.json'));
const root = __dirname;

if (!fs.existsSync(editsPath)) {
  console.error('Edits file not found:', editsPath);
  console.error('Export localStorage artPortfolioEdits to edits.json, or run: node bake-edits.js path/to/edits.json');
  process.exit(1);
}

const edits = JSON.parse(fs.readFileSync(editsPath, 'utf8'));
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const contactHtml = fs.readFileSync(path.join(root, 'contact.html'), 'utf8');
const photographyHtml = fs.readFileSync(path.join(root, 'photography.html'), 'utf8');

fs.writeFileSync(path.join(root, 'index.html'), applyEditsToHtml(indexHtml, edits, 'index'), 'utf8');
fs.writeFileSync(path.join(root, 'contact.html'), applyEditsToHtml(contactHtml, edits, 'contact'), 'utf8');
fs.writeFileSync(path.join(root, 'photography.html'), applyEditsToHtml(photographyHtml, edits, 'photography'), 'utf8');

console.log('Applied edits to index.html, contact.html, photography.html.');
console.log('Commit and push to update the GitHub version.');
