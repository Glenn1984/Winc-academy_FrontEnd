import React from "react";
import InputForm from "../components/InputForm";
import Table from "../components/Table";

const Home = () => {
    return <>
            <main className="main">
                <h3 className="main__text">Add here your favourite songs</h3>
                <InputForm />
                <section>
                    <Table />
                </section>
        </main>
    </>
};

export default Home;