import './styles/App.css';
import Title from './components/title.tsx';
import Intro from './components/intro.tsx';
import Hobby1 from './components/hobby1/hobby1.tsx';
import Hobby2 from './components/hobby2/hobby2.tsx';

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <Title />
            <Intro name1={"Jacob"} name2={"Chris"}/>
            <Hobby1 />
            <Hobby2 />
        </>
    );
}

export default App;
