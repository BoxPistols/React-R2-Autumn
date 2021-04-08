import React from 'react';
import './css/styles.sass';
import { CountUp } from './hooks/CountUp';

export default function App() {
    return (
        <div className="App">
            <h1 className="tx-ml">React 2021</h1>
            <div className="section">
                <CountUp />
            </div>
        </div>
    );
}
