let myLibrary = []; 

function Book(title, author, page) { 
    this.title = title
    this.author = author
    this.page= page
}

function addBookToLibrary() { 
    const titleInput = document.getElementById("title").value; 
    myLibrary.push(titleInput); 
    document.getElementById("title").value = ""; 

    const authorInput = document.getElementById("author").value; 
    myLibrary.push(authorInput); 
    document.getElementById("author").value = ""; 

    const pageInput = document.getElementById("page").value; 
    myLibrary.push(pageInput); 
    document.getElementById("page").value = ""; 

    displayInputs();
}

function displayInputs() { 
    var bookmark = document.getElementById("display"); 
    bookmark.innerHTML=""; 

    //for each array, creates a new paragraph and appends input to paragraph element
    for (let i =0; i <myLibrary.length; i++){
        const inputText = myLibrary[i]; 

        const div = document.createElement("div"); 
        const textNode = document.createTextNode(inputText); 
        div.appendChild(textNode); 
        //appends paragraph to bookmark (so it displays on page)
        bookmark.appendChild(div)
    }
}

const submitBtn = document.getElementById("submit"); 
const form = document.querySelector("form"); 
const isFormValid = true; 
const inputs = form.querySelectorAll("input[required]")
form.addEventListener("submit", validForm); 

const addBookBtn = document.getElementById("add-book"); 
addBookBtn.addEventListener("click", function (event) { 
    form.style.display = "block";
}); 

function validForm (event) { ; 
    for(let i=0; i<inputs.length; i++) { 
        if (inputs[i].value.trim()=== "") { 
            isFormValid = false; 
            break; 
        }
    }
    event.preventDefault()
    addBookToLibrary(); 
    form.style.display = "none"; 
}

const closeBtn = document.getElementById("close-form")
closeBtn.addEventListener("click", exitForm);

function exitForm() { 
    for (let i=0; i<inputs.length; i++) {
        inputs[i].removeAttribute("required"); 
    }
    console.log("it works")
    form.style.display="none";
}


/* 

1) Click button (Add book) => Actives a pop up form 
2) Input details of book ( title, author , pages) 
3) Click submit button 
4) Adds book to the library 
5) Any other book adds to the library on top of previous added ones 
6) button on bookmarks to remove from library
7) button on bookmark to mark as read. 

*/ 