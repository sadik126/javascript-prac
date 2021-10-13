console.log("welsome sadik");


class library{

constructor(booklist){

    this.booklist = booklist;
    this.issuedbook = {};
}
//1.sadik.getbooklist(['sadik','rohan','imran'])
//2. sadik = new library(['sadik','rohan','imran'])
//3.for show booklist
//sadik.getbooklist()
//4.sadik.issuebook('sadik','himel')
getbooklist(){
this.booklist.forEach(element => {
   console.log(element) ;
});
}

issuebook(bookname,user){

if(this.issuedbook[bookname] ==undefined){
this.issuedbook[bookname] = user;
}
else
console.log("this book is already issued");
}

returnbook(bookname){
delete this.issuedbook[bookname];
}


}