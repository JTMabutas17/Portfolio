import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Achievements content=""/>
    </div>
  );
}

export default App;
