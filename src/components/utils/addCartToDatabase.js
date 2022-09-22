const cartApis = {
  addCartToDatabase: async (payload) => {
    
    let url, options;
    url = '/cart/update';
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {}
    };
    // console.log("PAYLOAD", payload, "REQUEST", request, "URL", url)
    const response = await fetch(url, options)
      .then((response) => response.json())
      .then((returnedData) => {
        // console.log('Returned Data', returnedData);
        return returnedData;
      })
      .catch((err) => console.log(`Error with krogerApi ${request}`, err));

    return response;
  },
};

export default cartApis;