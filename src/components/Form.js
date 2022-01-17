import React, { useEffect, useState } from "react";
import { categories } from "../data/categories";
import { addNote, editNote } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import parseData from "../services/getData";
import { setNote } from "../redux/actions";

export const Form = ({ displayMode, changeState }) => {
    const dispatch = useDispatch();

    const note = useSelector(state => {
        const { formReducer } = state;
        return formReducer.note;
    });

    console.log(note)

    const [name, setName] = useState(note.name);
    const [category, setCategory] = useState(note.category);
    const [content, setContent] = useState(note.content);

    useEffect(() => {
        setName(note.name);
        setCategory(note.category);
        setContent(note.content);
    }, [note.name, note.category, note.content])

    const clearForm = () => {
        setName('');
        setCategory('');
        setContent('');
        dispatch(setNote({
            name: '',
            category: '',
            content: ''
        }));
    }

    const checkInput = (value, setter) => {
        if (value === '')
            setter('Task');
    }

    const createNewNote = (date) => {
        const newNote = {
            id: +date,
            name: name,
            created: `${date.toLocaleString('en', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`,
            category: category ? category : "Task",
            content: content,
            dates: parseData(content),
            archived: false
        }

        dispatch(addNote(newNote));
    }

    const edit = (date) => {
        console.log("FORM EDIT>>")
        const edited = {
            id: note.id,
            name: name,
            created: `${date.toLocaleString('en', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`,
            category: category ? category : "Task",
            content: content,
            dates: parseData(content),
            archived: false
        }

        dispatch(editNote(edited))
    }

    const submit = (event) => {
        const date = new Date();
        event.preventDefault();

        !note.id ? createNewNote(date) : edit(date);

        clearForm();
        hideForm(event);
    }

    const hideForm = event => {
        event.preventDefault();
        changeState(false);
    }

    return (
        displayMode ? (<form className='form' id="form">
            <div className="form-element">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    onBlur={event => checkInput(event.target.value, setName)}
                />
            </div>

            <div className="form-element">
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    onBlur={event => checkInput(event.target.value, setCategory)}>
                    {
                        categories.map(category => (
                            <option value={category.name} key={categories.indexOf(category)}>{category.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="form-element">
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={event => setContent(event.target.value)}
                    onBlur={event => checkInput(event.target.value, setContent)}>
                </textarea>
            </div>
            <button id="submit" onClick={submit}>Submit</button>
            <button id="close" onClick={hideForm}>X</button>
        </form>) : null
    )
}
