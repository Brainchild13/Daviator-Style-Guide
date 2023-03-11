import * as React from 'react';
import { Routes,  Route } from 'react-router-dom';
// import Layout from './components/Layout';
import MainNav from './components/MainNav';
import Sidebar from './components/Sidebar';
import FooterNav from './components/FooterNav';
import Home from './components/pages/Home';
import GetStarted from './components/pages/GetStarted'
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import InAction from './components/pages/InAction';
import Docs from './components/pages/Docs';
import GitRepo from './components/GitRepo';
import NoPage404 from './components/NoPage404';
import Introduction from './components/Introduction';
import UIElements from './components/UIElements';
import Headings from './components/Headings';
import Buttons from './components/Buttons';
import Images from './components/Images';
import Tables from './components/Tables';
import Forms from './components/Forms';
import Colors from './components/Colors';
import Cards from './components/Cards';
import HTMLGeneral from './components/HTMLGeneral';
import Body from './components/Body';
import Containers from './components/Containers';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Icons from './components/Icons';
import Content from './components/Content';
import Hero from './components/Hero';
import Links from './components/Links';
import Sections from './components/Sections';
import Rows from './components/Rows';
import Lists from './components/Lists';
import Products from './components/Products';
import Posts from './components/Posts';
import ProfileImgs from './components/ProfileImgs';
import Footers from './components/Footers';
import Videos from './components/Videos';
import Popups from './components/Popups';



export default function App() {
  return (

     <div className="container">
        <MainNav />
        <div className="content-wrapper">
             <Sidebar />
        </div>

       
       
    
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/get-started" element={ <GetStarted /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/contact" element= { <Contact/ > } />
            <Route path="/about" element={ <About /> } />
            <Route path="/in-action" element={ <InAction /> } />
            <Route path="/docs" element={ <Docs /> } />
            <Route path="/git-repo" element={ <GitRepo /> } />

            <Route path="/introduction" element={ <Introduction /> } />
            <Route path="/ui-elements" element={ <UIElements /> } />
            <Route path="/headings" element={ <Headings /> } />
            <Route path="/buttons" element={ <Buttons /> } />
            <Route path="/images" element={ <Images /> } />
            <Route path="/tables" element={ <Tables /> } />
            <Route path="/forms" element={ <Forms /> } />
            <Route path="/colors" element={ <Colors /> } />
            <Route path="/cards" element={ <Cards /> } />
            <Route path="/html-general" element={ <HTMLGeneral /> } />
            <Route path="/body" element={ <Body /> } />
            <Route path="/containers" element={ <Containers /> } />
            <Route path="/navigation" element={ <Navigation /> } />
            <Route path="/logo" element={ <Logo /> } />
            <Route path="/icons" element={ <Icons /> } />
            <Route path="/content" element={ <Content /> } />
            <Route path="/Hero" element={ <Hero /> } />
            <Route path="/links" element={ <Links /> } />
            <Route path="/sections" element={ <Sections /> } />
            <Route path="/rows" element={ <Rows /> } />
            <Route path="/lists" element={ <Lists /> } />
            <Route path="/products" element={ <Products /> } />
            <Route path="/posts" element={ <Posts /> } />
            <Route path="/profile-imgs" element={ <ProfileImgs /> } />
            <Route path="/footers" element={ <Footers /> } />
            <Route path="/videos" element={ <Videos /> } />
            <Route path="/popups" element={ <Popups /> } />
            <Route path="*" element={ <NoPage404 /> } />
        </Routes>
      
        <FooterNav />
    </div>
    );
}
