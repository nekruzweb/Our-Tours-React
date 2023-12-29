import React from 'react';
import './App.css';
import Rewievs from './Rewievs';
import Data from './data';


function App() {
    return(
        <main>
            <section className='container'>
                <div className='title'>
                    <h2>Our Reviews</h2>
                    <div className='underline'></div>
                </div>
                <Rewievs MAL={Data} />
            </section>
        </main>
    )
}

export default App;
