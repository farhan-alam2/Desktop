import {Link} from 'react-router-dom'

function About(){
    return<>
    <h1>About page</h1>
    <p>This is our home page</p>
    <p>here we are learn react js</p>
    <Link to="/">Go to Home Page</Link>
    <li><Link to="/user/alam">Alam</Link></li>
    <li><Link to="/user/mohd">Mohd</Link></li>
    </>
}

export default About;