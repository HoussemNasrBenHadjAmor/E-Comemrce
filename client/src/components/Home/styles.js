import { makeStyles } from "@mui/styles";

import * as darkColor from "../../utilities/DarkModeColors";

import * as lightColor from "../../utilities/LightModeColors";

export default makeStyles(() => ({
  backGround: (dark) => ({
    backgroundColor: dark
      ? darkColor.darkBackGroundColor
      : lightColor.lightBackGroundColor,
    color: dark ? "#B0B3B8" : "#000000",
  }),
}));
