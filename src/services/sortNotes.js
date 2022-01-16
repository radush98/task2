function getNotes(isArchived, notes){
    return notes.filter(note => note.archive === isArchived);
}

export default getNotes;