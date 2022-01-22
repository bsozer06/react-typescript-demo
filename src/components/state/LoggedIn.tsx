import { useState } from "react";

export default function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>User is {isLoggedIn ? "logged in" : "logged out"} </div>
        </>
    );
}
