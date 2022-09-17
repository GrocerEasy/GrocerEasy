import React from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ShoppingCart from './components/ShoppingCart';


function App() {

    const userName = "John Doe" // CHANGE when authentication works
  
    return (
      <div>
        <Header userName={userName}/>
        <br />
        <InputBox />
        <br />
        <ShoppingCart />
      </div>


    );
  }


export default App;

//install postgress