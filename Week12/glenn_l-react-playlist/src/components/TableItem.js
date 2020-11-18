import {useDispatch} from "react-redux";
import { deleteFavourites } from "../actions";

const TableItem = (props) => {
    const data = props.value;
    let dispatch = useDispatch();
    return <tr key={data.id}>
                <td>{data.title}</td>
                <td>{data.artist}</td>
                <td>{data.genre}</td>
                <td>{data.rating}</td>
                <td>
                <button
                    onClick={() => dispatch(deleteFavourites(data.id))}
                >
                    Delete
                </button>
            </td>
        </tr>
};

export default TableItem;