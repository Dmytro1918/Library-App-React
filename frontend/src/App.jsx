import './App.css';
import { Filter } from './components/filter/Filter';
import { BookForm } from './components/bookForm/bookForm';
import  { BookList }  from './components/bookList/bookList';

function App() {
  return (
    <div className="app">
      <header className='app-header'>
         <h1> Book library app </h1>
      </header>
      <main className='app-main'>
        <div className='app-left-column'>
          <BookForm />
        </div>
        <div className='app-right-column'>
          <Filter/>
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
