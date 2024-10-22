import * as fs from "fs";
import * as path from "path";

const enumFilePath = path.join(__dirname, '../enums.ts');
const newEnumType = process.env.NEW_ENUM!;
const fileEncoding = 'utf8';

(() => {
  try {
    let enumFileContent = fs.readFileSync(enumFilePath, fileEncoding);
  
    if (enumFileContent.includes(newEnumType)) return console.error(`Enum ${newEnumType} already exists.`);
    
    const newAddedLine = `    ${newEnumType} = "${newEnumType}",\n}`;
    const updatedContent = enumFileContent.replace(/}/g, newAddedLine);

    fs.writeFileSync(enumFilePath, updatedContent, fileEncoding);
    console.log(`Enum ${newEnumType} added successfully.`);
  } catch (error) {
    console.error('Error updating enums.ts file:', error);
  }
})();

