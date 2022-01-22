import React from 'react';

type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
};

export default function Greet(props: GreetProps) {

    const {messageCount = 0} = props;
    
    if (!props.isLoggedIn) {
        return <h1>You are not in the account now !</h1>
    }
    
    return <>
        <h2>Welcome {props.name}</h2>
        <h4>You have {messageCount} unread mesagges.</h4>
    </> 
}
