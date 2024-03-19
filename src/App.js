
import About from './About/About';
import './App.css';
import BookTable from './BookTable/BookTable';
import Header from './Header/Header';
import Home from "./Home/Home"
import Step from './Step/Step';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>
      <main>
        <Home/>
        <Step/>
        <BookTable/>
        <About/>
      </main>
    </div>
  );
}

export default App;
