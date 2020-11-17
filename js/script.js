  
import modalControl from './modal.js';

const modal = modalControl();

let $table = document.querySelector('.table');
let $open = document.querySelector('.add-user');
let $close = document.querySelectorAll('.close');
let $ok = document.querySelector('.ok');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const age = document.querySelector('#age');
const gender = document.querySelector('#gender');
const work = document.querySelector('#work');


$ok.addEventListener('click', function () {

	data.push(
		{
			firstName: firstName.value,
			lastName: lastName.value,
			age: age.value,
			gender: gender.value,
			work: work.value,
		}
	)
	let str = '';
	for (let el of data) {
		str += `<tr><td> ${el.firstName}</td><td>${el.lastName}</td><td>${el.age}</td><td>${el.gender}</td><td>${el.work}</td></tr>`;
	}
	$table.innerHTML = str;
	modal.toggle('close');
});




$open.addEventListener('click', function () {
	modal.toggle('open');
});

for (let $btn of $close) {
	$btn.addEventListener('click', function () {
		modal.toggle('close');
	});
}

let data = [
	{
		firstName: 'Ashton',
		lastName: 'Kutcher',
		age: 40,
		gender: 'Men',
		work: 'Actor'
	}, {
		firstName: 'Bradley',
		lastName: 'Pitt',
		age: 54,
		gender: 'Men',
		work: 'Actor'
	}, {
		firstName: 'Hannah',
		lastName: 'Dakota',
		age: 24,
		gender: 'Women',
		work: 'Single'
	}, {
		firstName: 'Roma',
		lastName: 'Aheychik',
		age: 13,
		gender: 'Men',
		work: 'Freelance'
	}, {
		firstName: 'Aleksey',
		lastName: 'Bortnik',
		age: 18,
		gender: 'Men',
		work: 'Student'
	}
];

let str = '';
for (let el of data) {
	str += `<tr><td> ${el.firstName}</td><td>${el.lastName}</td><td>${el.age}</td><td>${el.gender}</td><td>${el.work}</td></tr>`;
	//  console.log (el)
}
$table.innerHTML = str;