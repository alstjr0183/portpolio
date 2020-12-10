import React ,{useRef} from 'react'
import styles from './header.module.css'
import {Link} from "react-router-dom";

const Header =  ()=>{
    const HeadericonRef = useRef()
    const HeaderSection = useRef()
    const HeaderCloseicon = useRef()

    const HeaderIconClick = ()=>{
        HeaderSection.current.style.display="block"
    }

    const HeaderIconClickClose = ()=>{
        HeaderSection.current.style.display="none"
    }
    return (
        <div className={styles.header}>
            <div className={styles.icon}>
                <i ref={HeadericonRef} onClick={HeaderIconClick} className="fas fa-stream"></i>
            </div>
            <div className={styles.title}>
                <a href="http://54.180.17.168:3001/">
                    Minsuk.com
                </a>
            </div>
            <section ref={HeaderSection} className={styles.section}>
                <div className={styles.section_div}>
                    <i ref={HeaderCloseicon} onClick={HeaderIconClickClose} className="fas fa-window-close"></i>
                    <ul>
                        <li>
                            <Link to="/">PortPolio</Link>
                        </li>
                        <li>
                            <Link to="/skill">Skill</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Header