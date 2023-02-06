const fs = require('fs');

let list = [];
for (let i = 0; i < 100; i++) {
    list.push(Math.floor(Math.random() * 100 + 1));
}

fs.writeFileSync('file.txt', list.join('\n'), 'utf-8');

let sortedNumbers = fs.readFileSync('file.txt', 'utf-8').split('\n').map(Number).sort((a, b) => a - b);

fs.writeFileSync('file.txt', sortedNumbers.join('\n'), 'utf-8');

const fs = require('fs');
