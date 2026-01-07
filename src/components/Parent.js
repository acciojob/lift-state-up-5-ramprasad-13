import React,{useState} from "react";
import Child from '../components/Child';
function Parent(){
    const [isLoggedIn, setIsLogged] = useState(false);
    return <Child isLoggedIn = {isLoggedIn} setIsLogged = {setIsLogged} />
}

export default Parent;