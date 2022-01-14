import React, { Fragment } from "react";
import { Control } from "../components/Control";
import { Form } from "../components/Form";
import { Table } from "../components/Table";
import notes from "../data/notes";

export const Home = () => {
    return (
        <Fragment>
            <h1>Home</h1>
            <Table notes={notes}></Table>
            <Control name={'Archive'} link = {'/archive'}></Control>
            <Form></Form>
        </Fragment>
    )
}