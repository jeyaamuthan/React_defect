import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Form from './components/form';
import Table from './components/table';
function App() {
  return (
    <div className="App">
  <Header/>
    <Form/>
    <Table />
    
    </div>
  );
}

export default App;
