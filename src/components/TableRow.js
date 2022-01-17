import React, { Fragment } from "react";
import getCategoryImage from "../services/sortCategoryIcons";
import { useDispatch } from "react-redux";
import { setNote, archiveNote, deleteNote } from "../redux/actions";

export const TableRow = ({ note, isArchived, setDisplayMode }) => {
    const dispatch = useDispatch();

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
                        <button className="table-body-button-edit" onClick={() => {
                            dispatch(setNote(note));
                            setDisplayMode(true)
                        }}>
                            Edit
                        </button>
                        <button
                            className="table-body-button-archive"
                            onClick={() => dispatch(archiveNote(note.id, true))}
                        >
                            Archive
                        </button>
                        <button
                            className="table-body-button-delete"
                            onClick={() => dispatch(deleteNote(note.id))}
                        >
                            Delete
                        </button>
                    </Fragment>) :
                    <button
                        className="table-body-button-unarchive"
                        onClick={() => dispatch(archiveNote(note.id, false))}
                    >
                        Unarchive
                    </button>
            }
            </td>
        </tr>
    )
}