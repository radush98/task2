import { NavLink } from "react-router-dom";

export const Control = ({link, name}) => {
    console.log(link)
    return (
        <button>
            <NavLink to={link}>
                {name}
            </NavLink>
        </button>
    )
}
