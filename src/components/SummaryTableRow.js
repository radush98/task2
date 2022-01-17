import React from "react";

export const SummaryTableRow = ({ category }) => {
    return (
        <tr>
            <td><img src={require(`../img/${category.icon}`)} /></td>
            <td>{category.note_category}</td>
            <td className="created">{category.active}</td>
            <td>{category.archived}</td>
        </tr>
    )
}