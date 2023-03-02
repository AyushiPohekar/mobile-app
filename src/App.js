
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import PopularServices from './components/PopularServices';
import PopularServiceProvider from './components/PopularServiceProvider';
import Footer from './components/Footer';

function App() {
  return (
    <div>
   
       <Navbar/>
   
    <Header/>
    <Services/>
   <PopularServices/>
   <PopularServiceProvider/>
  <Footer/>
    </div>
  );
}

export default App;
