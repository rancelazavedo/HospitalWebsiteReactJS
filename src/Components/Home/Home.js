import React from "react";
import './Home.css';
import docImg from './doctor2.png'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Home(){
    return(
        <section class="home" id="home">

                <div class="image">
                    <img src={docImg} alt="./doctor2.png"/>
                </div>

                <div class="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                    <a href="#" class="btn"> contact us <FontAwesomeIcon icon={faChevronRight}/></a>
                </div>

        </section>
        
    )
}
