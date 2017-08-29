function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

function createTable(size) {
	let k;
	let n;
	
	const table = document.createElement('table');
	for (var i = 0; i < size; i++) {
		const tr = document.createElement('tr');
		for (var j = 0; j < size; j++) {
			k = getRandomArbitrary(100000, 999999);
			n = getRandomArbitrary(0, 99);
			const td = document.createElement('td');
			td.textContent = `${n}`;
			td.style.border = '1px solid black';
			td.style.borderRadius = '50px';
			td.style.backgroundColor = `#${k}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);

	}



	document.body.appendChild(table);
	document.body.children[1].setAttribute(`id`,`table`);

let h =document.body.clientHeight-table.offsetHeight;
let  w=document.body.clientWidth-table.offsetWidth;
console.log(+w)
table.style.position=`absolute`;
table.style.top=h/2+`px` ;
table.style.left=w/2+`px`;


}



var t = createTable('10'); //таблица