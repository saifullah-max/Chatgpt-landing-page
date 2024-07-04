import logo from './logo.svg';
import './App.css';
import {  Brand, Cta, Navbar } from './component';
import { Blog, Feature, Footer, Header, Possibility, WhatGpt3 } from './containers';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
