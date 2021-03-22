import fs from 'fs';

export const read = (filePath) => {
  return fs
    .readFileSync(filePath)
    .toString()
    .split(';\n')
    .map(
      (line) =>
        line
          .replace(/(\r\n|\n|\r)/gm, ' ') // remove newlines
          .replace(/\s+/g, ' ') // excess white space)
    );
};
