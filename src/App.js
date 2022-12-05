import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import './styles/main.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
