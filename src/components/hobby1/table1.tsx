import '../../styles/App.css';

function Table1() {
    return (
        <table className="collapse">
            <caption>Some of my favorite ski areas:</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>Vertical Drop</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Saddleback</td>
                    <td>Maine</td>
                    <td>2000 feet</td>
                </tr>
                <tr>
                    <td>Jay Peak</td>
                    <td>Vermont</td>
                    <td>2153 feet</td>
                </tr>
                <tr>
                    <td>Cannon</td>
                    <td>New Hampshire</td>
                    <td>2130 feet</td>
                </tr>
                <tr>
                    <td>Alta</td>
                    <td>Utah</td>
                    <td>2538 feet</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table1;
