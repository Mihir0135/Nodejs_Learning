const math = require('./mathOperation');
const http = require('http');

const add = math.add(5, 3);
console.log("Addition: ", add);

const subtract = math.subtract(10, 7);
console.log("Subtraction: ", subtract);

const multiply = math.multiply(5, 8);
console.log("Multiplication: ", multiply);

const divide = math.divide(10, 2);
console.log("Division: ", divide);

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>Welcome to The Math Calculation Page</h2>');
        res.end();
    } else if (req.url === '/add'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h2>Addition: ${add}</h2>`);
        res.end();
    } else if (req.url === '/subtract'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h2>Subtraction: ${subtract}</h2>`);
        res.end();
    } else if (req.url === '/multiply'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h2>Multiplication: ${multiply}</h2>`);
        res.end();
    } else if (req.url === '/divide'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h2>Division: ${divide}</h2>`);
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>Page Not Found</h2>');
        res.end();
    }
}).listen(3000, () => {
    console.log('Server is running on port 3000');
})