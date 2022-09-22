const cartApis = {
  addCartToDatabase: async (payload) => {
    console.log('payload', payload)
    payload.forEach(item => {item = item.props.item
      console.log('item', item)
      let url, options;
      url = '/cart/update';
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({food_name: item.food_name, food_id: item.food_id, food_price: item.food_price, quantity:item.quantity, cart_id: item.cart_id})
      };
      
      console.log("PAYLOAD",item)
      fetch(url, options)
        .then((response) => response.json())
        .then((returnedData) => {
          // console.log('Returned Data', returnedData);
          return;
        })
        .catch((err) => console.log(`Error with krogerApi ${request}`, err));
  
      return ;

    })
  }
    
};

export default cartApis;