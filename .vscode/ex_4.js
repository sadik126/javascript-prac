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
getbooklist(){
this.booklist.forEach(element => {
   console.log(element) ;
});
}

issuebook(bookname,user){
this.issuedbook[bookname] = user;
}

returnbook(bookname){
delete this.issuedbook[bookname];
}


}