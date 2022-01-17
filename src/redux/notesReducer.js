import { ADD_NOTE, ARCHIVE_NOTE, DELETE_NOTE } from "./types";

const initialState = {
    notes: [
        {
            id: 0,
            name: "Shopping List",
            created: 'May 20, 2020',
            category: 'Task',
            content: 'lorem ipsum bla-...',
            dates: '',
            archive: false
        },
        {
            id: 1,
            name: "The theory of evolution",
            created: 'July 30, 2020',
            category: 'Random_thought',
            content: 'The evolution is...',
            dates: '',
            archive: false
        },
        {
            id: 2,
            name: "New Feature",
            created: 'December 25, 2020',
            category: 'Idea',
            content: 'Implemented new feature',
            dates: '',
            archive: false
        },
        {
            id: 3,
            name: "Books",
            created: 'February 10, 2021',
            category: 'Task',
            content: 'New startup',
            dates: '',
            archive: false
        },
        {
            id: 4,
            name: "William Gaddis",
            created: 'September 9, 2021',
            category: 'Task',
            content: 'Meet William',
            dates: '',
            archive: false
        },
        {
            id: 5,
            name: "What about inventions?",
            created: 'September 30, 2021',
            category: 'Idea',
            content: 'Try to develop time machine',
            dates: '',
            archive: true
        }
    ],
}

export const notesReducer = (state = initialState, action) => {
    let newNotes = state.notes;
    const { id } = action;

    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.note]
            }

        case ARCHIVE_NOTE:
            const { isArchived } = action
            if (id === "All")
                newNotes.forEach(note => note.archive = isArchived);
            else
                newNotes.forEach(note => (note.id === id) ? note.archive = isArchived : note);
            return {
                ...state,
                notes: [...newNotes]
            }

        case DELETE_NOTE:
            newNotes = (id === "All") ? [] : newNotes.filter(note => note.id !== id)
            return {
                ...state,
                notes: [...newNotes]
            }

        default:
            return state;
    }
}