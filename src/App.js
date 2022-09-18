import React, {userState, useEffect} from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {

  // Define States
  // const[newItemName, setNewItemName] = useState('');
  // const[itemQuantity, setItemQuantity] = useState(0);


    const userName = "John Doe" // CHANGE when authentication works
  
    return (
      <>
        <Header userName={userName}/>
        <br />
        <InputBox />
        <br />
        <ShoppingCart />
        <br />
        <Footer />
      </>


    );
  }


export default App;

//install postgress