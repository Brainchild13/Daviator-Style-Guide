// import './App.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
// import Layout from './pages/Layout';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted'
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import InAction from './pages/InAction';
import Docs from './pages/Docs';
import GitRepo from './pages/GitRepo';
import NoPage404 from './pages/NoPage404';

function App() {
  return (
    <div className="App">
      
      <Routes>
        
          <Route path="/" element={ <Layout/> } />
          <Route index element={ <Home/> } />

          <Route path="get-started" element={ <GetStarted/> } />
          <Route path="blog" element={ <Blog/> } />
          <Route path="contact" element= { <Contact/> } />
          <Route path="about" element={ <About/> } />
          <Route path="in-action" element={ <InAction/> } />
          <Route path="docs" element={ <Docs/> } />
          <Route path="git-repo" element={ <GitRepo/> } />
          <Route path="*" element={ <NoPage404/> } />
          
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="main-content">
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default App;
