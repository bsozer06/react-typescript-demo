import React from 'react';

type GreetProps = {
    name: string
};

export default function Greet(props: GreetProps) {
    return <div>Welcome {props.name}</div>;
}
