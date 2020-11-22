import {useDispatch} from "react-redux";
import { deleteFavourites } from "../actions";

const TableItem = (props) => {
    const data = props.value;
    let dispatch = useDispatch();
    return <tr
            className="table__tr"
            key={data.id}
            >
                <td className="table__body--style">{data.title}</td>
                <td className="table__body--style">{data.artist}</td>
                <td className="table__body--style">{data.genre}</td>
                <td className="table__body--style">{data.rating}</td>
                <td>
                <button
                    className="table__body--style2"
                    onClick={() => dispatch(deleteFavourites(data.id))}
                >
                    Delete
                </button>
            </td>
        </tr>
};

export default TableItem;