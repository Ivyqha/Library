function Book(title, author, page) { 
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = false; 
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
            const bookTitle = document.createElement("h2"); 
            const bookAuthor = document.createElement("p"); 
            const bookPage = document.createElement("p"); 
            const readLabel = document.createElement("label"); 
            const readCheckbox = document.createElement("input");

            bookCard.classList.add("book-card");
            bookTitle.textContent = book.title; 
            bookAuthor.textContent = "By: " + book.author;
            bookPage.textContent = book.page + " pages"; 
            readLabel.textContent = "Read: ";  
            readCheckbox.type = "checkbox";
            readCheckbox.name = "readStatus";
            readCheckbox.value = "checked";
            readCheckbox.checked = book.isRead; 

            bookCard.appendChild(bookTitle); 
            bookCard.appendChild(readLabel)
            bookCard.appendChild(bookAuthor); 
            bookCard.appendChild(bookPage); 
            readLabel.appendChild(readCheckbox); 
            libraryContainer.appendChild(bookCard); 
            

        });
    }
}
const library = new Library(); 

function createBookFromUserInput () { 
    const title = document.getElementById("title").value; 
    const author = document.getElementById("author").value; 
    const page = document.getElementById("pages").value; 

    const newBook = new Book(title, author, page)
       
    library.addBook(newBook)
    library.displayBooks(); 

} 

const submitBtn = document.getElementById("submit"); 
const addBookBtn = document.getElementById("add-book"); 
const closeBtn = document.getElementById("closebtn")
const form = document.querySelector("form"); 
const inputs = form.querySelectorAll("input[required]")
const isFormValid = true; 

submitBtn.addEventListener("click", validForm); 
addBookBtn.addEventListener("click", function (event) { 
    form.style.display = "block";
}); 
closeBtn.addEventListener("click", function (event)  {
    exitForm() 
})

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
2) if book has already been added = error 
3) remove book from library 
5) edit button 

*/ 