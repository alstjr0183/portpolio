import React , {useEffect} from 'react'
import styles from './blog.module.css'
import Youtubebox from "../youtubebox/youtubebox";

const Blog =  ({closemenutRef})=>{
    
    return (
        <div className={styles.div}>
            준비중입니다
            <Youtubebox closemenutRef={closemenutRef} />
        </div>
    )
}

export default Blog