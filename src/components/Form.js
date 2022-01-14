import React from "react";
import { categories } from "../data/categories";

export const Form = () => {
    return (
        <form className="form" id="form">
            <div className="form-element">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>

            <div className="form-element">
                <label htmlFor="category">Category:</label>
                <select id="category">
                    {
                        categories.map(category => (
                            <option value={category.name} key={categories.indexOf(category)}>{category.name}</option>
                        ))
                    }
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