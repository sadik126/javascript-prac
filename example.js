let str = "php";

let link = document.links;

console.log(link);

let href;
Array.from(link).forEach(function(element){

    href= element.href;

    console.log(href);

})