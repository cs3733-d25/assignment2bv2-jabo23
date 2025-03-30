import '../../styles/App.css';

function Table2() {
    return (
        <div className={"Table2"}>
            <table className="collapse bottom_margin">
                <caption>My Camera History</caption>
                <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Sensor MP Count</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Panasonic</td>
                    <td>DMC-TS20</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>Apple</td>
                    <td>iPod Touch (6th Generation)</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Canon</td>
                    <td>EOS Rebel T5</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>Canon</td>
                    <td>EOS 5D Mark II</td>
                    <td>21</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table2;
