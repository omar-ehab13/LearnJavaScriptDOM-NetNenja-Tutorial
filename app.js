// Get element by id examples
var banner = document.getElementById('page-banner');
console.log(banner);

var bookList = document.getElementById('book-list');
console.log(bookList);

// Get elements by class name
var titles = document.getElementsByClassName('title');
console.log(titles);
console.log(titles[0]);
console.log(titles[1]);

// Get elements by tag name
var lis = document.getElementsByTagName('li');
console.log(lis);
for (let i = 0; i < lis.length; i++) {
    console.log(lis[i]);
}

// Query selector
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

// The following commnet line returns only one single element
// var books = document.querySelector('#book-list li .name');
var books = document.querySelectorAll('#book-list li .name');
console.log(books);

// Changing text and HTML content
Array.from(books).forEach(book => {
    book.textContent += ' (book title)';
})

// bookList.innerHTML = "<h2>Books and more books...</h2>";
// bookList.innerHTML += "<p>This is how you add HTML</p>";

// Node Properties
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner node has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// Traversing the Node
console.log('#book-list parent node is:', bookList.parentNode);
console.log('#book-list parent element is:', bookList.parentElement.parentElement);

console.log('#book-list child nodes are:', bookList.childNodes);
console.log('#book-list children are:', bookList.children);

console.log('#book-list next sibling is:', bookList.nextSibling);
console.log('#book-list next element sibling is:', bookList.nextElementSibling);

console.log('#book-list previous sibling is:', bookList.previousSibling);
console.log('#book-list previous element sibling is:', bookList.previousElementSibling);

var titlesText = bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';


// Events
var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e);
});

// var deleteBtns = document.querySelectorAll('#book-list .delete');
// deleteBtns.forEach(btn => {
//     btn.addEventListener('click', function(e) {

//         var li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });


// Event Bubbling
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});


// Interacting with forms
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const bookNameValue = addForm.querySelector('input[type="text"]').value;
    
    // Create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = bookNameValue;

    // add classes to elements
    bookName.className = 'name';
    deleteBtn.className = 'delete';

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});


// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
    if (hideBox.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
});


// filter books
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e) {

    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    
    Array.from(books).forEach(book => {
        const title = book.firstElementChild.textContent;

        if (title.toLocaleLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });

});


// tabbed content
const tabs = document.querySelector('#tabbed-content .tabs');
const panels = document.querySelectorAll('#tabbed-content .panel');

tabs.addEventListener('click', function(e) {
    if (e.target.tagName == 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target);
        const tabsChildren = tabs.children;

        Array.from(tabsChildren).forEach(tab => {
            if (tab == e.target) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        panels.forEach(panel => {
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});
