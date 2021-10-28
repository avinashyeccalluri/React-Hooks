
import {useState, useEffect} from 'react'


const UseEffect = () => {

    
    const [resourseType, setResourseType] = useState("posts");

    const [items, setItems] = useState([])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // useEffect(() => {

    //     fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
    //         .then(response => response.json())
    //         .then(json=> setItems(json))
        
    //     console.log("render");
    // },[resourseType])

    const handleResize = () => {

        setWindowWidth(window.innerWidth)
        
    }

    useEffect(() => {
        console.log('use effect');
        window.addEventListener('resize', handleResize);

        return () => {
            console.log("return state");
            window.removeEventListener('resize', handleResize);
        }
        
    })
    
    return (
        <>
            {/* <div>
                <button onClick= {()=> setResourseType('posts')}>Posts</button>
                <button onClick= {()=> setResourseType('users')}>Users</button>
                <button onClick= {()=> setResourseType('comments')}>Comments</button>
            </div>
            <h1>{resourseType}</h1>
            {items.map((item) => {
                return <pre>{ JSON.stringify(item) }</pre>
            })} */}
            {windowWidth}

            
        </>
    )

}

export default UseEffect