import '../../styles/App.css';
import '../../styles/list.css';

function List2() {
    return (
        <div className={"List2"}>
            <p>My setup:</p>
            <ol>
                <li id="first_list_item">Camera body: Canon EOS 5D Mark II</li>
                <li>Wide lens: Canon EF 24-105mm f4L IS</li>
                <li>Telephoto lens: Canon EF 70-200mm f4L USM</li>
                <li>Editing software: Adobe Lightroom Classic</li>
                <li>Editing machine: 2020 M1 MacBook Air</li>
            </ol>
        </div>
    );
}

export default List2;
