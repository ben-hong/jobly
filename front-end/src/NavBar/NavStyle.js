import { styled, Link } from "@mui/material";
import { NavLink } from 'react-router-dom';


const NavBarLink = styled(NavLink)(() => ({
        textDecoration: "none",
        color: "black",
        "&:hover": {
            color:"orange",
            textDecoration: "underline",
        },
        "&.active": {
            color:"orange",
            textDecoration: "underline",
          }
    })
)

export {
    NavBarLink
};
