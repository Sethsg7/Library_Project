console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

//ANNOTATE EVERYTHING.
//CONSOLE.LOG EVERYTHING.

//Create a new book class for constructing.
class Book {
  constructor(title, author, read, id) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = id;
  }
}

//Create a new library class for constructing.
class Library {
  constructor() {
    this.count = 0;
    this.books = [];
  }
  //Can omit function word in classes.
  markRead(id) {
    //Query select for all the inputs that have a type attribute equal to "checkbox"
    const allCheckboxInputs = document.querySelectorAll("input[type = checkbox]");
    //Select the checkbox that corresponds with the given id.
    let checkbox = allCheckboxInputs[id + 1];

    //Books works because this is still in the Library class.
    for (let i = 0; i < this.books.length; i++) {

      if (id == this.books[i].id) {
        this.books[i].read = true;
        checkbox.checked = false;
        //Checkbox disabled = unclickable.
        checkbox.disabled = true;
      }
    }
  }

  addBook = function () {
    //Links to HTML element locations.
    let title1 = document.getElementById("title");
    let author1 = document.getElementById("author");
    let read1 = document.getElementById("read");

    //.VALUE grabs value from input field where user types.
    //This newBook takes the values from the input as its parameters.
    let newBook = new Book(
      title1.value,
      author1.value,
      read1.checked,
      this.count
    );

    this.books.push(newBook);

    let tableSpot = document.getElementById("table");
    //Insert a new row at the selected element.
    let newRow = tableSpot.insertRow();

    //Create 3 new cells in the newwly made row.
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();

    //Set the cells to the new book's inputted values.
    cell1.textContent = title1.value;
    cell2.textContent = author1.value;
    cell3.textContent = read1.checked;

    this.count++;
  };
}

//Created new Library object. Classes are object blueprints.
const testLibrary = new Library();

console.log(testLibrary);

//Since new object was made, can call the add method.
testLibrary.addBook();

//Select button element, add listener to make it function.
let button = document.getElementById("button");
button.addEventListener("click", () => testLibrary.addBook());


