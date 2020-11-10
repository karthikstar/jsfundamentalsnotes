class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
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
    showAlert(message, className){
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
    deleteBook(target){
        if (target.className === 'delete'){
            // target is an a tag, to remove whole row, we need remove its parent's parent element.
            target.parentElement.parentElement.remove();
    
        }
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

// Local Storage Class
class Store {
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null){
            books = [];

        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }; // fetching from local storage

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(book => {
            const ui = new UI;
            // Add Book to UI
            ui.addBookToList(book);

        });
    }

    static addBook(book){
        const books = Store.getBooks(); // we are using the class name because this is a STATIC method. we dont have to instantiate it.

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        // remove the book w the specific isbn 
        books.forEach((book,index) => {
            if(book.isbn === isbn){
                books.splice(index,1);
            }

        });
        //  set back the books to local storage.
        localStorage.setItem('books',JSON.stringify(books));


    }


}


// DOM Load Event Listener
document.addEventListener('DOMContentLoaded',Store.displayBooks);




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
        // console.log(book)
        // console.log(JSON.stringify(book))
        // Add book to List
        ui.addBookToList(book);

        // Add book to Local Storage
        Store.addBook(book)

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

    // Delete book from Local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show message
    ui.showAlert('Book Removed!','success');
    e.preventDefault();
})