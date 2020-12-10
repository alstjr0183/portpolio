import React from 'react'
import styles from './skill.module.css'

const Skill =  ()=>{
    return (
        <div className={styles.div}>
            <section className={styles.frontSection}>
                <div>
                    <span className={styles.skilltitle}>Front-End</span>
                </div>
                <div className={styles.sectionicon}>
                    <section>
                        <i className="fab fa-html5"></i>
                        <span>HTML</span>
                    </section>
                    <section >
                        <i className="fab fa-css3-alt"></i>
                        <span>CSS</span>
                    </section>
                    <section>
                        <i className="fab fa-js-square"></i>
                        <span>JAVASCRIPT</span>
                    </section>
                    <section>
                        <i className="fab fa-react"></i>
                        <span>REACT</span>
                    </section>
                </div>
            </section >
            <section className={styles.backSection}>
                <div>
                    <span className={styles.skilltitle}>Back-End</span>
                </div>
                <div className={styles.sectionicon}>
                    <section>
                        <i className="fab fa-php"></i>
                        <span>PHP</span>
                    </section>
                    <section >
                        <i className="fab fa-node"></i>
                        <span>NODE ( express )</span>
                    </section>
                </div>
            </section>
            <section className={styles.etcSection}>
                <div>
                    <span className={styles.skilltitle}>DB & HOSTING</span>
                </div>
                <div className={styles.sectionicon}>
                    <section>
                        <i className="fas fa-database"></i>
                        <span>MY SQL</span>
                    </section>
                    <section >
                        <i className="fab fa-ubuntu"></i>
                        <span>LINUX ( ubuntu )</span>
                    </section>
                    <section >
                        <i className="fab fa-aws"></i>
                        <span>AWS ( ec2 )</span>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Skill