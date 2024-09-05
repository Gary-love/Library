let btnAdd =document.querySelector("button")
let table = document.querySelector("table")
let nameInput=document.querySelector("#name")
let authorInput=document.querySelector("#author")
let pagesInput=document.querySelector("#pages")
let statusInput=document.querySelector("#status")
let id=1;
function removeBook(e){
    id-=1;
     if(!e.target.classList.contains("delBtn")){
        return;
     }
     const btn=e.target
     btn.closest("tr").remove()
     let bookToRemove=myLibrary.find(book=>book.name===btn.closest("tr").children[1].textContent)
     myLibrary.splice(myLibrary.indexOf(bookToRemove),1)
}
table.addEventListener("click",removeBook)
const myLibrary=[]
function Book(name,author,pages,status){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.status=status;
}
function addBookToLibrary(name,author,pages,status){
    let newBook=new Book(name,author,pages,status);
    myLibrary.push(newBook);
    console.log("Book added successfully"); 
}
btnAdd.addEventListener("click", ()=>{
    id+=1
    let name=nameInput.value;
    let author=authorInput.value;
    let pages=parseInt(pagesInput.value);
    let status=statusInput.value;
    let template =
    `<tr bgcolor="lightgrey" align="center">
        <td>${id}</td>
        <td>${name}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td>${status}</td>
        <td><button class="delBtn">Remove</button></td>`
        table.innerHTML+=template
        addBookToLibrary(name,author,pages,status)
        console.log(myLibrary)
})