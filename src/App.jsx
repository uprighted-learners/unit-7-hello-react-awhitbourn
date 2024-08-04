import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;

