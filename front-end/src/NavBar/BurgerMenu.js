import * as React from 'react';
import {MenuItem, Menu, Link} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import { NavBarLink } from "./NavStyle";

function BurgerMenu({logout}) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <MenuIcon {...bindTrigger(popupState)}/>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <NavBarLink to="/profile">Profile</NavBarLink>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <NavBarLink to="/" onClick={logout}>Logout</NavBarLink>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default BurgerMenu;