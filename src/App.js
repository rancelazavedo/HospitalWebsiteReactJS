import './App.css';
import React from "react";
import { Header } from './Components/Header/Navbar'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import { Icon } from './Components/Home/Icon';
import {Booking} from './Components/Home/Booking'
import {About} from './Components/Home/About'

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function App() {
  return (
    <body>
      <Header/>
      <Home/>
      <Icon/>
      <About/>
      <Booking/>
      <Footer/>
    </body>  
  );
}

export default App;
