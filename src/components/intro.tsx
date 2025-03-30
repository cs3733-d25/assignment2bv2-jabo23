import '../styles/App.css';

function Intro(props:any) {
    return (
        <>
            <h2>Intro</h2>
            <p>This is the intro for {props.name1}</p>
            <p>This is the intro for {props.name2}</p>
        </>
    );
}

export default Intro;
