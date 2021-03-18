import fs from 'fs';

export const read = (filePath) => {
  return fs
    .readFileSync(filePath)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, ' ') // remove newlines
    .replace(/\s+/g, ' '); // excess white space
};
