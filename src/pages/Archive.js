import React, { Fragment } from "react";
import { Control } from "../components/Control";
import Table from "../components/Table";

export const Archive = () => {
    return (
        <Fragment>
            <h1>Archive</h1>
            <Table
                isArchived={true}
            >
            </Table>
            <div className="main-controls">
                <Control name="Back" link="/"></Control>
            </div>
        </Fragment>
    )
}