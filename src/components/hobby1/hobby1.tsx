import '../../styles/App.css';
import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form1.tsx";

function Hobby1() {
    return (
        <div className="Hobby1">
            <h2>Jacob's Hobby: Skiing</h2>
            <p>
                One of my favorite hobbies is skiing. I've been skiing for as long as I can
                remember: my patents got me started when I was about 2 years old. Ever since
                then I've fallen in love with the sport. I ski with my family most often; I
                have a lot of fun skiing with them. I also go on some of the trips hosted by
                WPI's Ski and Snowboard Club, where my roommate often joins me.
            </p>
            <div className={"hobby1img"}>
                <img src={"/jacobhobby.jpg"} alt="Ski Mountain Scenery" width="640" />
            </div>
            <List1 />
            <Table1 />
            <Form1 />
        </div>
    );
}

export default Hobby1;
