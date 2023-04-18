import React from "react";
import logo from "./logo2.png"
import './Navbar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"



export function Profile(){
    return(
        <a class="logo-name"><img src={logo} class="logo"/>Victor Hospital</a>
    );
}

export function Menubtn(){
    return(
        <FontAwesomeIcon icon={faBars} id="menu-btn"/>
    );
};

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
    return(
        <header class="header">
            <Profile/>
            <Navbar/>
            <Menubtn/>
        </header>
    );
}