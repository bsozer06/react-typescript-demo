import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export default function User() {
    const [user, setUser] = useState<AuthUser | null>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: "Burhan",
            email:"bsozer06@gmail.com"
        })
    }
    // const handleLogout = () => {
    //     setUser(null);
    // }

    return (
        <>
            <button onClick={handleLogin}>login</button>
            {/* <button onClick={handleLogout}>logout</button> */}
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email} </div>
        </>
    );
}
