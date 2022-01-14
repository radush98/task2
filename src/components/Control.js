import { NavLink } from "react-router-dom";

export const Control = ({link, name}) => {
    console.log(link)
    return (
        <button className="main-controls-button">
            <NavLink to={link}>
                {name}
            </NavLink>
        </button>
    )
}
