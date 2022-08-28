import React from 'react';
import './styles/App.css';
import Footer from './components/Footer';
import SimpleHeader from './components/SimpleHeader';
import TokenCard from './components/TokenCard';

function Token() {
    return(
        <div>
            <SimpleHeader/>
            <TokenCard/>
            <Footer />
        </div>
    );
}

export default Token;