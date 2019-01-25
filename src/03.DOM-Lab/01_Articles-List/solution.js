function solve() {
	let inputTitleValue = document.getElementById('createTitle').value;
	let inputContentValue = document.getElementById('createContent').value;

	if(inputTitleValue === '' || inputContentValue === ''){
	    return;
    }

	let heading = document.createElement('h3');
	heading.textContent = inputTitleValue;

	let paragraph = document.createElement('p');
	paragraph.textContent = inputContentValue;

	let article = document.createElement('article');

	article.appendChild(heading);
	article.appendChild(paragraph);

	let articlesList = document.getElementById('articles');

	articlesList.appendChild(article);

	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}