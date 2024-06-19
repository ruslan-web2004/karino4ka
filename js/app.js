

document.addEventListener('DOMContentLoaded', () => {

	// Adaptive Menu

	let navBtn =  document.querySelector('.nav-btn')
	let nav = document.querySelector('.nav')
	let body = document.querySelector('body')

	navBtn.addEventListener('click', function(){
		navBtn.classList.toggle('active')
		nav.classList.toggle('active')
		body.classList.toggle('lock')
	})

})
