import {useSearchParams} from 'react-router-dom'

function Filter(){
    const [searchParams,setSearchParams]= useSearchParams();
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age= searchParams.get('age')
    const city= searchParams.get('city')

    return(
        <div>
            <h1>Filter page.</h1>
            <h3>Age is : {age}</h3>
            <h3>City is : {city}</h3>
            <button onClick={()=>setSearchParams({age:30})}>Set Age</button>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})}  />
        </div>
    )
}

export default Filter;