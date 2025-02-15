import {Link} from 'react-router-dom';

export default function Contact() {
    return(
        <>
            <h2>Contact Me</h2>
            <div>
            <Link to='https://github.com/hookhamk'>My Github</Link>
            </div>
            <div>
            <a href="mailto:hookhamk8@gmail.com">Email Me</a>
            </div>
        </>
    )
}