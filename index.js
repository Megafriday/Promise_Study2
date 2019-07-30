const fs = require("fs");

// 非同期処理なので、結果の順番が、毎回異なる
fs.readFile('data1.json', 'utf-8', (err, data)=>{
	console.log(data);
});

fs.readFile('data2.json', 'utf-8', (err, data)=>{
	console.log(data);
});

fs.readFile('data3.json', 'utf-8', (err, data)=>{
	console.log(data);
});