import React from "react";
import './Icon.css';
import { faUsers, faUserMd, faProcedures, faHospital } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Icon(){
    return(
        <section class="icons-container">

            <div class="icons">
                <FontAwesomeIcon icon={faUserMd} class="fa"/>
                <h3>140+</h3>
                <p>doctors at work</p>
            </div>

            <div class="icons">
                <FontAwesomeIcon icon={faUsers} class="fa"/>
                <h3>1040+</h3>
                <p>satisfied patients</p>
            </div>

            <div class="icons">
                <FontAwesomeIcon icon={faProcedures} class="fa"/>
                <h3>500+</h3>
                <p>bed facility</p>
            </div>

            <div class="icons">
                <FontAwesomeIcon icon={faHospital} class="fa"/>
                <h3>80+</h3>
                <p>available hospitals</p>
            </div>

        </section>
        
    )
}
