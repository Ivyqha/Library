let myLibrary = []; 

function Book(title, author, page) { 
    this.title = title
    this.author = author
    this.page= page
}

function addBookToLibrary() { 
    var titleInput = document.getElementById("title").value; 
    myLibrary.push(titleInput); 
    document.getElementById("title").value = ""; 

    displayInputs();
}

function displayInputs() { 
    var bookmark = document.getElementById("display"); 
    bookmark.innerHTML=""; 

    //for each array, creates a new paragraph and appends input to paragraph element
    for (var i =0; i <myLibrary.length; i++){
        var inputText = myLibrary[i]; 

        var p = document.createElement("p"); 
        var textNode = document.createTextNode(inputText); 
        p.appendChild(textNode); 
        //appends paragraph to bookmark (so it displays on page)
        bookmark.appendChild(p)
    }
}

var submitBtn = document.getElementById("submit"); 
submitBtn.addEventListener("click", function (event){
    event.preventDefault()
    addBookToLibrary(); 
}); 



/* 

1) Click button (Add book) => Actives a pop up form 
2) Input details of book ( title, author , pages) 
3) Click submit button 
4) Adds book to the library 
5) Any other book adds to the library on top of previous added ones 
6) button on bookmarks to remove from library
7) button on bookmark to mark as read. 

*/ 