import React from "react";

export const Form = () => {
    return (
        <form className="form hidden" id="form">
            <div className="form-element">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required/>
            </div>

            <div className="form-element">
                <label htmlFor="category">Category:</label>
                <select id="category">
                </select>
            </div>

            <div className="form-element">
                <label htmlFor="content">Content:</label>
                <textarea id="content" required></textarea>
            </div>
            <button id="submit">Submit</button>
            <button id="close">X</button>
        </form>
    )
}