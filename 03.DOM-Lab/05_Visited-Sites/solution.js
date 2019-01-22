function solve() {
  let tagTokens = document.getElementsByTagName('a');

  for(let tag of tagTokens){
      tag.addEventListener('click', () => {
         let span = tag.parentNode.children[1];

         let spanTokens = span.textContent.split(' ');

         let counter = Number(spanTokens[1]);

         counter++;

         span.textContent = `Visited: ${counter} times`;
      });
  }
}