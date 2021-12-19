import React from "react";

import { Link } from "react-router-dom";

import {
  Divider,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  Drawer,
  List,
  IconButton,
} from "@mui/material";

import useStyles from "./styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import { useStateContext } from "../../../context/StateContextProvider";

const MenuLeft = ({ handleDrawerClose, open }) => {
  const { t } = useStateContext();

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.Drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        transitionDuration={500}
      >
        <div className={classes.DrawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List></List>
        <Divider />
        <List>
          <ListItem button onClick={handleDrawerClose} component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu_l1")} />
          </ListItem>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/categories"
          >
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu_l2")} />
          </ListItem>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/about"
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu_l3")} />
          </ListItem>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/contact"
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu_l4")} />
          </ListItem>

          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/faq"
          >
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu_l5")} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default MenuLeft;
