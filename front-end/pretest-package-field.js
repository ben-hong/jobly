const fs = require('fs');

const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

packageJson.type = "module";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

