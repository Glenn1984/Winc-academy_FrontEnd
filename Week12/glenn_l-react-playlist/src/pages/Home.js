import React from "react";
import InputForm from "../components/InputForm";
import Table from "../components/Table";

const Home = () => {
    return <>
            <div>
                <br/>
                    <h3>My favourite playlist</h3>
                    <InputForm />
            </div>
                <br/>
                <br/>
                <hr />
            <div>
                <Table />
            </div>
    </>
};

export default Home;