// using basic es5 object oriented programming using constructors and protootype methods

// Book Constructor 
function Book (title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}



// Ui constructor
function UI(){}

// adding Addbooktolist method to UI prototype
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    // create tr elemenet
    const row = document.createElement('tr');

    // Inert Cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "delete">X<a></td>
    `;
    list.appendChild(row);

}
// Show Alert -adding showalert method to UI prototype
UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.container');
    
    const form = document.querySelector('#book-form');

    // Insert alert into DOM ,above the form
    container.insertBefore(div,form); // takes 2 params - one is the element which we are inserting, 2nd is before which element do u want to insert in .
    
    // Timeout after 3 sec and remove the alert element.
    setTimeout(function(){
        document.querySelector('.alert').remove(); 
    }, 3000);


}
// Delete Book - adding deleteBook method to ui prototype
UI.prototype.deleteBook = function(target){
    if (target.className === 'delete'){
        // target is an a tag, to remove whole row, we need remove its parent's parent element.
        target.parentElement.parentElement.remove();

    }
}

// Clear fields - addign clearfields method to ui prototype

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listener for add book 

document.getElementById('book-form').addEventListener('submit',function(e){
    // Get form values 
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
    
    // console.log(title,author,isbn);

    // Instantiate book
    const book = new Book(title,author,isbn);
    // console.log(book);
    
    // Instantiate UI object
    const ui = new UI();

    // Validate
    if (title === ''|| author === ''|| isbn === ''){
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
        // Add book to List
        ui.addBookToList(book);

        // Show Success Alert
        ui.showAlert('Book added!','success');

        // Clear fields
        ui.clearFields();

    }


    e.preventDefault();
})

// Event Listener for Delete button
document.getElementById('book-list').addEventListener('click',function(e){
    // Instantiate UI 
    const ui = new UI();
    // Delete Book
    ui.deleteBook(e.target);

    // Show message
    ui.showAlert('Book Removed!','success');
    e.preventDefault();
})