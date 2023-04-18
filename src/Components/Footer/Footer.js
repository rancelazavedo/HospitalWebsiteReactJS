import React from "react";
import {faChevronRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import{ faFacebookF, faPinterest, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"

export function Footer(){
    return(
        <section class="footer">

    <div class="box-container reveal">

        <div class="box">
            <h3>quick links</h3>
            <a href="#"> <FontAwesomeIcon icon={faChevronRight}/> home </a>
            <a href="#"> <FontAwesomeIcon icon={faChevronRight}/> services </a>
            <a href="#"> <FontAwesomeIcon icon={faChevronRight}/> about </a>
            <a href="#"> <FontAwesomeIcon icon={faChevronRight}/> doctors </a>
            <a href="#"> <FontAwesomeIcon icon={faChevronRight}/> book </a>
            <a href="#"> <FontAwesomeIcon icon={faChevronRight}/> review </a>
            <a href="#"> <FontAwesomeIcon icon={faChevronRight}/> blogs </a>
        </div>

        <div class="box">
            <h3>our services</h3>
            <a href="#"> <FontAwesomeIcon class={faChevronRight}/> dental care </a>
            <a href="#"> <FontAwesomeIcon class={faChevronRight}/> message therapy </a>
            <a href="#"> <FontAwesomeIcon class={faChevronRight}/> cardioloty </a>
            <a href="#"> <FontAwesomeIcon class={faChevronRight}/> diagnosis </a>
            <a href="#"> <FontAwesomeIcon class={faChevronRight}/> ambulance service </a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <FontAwesomeIcon class="faPhone"/> +123-456-7890 </a>
            <a href="#"> <FontAwesomeIcon class="faPhone"/> +111-222-3333 </a>
            <a href="#"> <FontAwesomeIcon class="faEnvelope"/> shaikhanas@gmail.com </a>
            <a href="#"> <FontAwesomeIcon class="faEnvelope"/> anasbhai@gmail.com </a>
            <a href="#"> <FontAwesomeIcon class="fas fa-map-marker-alt"/> mumbai, india - 400104 </a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#"> <FontAwesomeIcon class="faFacebookF"/> facebook </a>
            <a href="#"> <FontAwesomeIcon class="faTwitter"/> twitter </a>
            <a href="#"> <FontAwesomeIcon class="faTwitter"/> twitter </a>
            <a href="#"> <FontAwesomeIcon class="faInstagram"/> instagram </a>
            <a href="#"> <FontAwesomeIcon class="faLinkedin"/> linkedin </a>
            <a href="#"> <FontAwesomeIcon class="faPinterest"/> pinterest </a>
        </div>

    </div>

    <div class="credit"> created by <span>Rancel Azavedo</span> | all rights reserved </div>

</section>
    );
}