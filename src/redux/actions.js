import { ADD_NOTE } from "./types";

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    }
}
