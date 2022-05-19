import {useState} from 'react'

const Contact = () => {

        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

        const [likes, setLikes] = useState(0)

        function handleClick() {
            setLikes(likes + 1)
        }
    return (
        <div>
            <h1>Contact Page</h1>

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}

export default Contact;
