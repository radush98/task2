import React, { Fragment } from "react";
import { Control } from "../components/Control";
import { Form } from "../components/Form";
import Table from "../components/Table";
import { useDispatch } from "react-redux";
import { setNote } from "../redux/actions";
import { useState } from "react";
import { SummaryTable } from "../components/SummaryTable";

export const Home = () => {
    const dispatch = useDispatch();

    const [displayMode, setDisplayMode] = useState(false);

    return (
        <Fragment>
            <h1>Notes</h1>
            <Table
                isArchived={false}
                setDisplayMode={setDisplayMode}
            >
            </Table>
            <div className="main-controls">
                <Control
                    name={'Archive'}
                    link={'/archive'}>
                </Control>
                <button className="main-controls-button" onClick={() => {
                    dispatch(setNote({
                        name: '',
                        category: '',
                        content: ''
                    }));
                    setDisplayMode(true)
                }}>Create note</button>
            </div>
            <Form
                displayMode={displayMode}
                changeState={setDisplayMode}
            >
            </Form>
            <SummaryTable></SummaryTable>
        </Fragment>
    )
}