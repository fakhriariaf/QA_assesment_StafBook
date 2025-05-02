import fs from 'fs';
import path from 'path';

export async function saveResponseToFile(testName, body, status) {
  const dir = path.resolve('test-results');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const safeName = testName.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
  const fileName = path.join(dir, `${safeName}-${status}.json`);

  fs.writeFileSync(fileName, JSON.stringify(body, null, 2));
}
