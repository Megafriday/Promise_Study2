const fs = require('fs');

// コールバック地獄で、順番を維持
fs.readFile('data1.json', 'utf-8', (err, data)=>{
	console.log(data);
	fs.readFile('data2.json', 'utf-8', (err, data)=>{
		console.log(data);
		fs.readFile('data3.json', 'utf-8', (err, data)=>{
			console.log(data);
		});
	});
});