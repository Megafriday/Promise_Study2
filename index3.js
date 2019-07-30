const fs = require('fs');

// Promise を使った実装（Promiseをリターンする）
function readFile(file){
	return new Promise((resolve)=>{
		fs.readFile(file, 'utf-8', (err, data)=>{
			resolve(data);
		});
	});
}


readFile('data1.json')
	.then((data)=>{
		console.log(data);
		return readFile('data2.json');
	})
	.then((data)=>{
		console.log(data);
		return readFile('data3.json');
	})
	.then((data)=>{
		console.log(data);
	});
