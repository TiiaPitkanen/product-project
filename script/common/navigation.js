import service from '../services/service.js';

export const navigation = () => {
	const dropdown = document.querySelector('.dropdown');
	const arrow = document.querySelector('.arrow');
	const navList = document.querySelector('.nav-item');
	const navItemsList = service.getNavigation.navList;

	navItemsList.forEach((navItem) => {
		navList.innerHTML += `<li class="nav-item">
						<a href="${navItem.link}"
							><i class="fa-solid fa-"${navItem.icon}""></i>${navItem.title}</a
						>
					</li>`;
	});

	// console.log(service.getNavigation.navList);

	const navItems = document.querySelectorAll('.nav-item a');

	const url = new URL(location.href);

	navItems.forEach((navItem) => {
		let navItemUrl = new URL(navItem.href);
		// console.log('NavItem', navItems.href, navItemUrl.pathname);

		if (navItemUrl.pathname === url.pathname) {
			navItem.parentNode.classList.add('active');
		}
	});

	if (dropdown && arrow) {
		arrow.addEventListener('click', () => {
			dropdown.classList.toggle('active');
		});
	}
};
