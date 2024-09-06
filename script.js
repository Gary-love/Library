let btnSub =document.querySelector(".submit")
let button=document.querySelector(".add")
let table = document.querySelector("table")
let nameInput=document.querySelector("#name")
let authorInput=document.querySelector("#author")
let pagesInput=document.querySelector("#pages")
const myLibrary=[]
let readBtn=document.querySelector(".read")
let id=1;
function removeBook(e){
     if(!e.target.classList.contains("delBtn")){
        return;
     }
     id-=1;
     const btn=e.target
     btn.closest("tr").remove()
     let bookToRemove=myLibrary.find(book=>book.name===btn.closest("tr").children[1].textContent)
     myLibrary.splice(myLibrary.indexOf(bookToRemove),1)
}
function changeStatus(e){
     if(!e.target.classList.contains("read")){
        return;
     }
     const btn=e.target
     if(btn.textContent==="Read"){
        btn.textContent="not read"
        console.log(btn.textContent)
}
    else{
    btn.textContent="Read";
    console.log(btn.textContent)
}
}
table.addEventListener("click",removeBook)
table.addEventListener("click",changeStatus)

function Book(name,author,pages,status){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.status=status;
}
function addBookToLibrary(name,author,pages,status){
    let newBook=new Book(name,author,pages,status);
    myLibrary.push(newBook);
}
function setStatus(){
    myLibrary.forEach((book)=>{
        if(book.status==="Read"){
            readBtn.style="background-color:rgb(18, 245, 18)"
        }
        else{
            readBtn.style="background-color:red"
        }
    })
}
btnSub.addEventListener("click", ()=>{
    id+=1
    let name=nameInput.value;
    let author=authorInput.value;
    let pages=parseInt(pagesInput.value);
    let statusInput=document.querySelector('input[name="answer"]:checked');
    let status=statusInput.value;
    let template =
    `<tr bgcolor="lightgrey" align="center">
        <td>${id}</td>
        <td>${name}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td><button class="read">${status}</button></td>
        <td><button class="delBtn">Remove</button></td>`
        table.innerHTML+=template
        addBookToLibrary(name,author,pages,status)
        console.log(myLibrary)
})
button.addEventListener("click",()=>{
    document.querySelector(".popup").style.display="flex"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".popup").style.display="none"
})