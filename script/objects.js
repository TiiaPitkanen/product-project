let imageData = [
	{
		imagePath: 'https://picsum.photos/301/201',
		imageText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amett',
		imageName: 'Product',
	},
	{
		imagePath: 'https://picsum.photos/300/201',
		imageText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
		imageName: 'Product',
	},
];

imageData.forEach((image) => {
	console.log(image);
});

let addData = () => {
	let imageContainer = document.querySelector('.imageContainer');
	let imageNameContainer = document.querySelector('.imageName');
	let imageTextContainer = document.querySelector('.imageText');

	imageContainer.innerHTML = imageData[0].imagePath;
	imageNameContainer.textContent = imageData[0].imageName;
	imageTextContainer.textContent = imageData[0].imageText;
};

// addData();
