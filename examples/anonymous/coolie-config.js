coolie.config({
    base: './coolie/examples/',
    host: 'http://localhost:19093',
    version: {
        './text/some.txt': '123',
        'libs/c.js': 'abc123',
        'libs/path1/path2/b.js': 'def456'
    }
}).use();