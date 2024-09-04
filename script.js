const myLibrary=[]
function Book(name,author,pages,status){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.status=status;
}
function addBookToLibrary(){
    let name=prompt("Enter book name:");
    let author=prompt("Enter book author:");
    let pages=parseInt(prompt("Enter book pages:"));
    let status=prompt("Enter book status (read/unread):");
    let newBook=new Book(name,author,pages,status);
    myLibrary.push(newBook);
    console.log("Book added successfully");
}