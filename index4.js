const fs = require('fs');

function readFile(file) {
	return new Promise((resolve) => {
		fs.readFile(file, 'utf-8', (err, data) => {
			resolve(data);
		});
	});
}

// async/awaitを使って、順番を固定
async function readFiles() {
	console.log(await readFile('data1.json'));
	console.log(await readFile('data2.json'));
	console.log(await readFile('data3.json'));
}

readFiles();
