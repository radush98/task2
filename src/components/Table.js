import React from 'react';
import { TableRow } from './TableRow';

export const Table = ({ notes }) => {
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
                        <td>
                            <button className="table-body-button" id="placehoder">Edit</button>
                            <button className="table-body-button" id="archive-all">Archive</button>
                            <button className="table-body-button" id="delete-all">Delete</button>
                        </td>
                    </tr>
                </thead>
                <tbody className="table-body" id="main-content">
                    {
                        notes.map(note => (
                            <TableRow key={note.id} note = {note}>
                            </TableRow>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}