import '../../styles/App.css';

function Form1() {
    return (
        <>
            <h2>Leave a comment if you also like skiing!</h2>
            <form>
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname"/>
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email"/>
                <br/><br/>
                <input type="checkbox" id="mailinglist"/>
                <label htmlFor="mailinglist">Add to mailing list?</label>
                <br/>
                <input type="checkbox" id="allowreplies"/>
                <label htmlFor="allowreplies">Allow replies?</label>
                <br/>
                <input type="checkbox" id="anonymous"/>
                <label htmlFor="anonymous">Make comment anonymous?</label>
                <br/><br/>
                <span>Select your skill level:</span>
                <br/>
                <input type="radio" name="skilllevel" id="beginner" value="beginner"/>
                <label htmlFor="beginner">Beginner</label>
                <br/>
                <input type="radio" name="skilllevel" id="intermediate" value="intermediate"/>
                <label htmlFor="intermediate">Intermediate</label>
                <br/>
                <input type="radio" name="skilllevel" id="advanced" value="advanced"/>
                <label htmlFor="advanced">Advanced</label>
                <br/><br/>
                <label htmlFor="comment">Comment:</label>
                <br/>
                <textarea rows={5} cols={5} id="comment"></textarea>
                <br/><br/>
                <label htmlFor="region">What region do you typically ski?</label>
                <br/>
                <select name="region" id="region">
                    <option value="eastcoast">East Coast</option>
                    <option value="midwest">Midwest</option>
                    <option value="rockies">Rocky Mountains</option>
                    <option value="westcoast">West Coast</option>
                </select>
                <br/><br/>
                <button>Submit</button>
            </form>
        </>
    );
}

export default Form1;
