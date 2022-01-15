import notes from '../data/notes.js';

function getNotes(isArchived){
    return notes.filter(note => note.archive === isArchived);
}

export default getNotes;