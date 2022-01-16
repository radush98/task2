import React, { Fragment, Component } from "react";
import { Control } from "../components/Control";
import { Form } from "../components/Form";
import Table from "../components/Table";

export class Home extends Component {

    state = {
        displayMode: false,
        currentNote: null
    }

    changeState = displayMode => {
        this.setState({ displayMode });
    }

    setCurrentNote = currentNote => {
        this.changeState(true);
        this.setState({ currentNote });
    }

    createNote = () => {
        this.setCurrentNote(null);
    }

    render() {
        return (
            <Fragment>
                <h1>Notes</h1>
                <Table
                    isArchived={false}
                    setCurrentNote={this.setCurrentNote}
                >
                </Table>
                <div className="main-controls">
                    <Control
                        name={'Archive'}
                        link={'/archive'}>
                    </Control>
                    <button className="main-controls-button" onClick={() => this.createNote()}>Create note</button>
                </div>
                <Form
                    displayMode={this.state.displayMode}
                    changeState={this.changeState}
                    currentNote={this.state.currentNote}>
                </Form>
            </Fragment>
        )
    }
}