import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { TableRow } from './TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/actions';

const Table = ({ isArchived, setCurrentNote }) => {
    const notes = useSelector(state => {
        const { notesReducer } = state;
        return notesReducer.notes;
    });
    return (
        <div className="top-table">
            <table className="table">
                <colgroup>
                    <col className="first-column" />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="date-column" />
                    <col className="last-column" />
                </colgroup>
                <thead className="table-head">
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Created</td>
                        <td>Category</td>
                        <td>Content</td>
                        <td>Dates</td>
                        <td>{
                            !isArchived ? (
                                <Fragment>
                                    <button className="table-body-button" id="placehoder">Edit</button>
                                    <button className="table-body-button" id="archive-all">Archive</button>
                                    <button className="table-body-button" id="delete-all">Delete</button>
                                </Fragment>
                            ) : <button className="table-body-button" id="unarchive-all">Unarchive</button>
                        }
                        </td>
                    </tr>
                </thead>
                <tbody className="table-body" id="main-content">
                    {
                        notes.map(note => (
                            <TableRow key={note.id} note={note} setCurrentNote={setCurrentNote}>
                            </TableRow>
                        )
                        )
                        // getNotes(isArchived).map(note => (
                        //     <TableRow key={note.id} note={note} isArchived={isArchived} setCurrentNote={setCurrentNote}>
                        //     </TableRow>
                        // ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;