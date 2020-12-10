import React , {useRef} from 'react'
import styles from './main.module.css'
import { Route, Link } from "react-router-dom";
import Portpolio from "../portpolio/portpolio";
import Skill from "../skill/skill";
import Blog from "../blog/blog";

const Main =  ()=>{
    const closemenutRef = useRef()

    return (
        <div className={styles.div}>
            <section ref={closemenutRef} className={styles.section}>
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
            </section>
            <main className={styles.main}>
                <Route path="/" component={Portpolio} exact />
                <Route path="/skill" component={Skill} />
                <Route path="/blog" render={() => <Blog closemenutRef={closemenutRef} /> }/>
            </main>
        </div>
    )
}

export default Main