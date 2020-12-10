import React from 'react'
import styles from './portpolio.module.css'
import { Route, Link } from "react-router-dom";

const Portpolio =  ()=>{

    return (

        <div className={styles.div}>
            <a href="http://webdev.iptime.org/yms/heal/">
                <section className={styles.heal} >

                    <div>
                        <i className="fas fa-leaf"></i>
                        Healling Board</div>
                    <div>
                        Vanilla JS + PHP
                    </div>
                </section>
            </a>
            <a href="http://minsukweb.hopto.org:3000/">
                <section className={styles.room}>
                    <div>
                        <i className="fas fa-user-lock"></i>
                        Escape Room
                    </div>
                    <div>
                        React ( Class )
                    </div>
               </section>
            </a>

            <a href="http://webdev.iptime.org/yms/travel.php">
                <section className={styles.travel}>
                    <div><i className="fas fa-plane"></i>Travel</div>
                    <div>Vanilla JS</div>
                </section>
            </a>
        </div>
    )
}

export default Portpolio