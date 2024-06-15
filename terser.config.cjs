// https://github.com/terser/terser/issues/544#issuecomment-598192241

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const Terser = require("terser");
const fs = require("fs");
const path = require("path");

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
        }
    });

    return arrayOfFiles.filter((path) => path.match(/\.js$/));
}

async function minifyFiles(filePaths, terserOptions) {
    console.log("Running Terser on the following files:");
    console.log(filePaths);

    await Promise.all(
        filePaths.map(async (filePath) => {
            fs.writeFileSync(
                filePath,
                (await Terser.minify(fs.readFileSync(filePath, "utf8"), terserOptions)).code,
            );
        }),
    );
}

const files = getAllFiles("./dist");
const options = {
    compress: {
        drop_console: true,
        ecma: 2018,
        passes: 2,
    },
    mangle: false,
};
minifyFiles(files, options).then((r) => r);
