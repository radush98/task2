import React, { Fragment } from "react";
import { Control } from "../components/Control";
import { Form } from "../components/Form";
import { Table } from "../components/Table";

export const Home = () => {
    return (
        <Fragment>
            <h1>Notes</h1>
            <Table isArchived={false}></Table>
            <div className="main-controls">
                <Control name={'Archive'} link={'/archive'}></Control>
                <button className="main-controls-button">Create note</button>
            </div>
            <Form></Form>
        </Fragment>
    )
}