const http = require('http');

const server = http.createServer((req, res) => {
    if( req.url === '/'){
        res.write('<h2>Hello World</h2>');
        res.end();
    } else {
        res.write('<h2>Page Not Found</h2>');
        res.end();
    }
})
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});