import React from "react";

import { useStateContext } from "../../../context/StateContextProvider";

import {
  Typography,
  MenuItem,
  Menu,
  Grid,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  IconButton,
} from "@mui/material";

import useStyles from "./styles";

import GTranslateIcon from "@mui/icons-material/GTranslate";

import CloseIcon from "@mui/icons-material/Close";

import FlagIcon from "../../ReactFlags/Flags";

const LanguageOption = ({
  LanguageOptionId,
  languageEl,
  isLanguageOptionOpen,
  handleCloseLanguageOption,
}) => {
  const { changeAppLanguage, currentLanguage, dark, t } = useStateContext();

  const languages = [
    {
      name: t("languages_en"),
      code: "gb",
      languageCode: "en",
    },
    {
      name: t("languages_fr"),
      code: "fr",
      languageCode: "fr",
    },
  ];

  const classes = useStyles(dark);
  return (
    <>
      <CssBaseline />
      <Menu
        anchorEl={languageEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={LanguageOptionId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isLanguageOptionOpen}
        onClose={handleCloseLanguageOption}
        className={classes.MenuPadding}
        transitionDuration={500}
      >
        <Grid
          paddingY={"5px"}
          display="flex"
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid justifyContent={"flex-start"}>
            <MenuItem className={classes.MenuItem}>
              <ListItemIcon>
                <GTranslateIcon color="primary" />
              </ListItemIcon>
              <ListItemText>{t("display_lng")}</ListItemText>
            </MenuItem>
          </Grid>

          <Grid flexDirection={"flex-end"}>
            <IconButton onClick={handleCloseLanguageOption}>
              <CloseIcon color="inherit" />
            </IconButton>
          </Grid>
        </Grid>

        {languages.map(({ name, code, languageCode }) => (
          <Grid
            key={name}
            display="flex"
            className={classes.Flag}
            paddingY={"10px"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              opacity: currentLanguage === languageCode ? "0.5" : "1",
            }}
            onClick={() => {
              currentLanguage !== languageCode && changeAppLanguage();
            }}
          >
            <Typography paddingRight={"10px"}> {name} </Typography>
            <FlagIcon code={code} size="1x" />
          </Grid>
        ))}
      </Menu>
    </>
  );
};

export default LanguageOption;
