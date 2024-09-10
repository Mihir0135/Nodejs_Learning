const fs = require('fs');
const read = 'read.txt';

function readFile() {
    try {
        const data = fs.readFileSync('read.txt','utf-8');
        console.log(data);
    } catch (error) {
        console.log('File not found');
    }
}

console.log('Before Appending:');
readFile();

['Paython', 'Laravel', 'Ruby','GraphQL', 'MongoDB', 'NestJS'].forEach((item) => {
    fs.appendFileSync('read.txt',`\n${item}`);
})

console.log('-----------------------------------');
console.log('After Appending:');
readFile();