import { promises as fs } from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;
const enumFilePath = path.join(__dirname, "../enums.ts");
const newEnumType = process.env.NEW_ENUM ?? "";
const fileEncoding = "utf8";

await (async () => {
  try {
    const enumFileContent = await fs.readFile(enumFilePath, fileEncoding);

    if (enumFileContent.includes(newEnumType)) {
      console.error(`Enum ${newEnumType} already exists.`);
      return;
    }

    const newAddedLine = `    ${newEnumType} = "${newEnumType}",\n}`;
    const updatedContent = enumFileContent.replaceAll("}", newAddedLine);

    await fs.writeFile(enumFilePath, updatedContent, fileEncoding);
    console.log(`Enum ${newEnumType} added successfully.`);
  } catch (error) {
    console.error("Error updating enums.ts file:", error);
  }
})();
