import React from "react";

function Child(props){
    const {isLoggedIn, setIsLogged} = props;

    function handleSubmit(e){
        e.preventDefault();
        setIsLogged(true);
    }

    return(
        <div >
            <h1>Parent Component</h1>
            {isLoggedIn ? <h1>You are logged In!</h1>: 
            <form onSubmit={handleSubmit}>
                <label >Username:</label>
                <input id="username" name="username" />
                <br/>
                <label>Password:</label>
                <input id="password" name="password" />
                <br/>
                <button>Login</button>
            </form>
            }
        </div>
    )
}

export default Child;