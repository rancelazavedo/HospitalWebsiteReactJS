import React from "react";
import './About.css';
import docImg from './doctor4.png'

export function About(){
    return(
        <section class="about reveal" id="about">

            <h1 class="heading"> <span>about</span> us </h1>

            <div class="row">

                <div class="image">
                    <img src={docImg} alt=""/>
                </div>

                <div class="content">
                    <h3>we take care of your healthy life</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
                    <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                </div>

            </div>

        </section>
        
    )
}
