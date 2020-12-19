const articleListMain = document.querySelector('.content-wrap .article-list');
const sideBar = document.querySelector('.side-wrap');
const articleListBottom = document.querySelector('.article-list-bottom');
const advert_v1 = document.querySelector('[data-advert-variant="1"]');
const advert_v2 = document.querySelector('[data-advert-variant="2"]');
const advert_v3 = document.querySelector('[data-advert-variant="3"]');

console.log(advert_v1);

const mainAdvertIndex = [2, 5];
for (const index of mainAdvertIndex) {
	articleListMain.children[index].insertAdjacentElement(
		'beforebegin',
		advert_v1.cloneNode(true)
	);
}

sideBar.appendChild(advert_v2);

articleListBottom.children[1].insertAdjacentElement('beforebegin', advert_v3);
