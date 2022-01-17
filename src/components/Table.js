import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { TableRow } from './TableRow';
import { useSelector, useDispatch } from 'react-redux';
import { archiveNote, deleteNote } from '../redux/actions';

const Table = ({ isArchived, setDisplayMode }) => {

    const notes = useSelector(state => {
        const { notesReducer } = state;
        return notesReducer.notes;
    });

    const dispatch = useDispatch();

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
                                    <button
                                        className="table-body-button"
                                        id="placehoder"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="table-body-button"
                                        id="archive-all"
                                        onClick={() => dispatch(archiveNote("All", true))}
                                    >
                                        Archive
                                    </button>
                                    <button
                                        className="table-body-button"
                                        id="delete-all"
                                        onClick={() => dispatch(deleteNote("All", true))}>
                                        Delete
                                    </button>
                                </Fragment>
                            ) :
                                <button
                                    className="table-body-button"
                                    id="unarchive-all"
                                    onClick={() => dispatch(archiveNote("All", false))}
                                >
                                    Unarchive
                                </button>
                        }
                        </td>
                    </tr>
                </thead>
                <tbody className="table-body" id="main-content">
                    {
                        notes
                            .filter(note => isArchived ? note.archive : !note.archive)
                            .map(note => (
                                <TableRow
                                    key={note.id}
                                    note={note}
                                    setDisplayMode={setDisplayMode}
                                    isArchived={isArchived}>
                                </TableRow>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;