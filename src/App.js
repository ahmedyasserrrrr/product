import React from "react";
import Navbar from "./componant/Navbar";
import Home from "./componant/Home";
import Footer from "./componant/Footer";
import About from "./componant/About";
import Contacts from "./componant/Register";
import Details from "./componant/Details";
import { Route, Routes } from "react-router-dom";
import Searchproduct from "./componant/Searchproduct";
import Register from "./componant/Register";
import { useState } from "react";
import Cartlist from "./componant/Cartlist";
import Create from "./componant/Create";
import Productscard from "./componant/productscard";




function App() {

      const [cart,setcart]=useState([]);

      const addproduct = (data)=>{
        console.log(data)
        setcart([...cart,{...data,quantity:1}]);
      }          

      const [showcart,setshowcart]=useState([])

      const handleshow=(value)=>{
        setshowcart(value)
      }


  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element ={<Create/>} />
      <Route path="/home" element ={<Home/>} />
      <Route path="About" element ={<About/>} />
      <Route path="Register" element ={<Register/>} />
      <Route path="Productscard" element ={<Productscard/>} />
      <Route path="Details/:id" element ={<Details  addproduct={addproduct}   />} />
      <Route path="Cart" element ={<Cartlist  cart={cart} />} />
    </Routes>

      <Footer  handleshow={handleshow}    count={cart.length} />
  
    </div>
  );
}

export default App;
