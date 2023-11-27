const searchButton = document.querySelector('.nav__search-button');
const body = document.querySelector('.body');
body.addEventListener('click', function(event) {
	if (event.target.closest('.nav__search-button')) {
		searchButton.classList.add('active')
	} else {
		searchButton.classList.remove('active');
		document.getElementById('searchClear').value = '';
	}
})
body.addEventListener('keydown', function(event) {
	if (event.code == 'Escape') {
		searchButton.classList.remove('active');
		document.getElementById('searchClear').value = '';
	}
})
body.addEventListener('click', function(event) {
	if (event.target.matches('[class$="nav__search-clear"]')) {
		document.getElementById('searchClear').value = '';
	}
})


const awesomeDropdownList = document.querySelector('.awesome__dropdown-list')
body.addEventListener('click', function(event) {
	if (event.target.matches('[class$="awesome__selector"]')) {
		awesomeDropdownList.classList.toggle('awesome__dropdown-list-active');
	} else {
		awesomeDropdownList.classList.remove('awesome__dropdown-list-active');
	}
})

body.addEventListener('keydown', function(event) {
	if (event.code == 'Escape') awesomeDropdownList.classList.remove('awesome__dropdown-list-active');
})

const locationOptions = document.querySelectorAll('.awesome__dropdown-list-item');
locationOptions.forEach(function(elem) {
	elem.addEventListener('click', function(event) {
		this.parentElement.previousElementSibling.innerText = this.innerText;

	})
})