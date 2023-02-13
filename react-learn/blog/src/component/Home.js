import {Link, useLocation} from 'react-router-dom'

function Home(){
   const location = useLocation();
   console.log(location)

    return(
        <div>
            <h1>Home page.</h1>
            <p>This is our home page</p>
            <p>here we are learn react js</p>
            <Link to="/about">Go to About Page</Link>
        
        </div>
    )
  
    
}

export default Home