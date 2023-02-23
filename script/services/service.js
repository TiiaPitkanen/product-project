const service = {};

service.getNavigation = {
	logo: '',
	navList: [
		{
			title: 'Home',
			icon: 'home',
			link: '/',
		},
		{
			title: 'Products',
			icon: 'wrench',
			link: '/html/product1',
		},
		{
			title: 'Layout',
			icon: 'user',
			link: '/html/product1',
		},
	],
};


service.getProducts = {
	products: [
		{
			title: 'Product 1',
			text: 'Testing 1',
		},
		{
			title: 'Product 2',
			text: 'Testing 2',
		},
		{
			title: 'Product 3',
			text: 'Testing 3',
		},
		{
			title: 'Product 4',
			text: 'Testing 4',
		},
		{
			title: 'Product 5',
			text: 'Testing 5',
		},
		{
			title: 'Product 6',
			text: 'Testing 6',
		},
	],
};



export default service;
