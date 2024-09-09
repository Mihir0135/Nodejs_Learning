const fs = require('fs');

const beforeReadFile = fs.readFileSync('read.txt','utf-8');
console.log('Before Appending:');
console.log(beforeReadFile);

['Paython', 'Laravel', 'Ruby','GraphQL', 'MongoDB', 'NestJS'].forEach((item) => {
    fs.appendFileSync('read.txt',`\n${item}`);
})

console.log('-----------------------------------');
const afterReadFile = fs.readFileSync('read.txt','utf-8');
console.log('After Appending:');
console.log(afterReadFile);