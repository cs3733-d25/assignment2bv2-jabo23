import '../styles/App.css';

function Intro(props:any) {
    return (
        <>
            <h2>Intro</h2>
            <p>This is the intro for {props.name1}</p>
            <p>My name is {props.name2}, and I'm a CS major in the class of 2027</p>
        </>
    );
}

export default Intro;
