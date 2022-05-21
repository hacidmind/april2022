import { useState } from 'react';
import {useRouter} from 'next/router'

const Contact = () => {

        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "Serena Williams"]

        const [likes, setLikes] = useState(0)
        const [dislikes, setDislikes] = useState(0)

        function handleLike() {
            setLikes(likes + 1)
        }

    function handleDislikes() {
        setDislikes(dislikes -1)
    }

    const router = useRouter()

    return (
        <div>
            <h1>Contact Page</h1>

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleLike}>Like ({likes})</button>
            <button onClick={handleDislikes}>DisLike ({dislikes})</button>
            <br />
            <br />
            <br />
            <button type='button' onClick={()=> router.push('/')}>Click me To go Home</button>
            
        </div>
    );
}

export default Contact;
