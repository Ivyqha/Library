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

        for (let i=0; i <this.books.length; i++) {
            const book = this.books[i];   
            const bookCard = document.createElement("div")
            const bookTitle = document.createElement("h2"); 
            const bookAuthor = document.createElement("p"); 
            const bookPage = document.createElement("p"); 
            const checkboxContainer = document.createElement ("div")
            const readLabel = document.createElement("label"); 
            const readCheckbox = document.createElement("input");
            const removeBtn = document.createElement("button"); 

            bookCard.classList.add("book-card");
            checkboxContainer.classList.add("checkboxContainer");
            removeBtn.classList.add("removeBtn");
            removeBtn.type = "submit"; 
            bookTitle.textContent = book.title; 
            bookAuthor.textContent = "By: " + book.author;
            bookPage.textContent = book.page + " pages"; 
            readLabel.textContent = "Read: ";
            removeBtn.textContent = "Remove";
            readLabel.htmlFor = "read";  
            readCheckbox.type = "checkbox";
            readCheckbox.name = "readStatus";
            readCheckbox.value = "checked";
            readCheckbox.id = "read";
            readCheckbox.checked = book.isRead; 

            bookCard.appendChild(bookTitle); 
            bookCard.appendChild(bookAuthor); 
            bookCard.appendChild(bookPage); 
            bookCard.appendChild(checkboxContainer);
            bookCard.appendChild(removeBtn); 
            checkboxContainer.appendChild (readLabel);
            checkboxContainer.appendChild (readCheckbox);
            libraryContainer.appendChild(bookCard);    

            //creating onclick function for remove button: 
            removeBtn.addEventListener("click", function () {
                var target = library.books.indexOf(book); 
                if (target !== -1) {
                    library.books.splice(target, 1);
                    library.displayBooks();
                  }
            });
        } 
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
const removeBtn = document.getElementById("remove-btn"); 
const closeBtn = document.getElementById("closebtn");
const overlay = document.querySelector(".overlay"); 
const form = document.querySelector("form"); 
const inputs = form.querySelectorAll("input[required]")
const isFormValid = true; 

submitBtn.addEventListener("click", validForm); 
addBookBtn.addEventListener("click", function (event) { ;  
    form.style.display = "block";
    overlay.style.display = "block";
}); 
closeBtn.addEventListener("click", function (event)  {
    form.style.display = "none";
    overlay.style.display = "none";
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
    overlay.style.display = "none";
    form.reset(); 
}
