import React from "react";
import logo from "./logo2.png"
import './Navbar.css'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';




export function Navbar(){
    return(
   
    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a href="#book">book</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
    </nav>

    );
}

export function Header(){
    const [toggle, setToggle] = useState(true);    
    const [navham, setNavham] = useState("navbar active")
    useEffect(()=>{
        if(toggle==true){
            setNavham('navbar')
        }
        else{
            setNavham('navbar active')
        }
        
    });
    console.log(toggle.valueOf)
    return(
        <div>
            <div class="header">
            <a class="logo-name"><img src={logo} class="logo"/>Victor Hospital</a>
            <nav class={navham}>
                <a href="#home">home</a>
                <a href="#services">services</a>
                <a href="#about">about</a>
                <a href="#doctors">doctors</a>
                <a href="#book">book</a>
                <a href="#review">review</a>
                <a href="#blogs">blogs</a>
            </nav>
            <button  id="menu-btn" onClick={()=>setToggle(!toggle)}><FontAwesomeIcon icon={faBars}/></button>
            </div>
        </div>
        
    )
}
