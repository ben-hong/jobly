import { styled, Link } from "@mui/material";
import { NavLink } from 'react-router-dom';


const NavBarLink = styled(NavLink)(() => ({
        textDecoration: "none",
        color: "black",
        "&:hover": {
            color:"grey",
            textDecoration: "underline",
        },
        "&.active": {
            color: "grey",
            textDecoration: "underline",
          }
    })
)

export {
    NavBarLink
};
