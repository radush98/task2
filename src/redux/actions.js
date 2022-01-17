import { ADD_NOTE, SET_NOTE, ARCHIVE_NOTE, DELETE_NOTE, EDIT_NOTE } from "./types";

/*main actions*/
export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    }
}

export function setNote(note) {
    return {
        type: SET_NOTE,
        note
    }
}

export function archiveNote(id, isArchived) {
    return {
        type: ARCHIVE_NOTE,
        id,
        isArchived
    }
}

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        id
    }
}

export function editNote(note) {
    return {
        type: EDIT_NOTE,
        note
    }
}