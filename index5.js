const fs = require('fs');

function readFile(file) {
	return new Promise((resolve) => {
		fs.readFile(file, 'utf-8', (err, data) => {
			resolve(data);
		});
	});
}

files = ['data1.json', 'data2.json', 'data3.json'];

Promise
	.all(files.map(file => readFile(file)))
	.then(persons => {
		persons.forEach(person => console.log(person));
	});


