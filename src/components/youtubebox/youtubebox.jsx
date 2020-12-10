import React , {useRef ,useEffect ,useState} from 'react'
import styles from './youtubebox.module.css'

const Youtubebox =  ({closemenutRef})=>{
    const [youtubeapi , setYoutubeapi] = useState([])
    const [iframeState , setIframeState] = useState(1)

    const youtubeboxRef = useRef()
    const searchinputRef = useRef()
    const iframeRef = useRef()

    // 유투브 검색 기능
    const showyoutubebox = ()=>{
        if (youtubeboxRef.current.style.width === '55%'){
            youtubeboxRef.current.style.width = '0%'
            closemenutRef.current.style.width = '30%'
        } else {
            youtubeboxRef.current.style.width = '55%'
            closemenutRef.current.style.width = '0%'
        }
    }

    const searchHandle = (query)=>{
       const value = searchinputRef.current.value
        searchyoutube(value)
    }

    const searchClick = () =>{
        searchHandle()
    }

    const searchPress = event =>{
        if (event.key === 'Enter'){
            searchHandle()
        }
    }

    const searchyoutube = query =>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=AIzaSyCLkg3RhCjwc-FNdMSjp_i2EFwXfAKZ8fo`, requestOptions)
            .then(response => response.json())
            .then(result => setYoutubeapi(result.items))
            .catch(error => console.log('error', error));
    }

    // 유투브 iframe 부분

    const iframeShow = ()=>{
        iframeRef.current.style.display ='block'
    }

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=frontend&key=AIzaSyCLkg3RhCjwc-FNdMSjp_i2EFwXfAKZ8fo", requestOptions)
            .then(response => response.json())
            .then(result => setYoutubeapi(result.items))
            .catch(error => console.log('error', error));
    },[])
console.log(youtubeapi)
    return (
        <div className={styles.div}>
            <div className={styles.youtubeicon}>
                <i onClick={showyoutubebox} className="fab fa-youtube"></i>
            </div>
           <section ref={youtubeboxRef} className={styles.section}>
                <div className={styles.searchbox}>
                    <div className={styles.inputbox}>
                        <input ref={searchinputRef} onKeyPress={searchPress} type="search"/>
                        <button type={"submit"}>
                            <i onClick={searchClick} className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className={styles.closebox}>
                        <i onClick={showyoutubebox} className="far fa-window-close"></i>
                    </div>
                </div>
               <div className={styles.listbox}>
                   {youtubeapi.map(api =>(
                       <div key={api.id.videoId}>
                        <img onClick={iframeShow} src={api.snippet.thumbnails.medium.url} alt=""/>
                        <h1>{api.snippet.title}</h1>
                           <iframe ref={iframeRef} src={`https://www.youtube.com/embed/${api.id.videoId}`} frameborder="0"></iframe>
                       </div>
                   ))}
               </div>
           </section>
        </div>
    )
}

export default Youtubebox;