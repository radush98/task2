import React, { useRef } from "react";
import { categories } from "../data/categories";

export const Form = ({ displayMode, changeState, currentNote }) => {
    const nameRef = useRef('');
    const contentRef = useRef('');
    const categoryRef = useRef('');

    const clearForm = () => {
        nameRef.current.value = '';
        contentRef.current.value = '';
        categoryRef.current.value = '';
    }

    const addNote = (event) => {
        event.preventDefault();
        const date = new Date();

        const newNote = {
            id: +date,
            name: nameRef.current.value,
            created: `${date.toLocaleString('en', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`,
            category: categoryRef.current.value,
            content: contentRef.current.value,
            dates: '',
            archived: false
        }

        // notes.push(newNote); //temporary
        clearForm();
        hideForm(event);
    }

    const hideForm = event => {
        event.preventDefault();
        changeState(false);
    }

    return (
        displayMode ? (<form className='form' id="form" >
            <div className="form-element">
                <label htmlFor="name">Name:</label>
                <input ref={nameRef} type="text" id="name" required defaultValue={(currentNote != null)?currentNote.name:''} />
            </div>

            <div className="form-element">
                <label htmlFor="category">Category:</label>
                <select ref={categoryRef} id="category" defaultValue={(currentNote != null)?currentNote.category:''}>
                    {
                        categories.map(category => (
                            <option value={category.name} key={categories.indexOf(category)}>{category.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="form-element">
                <label htmlFor="content">Content:</label>
                <textarea ref={contentRef} id="content" required defaultValue={(currentNote != null)?currentNote.content:''}></textarea>
            </div>
            <button id="submit" onClick={addNote}>Submit</button>
            <button id="close" onClick={hideForm}>X</button>
        </form>) : null
    )
}
