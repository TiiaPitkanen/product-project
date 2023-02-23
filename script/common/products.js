import service from '../services/service.js';

export const products = () => {
	const image = document.querySelectorAll('.image');
	const title = document.querySelectorAll('.title');
	const text = document.querySelectorAll('.text');

	const product = document.querySelector('.product');

	product.forEach((image) => {
		image.innerHTML += `<img class="image" src="https://picsum.photos/300/200" alt="" />`;
	});

	console.log(service.getNavigation.navList);
};
