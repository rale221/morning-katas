

const App = () => {

     const [books, setBooks] = React.useState([{
       id: 1,
       name: 'First book'
     }]);
     const [currentBookName, setCurrentBookName] = React.useState('');
   
     function renderItems() {
       return books.map(book => {
         return (
           <li className="list-group-book book row" key={book.id}>
             <span className="book-name">{book.name}</span>
             <button
               className="delete-book btn btn-danger"
               onClick={() => deleteBook(book)}
             >Delete</button>
           </li>
         );
       });
     }
   
     return (
       <div>
       <div className="form-row add-book-form container">
         <input
         id="newBookName"
         placeholder="Enter book name"
         type="text"
         className="form-control"
         value={currentBookName}
         onChange={e => setCurrentBookName( e.target.value )}
         />
         <button id="addBook" className="btn btn-primary" onClick={() => addBook()}>Add Book</button>
       </div>
       <hr />
       <ul className="book-list container">
         {renderItems()}
       </ul>
       </div>
     );
   }
   
   ReactDOM.render(
     <App />,
     document.getElementById('app')
   );
   