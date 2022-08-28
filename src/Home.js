import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Introduction from './components/Introduction';

function Home() {
    return(
        <div className="App">
        <Header />
        <Introduction />
        <Gallery />
        <Footer />
        </div>
    );
}

export default Home;