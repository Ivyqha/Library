function Book(title, author, page) { 
    this.title = title;
    this.author = author;
    this.page = page;
}

function Library() { 
    this.books = [] ; 
    this.addBook = function (book) { 
        this.books.push(book); 
    }; 
    this.displayBooks = function () { 
        const libraryContainer = document.getElementById("library");
        libraryContainer.innerHTML=""; 
        this.books.forEach(function(book) {  
            const bookCard = document.createElement("div")
            bookCard.classList.add("book-card"); 

            const bookTitle = document.createElement("h2"); 
            bookTitle.textContent = book.title; 
            bookCard.appendChild(bookTitle); 

            const bookAuthor = document.createElement("p"); 
            bookAuthor.textContent = "By: " + book.author; 
            bookCard.appendChild(bookAuthor); 

            const bookPage = document.createElement("p"); 
            bookPage.textContent = book.page + " pages"; 
            bookCard.appendChild(bookPage); 

            libraryContainer.appendChild(bookCard); 
        });
    }
}
const library = new Library(); 

function createBookFromUserInput () { 
    const title = document.getElementById("title").value; 
    const author = document.getElementById("author").value; 
    const page = document.getElementById("page").value; 

    const newBook = new Book(title, author, page)
    library.addBook(newBook)
    library.displayBooks(); 
}

const submitBtn = document.getElementById("submit"); 
const form = document.querySelector("form"); 
const isFormValid = true; 
const inputs = form.querySelectorAll("input[required]")
submitBtn.addEventListener("click", validForm); 

const addBookBtn = document.getElementById("add-book"); 
addBookBtn.addEventListener("click", function (event) { 
    form.style.display = "block";
}); 

const closeBtn = document.getElementById("closebtn")
closeBtn.addEventListener("click", exitForm);

function validForm (event) { ; 
    for(let i=0; i<inputs.length; i++) { 
        if (inputs[i].value.trim()=== "") { 
            isFormValid = false; 
            break; 
        }
    }
    event.preventDefault()
    createBookFromUserInput()
    form.style.display= "none"; 
    form.reset(); 
}

function exitForm() { 
    for (let i=0; i<inputs.length; i++) {
        inputs[i].removeAttribute("required"); 
    }
    form.style.display="none";
}


/* 
To do: 
1) checklist for it has been read 
2) if book has already been added = error 
3) remove book from library 
5) edit button 

*/ 