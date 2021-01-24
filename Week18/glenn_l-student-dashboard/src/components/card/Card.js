import React from "react";
import { useSelector } from "react-redux";

const Card = (props) => {
    const matchingUrl = props.match.params.name;
    const cardDataOfAllStudents = useSelector(state => state.cardState);
    const student = cardDataOfAllStudents.filter(({ Name }) => Name === matchingUrl);
    
    return (
        <div className="main__container">
            <div className="main__card">
                <img
                    alt="Card"
                    src={student[0].Photo}
                    className="main__img"
                />
                <ul className="main__cardlist">
                    <li className="main__listtitle">
                        {student[0].Name} {student[0].Lastname}
                    </li>
                    <li className="main__listitem">Age: {student[0].Age}
                    </li>
                    <li className="main__listitem">Phone:  {student[0].Phone}
                    </li>
                    <li className="main__listitem">Email: {student[0].Email}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;