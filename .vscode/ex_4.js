console.log("welsome sadik");


class library{

constructor(booklist){

    this.booklist = booklist;
    this.issuedbook = [];
}

getbooklist(){
this.booklist.forEach(element => {
   console.log(element) ;
});
}

issuebook(bookname,user){
this.issuedbook.push([bookname,user])
}

returnbook(bookname){

}


}