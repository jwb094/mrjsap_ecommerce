import logo from './logo.svg';
import './App.css';
import { storeProducts } from './product';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
function App() {

  console.log(storeProducts);
  storeProducts.map(product =>{
    console.log(product.company);
  });
  return (
    

    <div className="App">
      <h1>App</h1>
      <Grid container spacing={2}>
      {
      storeProducts.map(product =>{
        return <div>
          <p> {product.company}</p>
        </div>
      })
    }
      </Grid>
  
      <div></div>

    </div>

    

  );
}

export default App;
