import TableItem from "../components/TableItem";
import { useSelector } from "react-redux";

const Table = () => {
    const currentState = useSelector(state => state.handleState);
    return <table className="table">
                <thead className="table__header">
                    <tr>
                        <th className="table__header--style">Title</th>
                        <th className="table__header--style">Artist</th>
                        <th className="table__header--style">Genre</th>
                        <th className="table__header--style">Rating</th>
                        <th className="table__header--style">{" "}</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {currentState.map(state => {
                        return <TableItem key={state.id} value={state} />
                    })}
                </tbody>
            </table>;
};

export default Table;
