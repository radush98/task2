import { NavLink } from "react-router-dom";

export const Control = ({link, name}) => {
    return (
        <button className="main-controls-button">
            <NavLink to={link}>
                {name}
            </NavLink>
        </button>
    )
}
