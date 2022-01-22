type ContainerProps = {
    styles: React.CSSProperties
}

export default function Container(props: ContainerProps) {
    return (
        // <div style={{ border: "1px solid black", padding: "1rem"}}></div>
        <div style={props.styles}></div>
    );
}
