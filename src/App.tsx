import React from 'react';
import './App.css';
import {BooksSearch} from "./components/BooksSearch/BooksSearch";
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="app">
            <div className="content">
                <BooksSearch/>
            </div>
        </div>
    );
}

export default App;
