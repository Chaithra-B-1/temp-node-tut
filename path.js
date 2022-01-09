const path = require('path')

//separates path
console.log(path.sep);

//joins the path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//returns what is present in test.txt file
const base = path.basename(filePath)
console.log(base);

//provides the entire path with directory
const abs = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(abs);