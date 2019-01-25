function solve() {
   let buttons = document.getElementsByTagName('button');

   for(let button of buttons){
       button.addEventListener('click', function (e) {
           let targetButton = e.target;

           let parent = targetButton.parentNode;

           let lockOption = parent.children[2];
           let unlockOption = parent.children[4];

           lockOption.addEventListener('click', function (f) {
                let option = f.target;

                option.checked = true;
           });

           unlockOption.addEventListener('click', function (f) {
               let option = f.target;

               option.checked = true;
           });

           if(unlockOption.checked){
               let hiddenInfo = parent.children[9];

               hiddenInfo.style.display = 'inline-block';

               button.textContent = 'Hide it';

               button.addEventListener('click', function (f) {

                  if(unlockOption.checked){
                      hiddenInfo.style.display = 'none';

                      button.textContent = 'Show more';
                  }
               });
           }
       });
   }
} 