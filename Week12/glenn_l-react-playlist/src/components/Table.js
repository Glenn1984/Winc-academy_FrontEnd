import TableItem from "../components/TableItem";
import { useSelector } from "react-redux";

const Table = () => {
    const currentState = useSelector(state => state.handleState);
    return <table>
                <thead>
                    <tr>
                        <th>Songs</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>{" "}</th>
                    </tr>
                </thead>
                <tbody>
                    {currentState.map(state => {
                        return <TableItem key={state.id} value={state} />
                    })}
                </tbody>
            </table>;
};

export default Table;
