import React, { useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";

import {
  Divider,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  MenuItem,
  Drawer,
  List,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import { grey } from "@mui/material/colors";

import ListItem from "@mui/material/ListItem";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import * as DarkColor from "../../../utilities/DarkModeColors";

import useStyles from "./styles";

import { useStateContext } from "../../../context/StateContextProvider";

const MenuLeft = ({ handleDrawerClose, open, categories }) => {
  const { t, dark } = useStateContext();

  const classes = useStyles(dark);

  const history = useHistory();

  var url = "category/";

  const Tree = ({ categories }) => {
    return (
      <ul
        style={{
          listStyle: "none",
          marginLeft: "-35px",
        }}
      >
        {categories?.map((tree) => (
          <TreeNode category={tree} />
        ))}
      </ul>
    );
  };

  const TreeNode = ({ category }) => {
    const [childVisible, setChildVisible] = useState(false);

    const [expand, setExpand] = useState(false);

    const isParent = category?.parent_id === null ? true : false;

    const hasChild = category?.children ? true : false;

    const childIsEmpty = category?.children?.length <= 0 ? true : false;

    const changePath = () => {
      // if (isParent) {
      //   url = "category";
      //   url = url + `/${category.slug}`;
      // } else {
      //   url = "category";
      //   url = url + `/${category.slug}`;
      // }

      url = url + `${category.slug}`;
    };

    const toggleAcordion = () => {
      if (!childIsEmpty) {
        changePath();
        setChildVisible((v) => !v);
        setExpand((prev) => !prev);
      } else {
        // changePath();
        // history.push(url);
        history.push(`/category/${category.slug}`);
        handleDrawerClose();
      }
    };

    return (
      <li
        style={{
          listStyle: "none",
          paddingRight: "5px",
        }}
      >
        {hasChild && (
          <>
            <Accordion
              sx={{
                boxShadow: "none",
              }}
              expanded={expand}
              onChange={toggleAcordion}
              // disableGutters
            >
              <AccordionSummary
                className={classes.Accordion}
                sx={{
                  transition: "all 0.4s ease",
                  color:
                    category?.parent_id === null
                      ? "text.primary"
                      : "text.secondary",
                  "&:hover": {
                    color: "text.primary",
                  },
                }}
                expandIcon={
                  hasChild && !childIsEmpty && isParent ? (
                    <KeyboardArrowDownIcon />
                  ) : hasChild && !childIsEmpty && !isParent ? (
                    <ChevronRightIcon />
                  ) : null
                }
              >
                <Typography
                  sx={{
                    fontSize: category?.parent_id === null ? "18px" : "15px",
                  }}
                  onClick={() => {
                    // handleDrawerClose();
                    // history.push(`/category?slug=${category.id}`);
                  }}
                >
                  {category.name}
                </Typography>
              </AccordionSummary>
            </Accordion>

            {isParent && (
              <Divider
                variant="fullWidth"
                sx={{ marginY: "5px", color: "text.primary" }}
              />
            )}
          </>
        )}

        {hasChild && childVisible && <Tree categories={category.children} />}
      </li>
    );
  };

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
            <CloseIcon />
          </IconButton>
        </div>

        {/* <Divider /> */}

        <List>
          <ListItem>
            <ListItemText primary={t("menu_l2")} />
          </ListItem>
          <Tree categories={categories} />
        </List>

        {/* <Divider variant="middle" sx={{ marginTop: "10px" }} /> */}
        <List sx={{ paddingX: "5px" }}>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/"
            className={classes.MenuItem}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: !dark && grey[800] }} />
            </ListItemIcon>
            <ListItemText primary={t("menu_l1")} />
          </ListItem>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/about"
            className={classes.MenuItem}
          >
            <ListItemIcon>
              <InfoIcon sx={{ color: !dark && grey[800] }} />
            </ListItemIcon>
            <ListItemText primary={t("menu_l3")} />
          </ListItem>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/contact"
            className={classes.MenuItem}
          >
            <ListItemIcon>
              <MailIcon sx={{ color: !dark && grey[800] }} />
            </ListItemIcon>
            <ListItemText primary={t("menu_l4")} />
          </ListItem>

          <ListItem
            button
            onClick={handleDrawerClose}
            component={Link}
            to="/faq"
            className={classes.MenuItem}
          >
            <ListItemIcon>
              <ContactSupportIcon sx={{ color: !dark && grey[800] }} />
            </ListItemIcon>
            <ListItemText primary={t("menu_l5")} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default MenuLeft;
