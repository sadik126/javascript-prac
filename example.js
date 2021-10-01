let str = "product";

let link = document.links;

console.log(link);

let href;
Array.from(link).forEach(function(element){

    href= element.href;

    // for specified links
    if(href.includes(str)){

    console.log(href);
    }

})