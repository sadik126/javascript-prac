console.log("this is sadik");
//create div
let divelem = document.createElement('div');


let val = localStorage.getItem('text');
let text ;
if(val==null){
//add text to create element
 text = document.createTextNode('this is my element');
}
else {
    text = document.createTextNode(val);
}
divelem.appendChild(text);
//give element ,id and class
divelem.setAttribute('id', 'elem');
divelem.setAttribute('class', 'elem');
divelem.setAttribute('style', 'border:2px solid black; width:175px; margin:14px; padding:23px;');
//take container
let container = document.querySelector('.container');

let first = document.getElementById('myfirst');

//inset before the element its id first
container.insertBefore(divelem,first);

container.insertBefore(divelem, first);

divelem.appendChild(text);



console.log(divelem, container, first);


divelem.addEventListener('click', function () {
    let notextareas = document.getElementsByClassName('textarea').length;
    if(notextareas==0){
    
    
    let html= elem.innerHTML;
    divelem.innerHTML=` <textarea class="textarea form-control" class="textarea" id="textarea" rows="3">${html}</textarea>`;
    };
  //type on text area
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
        //show in local storage
        localStorage.setItem('text',elem.innerHTML)
    })
})