import React from 'react';
import Data from './data';
import Tour from './Tour';
import './App.css';


function App() {
    return(
        <main>
            <section>
                <div className='title'>
                    <h2>Our Tours</h2>
                    <div className='underline'></div>
                </div>
                <div className='tours'>
                    <Tour Mal={Data} />
                </div>
            </section>
        </main>
    )
}

export default App;
