const pdfParseModule = require('pdf-parse');
const pdfParse = pdfParseModule.default || pdfParseModule;
const fs = require('fs');
const path = require('path');

async function extractPdf(filePath, outName) {
  const buf = fs.readFileSync(filePath);
  const data = await pdfParse(buf);
  fs.writeFileSync(path.join(__dirname, outName), data.text, 'utf8');
  console.log(`✅ Extracted ${outName} — ${data.numpages} pages, ${data.text.length} chars`);
  // Print first 3000 chars as preview
  console.log('\n--- PREVIEW ---\n');
  console.log(data.text.substring(0, 3000));
  console.log('\n--- END PREVIEW ---\n');
  return data.text;
}

(async () => {
  console.log('=== LISTENING PDF ===');
  await extractPdf('assets/listening/test1/questions.pdf', 'listening_raw.txt');
  console.log('\n=== READING PDF ===');
  await extractPdf('assets/reading/test1.pdf', 'reading_raw.txt');
})();
