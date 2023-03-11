// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Home from './pages/Home.js';
import GetStarted from './pages/Get-Started.js'
import Docs from './pages/Docs.js'
import About from './pages/About.js'; 
import SeeItInAction from './pages/SeeItInAction.js'
import Introduction from './pages/Introduction.js';
import UIElements from './pages/UIElements.js';
import Headings from './pages/Headings'
import Buttons from './pages/Buttons.js';
import Fonts from './pages/Fonts.js';
import Colors from './pages/Colors.js';
import Cards from './pages/Cards.js';
import Images from './pages/Images.js';
import Tables from './pages/Tables.js';
import Forms from './pages/Forms.js';
import Footer from './components/Footer.js'; 


function App() {
  return (
    <div className="App container">
      <Header />
      <div className="content-wrapper">
         <Sidebar />
      
         {/* <!-- Main Content Section --> */}
            <div class="main-content">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/get-started" element={ <GetStarted /> } />
        <Route path="/docs" element={ <Docs /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/in-action" element={ <SeeItInAction /> } />
        <Route path="/introduction" element={ <Introduction /> } />
        <Route path="/ui-elements" element={ <UIElements /> } />
        <Route path="/headings" element={ <Headings /> } />
        <Route path="/buttons" element={ <Buttons /> } />
        <Route path="/fonts" element={ <Fonts /> } />
        <Route path="/colors" element={ <Colors /> } />
        <Route path="/cards" element={ <Cards /> } />
        <Route path="/images" element={ <Images /> } />
        <Route path="/tables" element={ <Tables /> } />
        <Route path="/forms" element={ <Forms /> } />
      </Routes>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
