import fs from "fs";
export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const promises = fs.promises;
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} ${statusMessage}\n`;
  await promises.appendFile(filePath, logEntry);
}
