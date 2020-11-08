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

// Clear fields

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
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

    // Add book to List
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
})