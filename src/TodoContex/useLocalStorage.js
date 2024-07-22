import React from "react";

function useLocalStorage(itemName, inititialValue){
   const [item, setItem] = React.useState(inititialValue);
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false);
   
  
    

    React.useEffect(() =>{
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          
          let parsedItem;
  
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(inititialValue));
          parsedItem = [];
        }
        setItem(parsedItem);
        setLoading(false);
        }catch(error){
          setError(true);
          setLoading(false);
        }
      }, 2000);
    } , []);

   
  
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    return {item, 
      saveItem, 
      loading, 
      error
      };
  }

  export {useLocalStorage};