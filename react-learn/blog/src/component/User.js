import { useParams } from "react-router-dom";

function User(){
    const params = useParams();
    const {name} = params
    console.log(name)
    return(
        <div>
            <h1>This is {name}'s page</h1>
        </div>
    )
}

export default User;