import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';

function App() {
  let navStyle = {
    backgroundColor : "#000"
  }
  return (
    <div className="App">
      <header style={navStyle} className="App-header">
        < NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
