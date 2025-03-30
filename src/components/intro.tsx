import '../styles/App.css';

type introProps = {
    name1: string;
    name2: string;
};

function Intro(props:introProps) {
    return (
        <div className={"Intro"}>
            <h1>Intro</h1>
            <h2>Introducing {props.name1}:</h2>
            <p>
                I am a sophomore at Worcester Polytechnic Institute studying Computer Science
                and Electrical and Computer Engineering. My main interests in these fields are
                computer networks, operating systems, embedded systems, and PCB design. I am
                from Abington, Massachusetts, and I have lived there my whole life.
            </p>
            <h2>Introducing {props.name2}:</h2>
            <p>
                My name is {props.name2}, and I'm a CS major in the class of 2027
            </p>
        </div>
    );
}

export default Intro;
