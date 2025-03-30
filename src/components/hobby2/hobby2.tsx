import '../../styles/App.css';
import List2 from "./list2.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";

function Hobby2() {
    return (
        <div className={"Hobby2"}>
            <h1 id={"title"}>Chris's Hobby: Photography</h1>
            <div id={"bird"}>
                <img src={"/IMG_2341.JPG"} alt={"Image of a bird"} width={640}/>
            </div>
            <p>I've been avidly taking photos for as long as I can remember, starting out with a small digital camera and my
                iPod touch. I got my first DSLR ("fancy" camera), a Canon EOS Rebel T5, in middle school. Now I shoot with a
                Canon EOS 5D Mark II, which I take with me at every opportunity I get. The photo you see above was taken on a
                recent trip to The Butterfly Place!</p>
            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
}

export default Hobby2;
