const stopWatchView =  document.querySelector('#stop-watch-view');
console.log('id',stopWatchView);

const pTag = document.querySelector('p');
console.log('pTag', pTag);


const myClass = document.querySelector('.my-class');
console.log();


const allParagraph = document.querySelectorAll('p');

console.log(allParagraph);
console.log('p1',allParagraph[1]);

console.log('p2',allParagraph[2]);

const allListItems =document.querySelectorAll('.list-item');

counter=1
allListItems.forEach(function (listItem){                    
    console.log(listItem);
 listItem.innerHTML=counter++

})
    
// console.log('list-item',allListItems[counter++].innerHTML=counter++
