type HeadingProps = {
    children: string
}

function Heading(props: HeadingProps) {
    console.log(props);
    
    return (
        <h2>
            {props.children}
        </h2>
    );
}

export default Heading;
