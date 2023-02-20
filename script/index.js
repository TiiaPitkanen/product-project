const arrow = document.querySelector('.arrow');
const dropdown = document.querySelector('.dropdown');

const toggleNav = () => {
	dropdown.classList.toggle('active');
};

arrow.addEventListener('click', toggleNav);
