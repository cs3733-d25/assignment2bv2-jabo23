import '../../styles/App.css';

function Form2() {
    return (
        <div className={"Form2"}>
            <h2>Survey Time!</h2>
            <p>This doesn't actually go anywhere, but I hope you have fun anyway :)</p>
            <form>
                <div className="bottom_margin">
                    <label htmlFor="full_name">Your name:</label>
                    <input type="text" id="full_name"/>
                </div>
                <div className="bottom_margin">
                    <label htmlFor="user_camera">Your camera:</label>
                    <input type="text" id="user_camera"/>
                </div>
                <p>Which types of camera have you used?</p>
                <div className="bottom_margin">
                    <div>
                        <input type="checkbox" id="dslr"/>
                        <label htmlFor="dslr">DSLR</label>
                    </div>
                    <div>
                        <input type="checkbox" id="mirrorless"/>
                        <label htmlFor="mirrorless">Mirrorless</label>
                    </div>
                    <div>
                        <input type="checkbox" id="film"/>
                        <label htmlFor="film">Film</label>
                    </div>
                </div>
                <p>If you've used all three, which is your favorite?</p>
                <div className="bottom_margin">
                    <div>
                        <input type="radio" id="radio_dslr" name="favorite_camera_type"/>
                        <label htmlFor="radio_dslr">DSLR</label>
                    </div>
                    <div>
                        <input type="radio" id="radio_mirrorless" name="favorite_camera_type"/>
                        <label htmlFor="radio_mirrorless">Mirrorless</label>
                    </div>
                    <div>
                        <input type="radio" id="radio_film" name="favorite_camera_type"/>
                        <label htmlFor="radio_film">Film</label>
                    </div>
                </div>

                <div className="bottom_margin">
                    <label htmlFor="photo_count">How many photos are in your phone's camera roll?</label>
                    <select name="photo_count" id="photo_count">
                        <option value="below100">100 or less</option>
                        <option value="over100">Over 100</option>
                        <option value="over1k">Over 1,000</option>
                        <option value="over5k">Over 5,000</option>
                        <option value="over10k">Over 10,000</option>
                        <option value="over25k">Over 25,000</option>
                        <option value="over50k">Over 50,000</option>
                        <option value="over75k">Over 75,000</option>
                        <option value="over100k">Over 100,000</option>
                    </select>
                </div>

                <div className="bottom_margin">
                    <label htmlFor="comments">Any other thoughts about photography?</label>
                    <textarea id="comments" cols={40} rows={10}></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form2;
