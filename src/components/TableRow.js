import React, { Fragment } from "react";
import getCategoryImage from "../services/sortCategoryIcons";

export const TableRow = ({ note, isArchived, setCurrentNote }) => {
    return (
        <tr className='row'>
            <td><img src={require(`../img/${getCategoryImage(note.category)}`)} alt='icon' /></td>
            <td>{note.name}</td>
            <td className="created">{note.created}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates}</td>
            <td>{
                !isArchived ? (
                    <Fragment>
                        <button className="table-body-button-edit" onClick={() => setCurrentNote(note)}>Edit</button>
                        <button className="table-body-button-archive">Archive</button>
                        <button className="table-body-button-delete">Delete</button>
                    </Fragment>) : <button className="table-body-button-unarchive">Unarchive</button>

            }
            </td>
        </tr>
    )
}