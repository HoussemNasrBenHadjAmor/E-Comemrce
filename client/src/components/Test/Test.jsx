import React, { useEffect, useState } from "react";
import Step from "./Step";
import Step1 from "./Step1";
import { useStateContext } from "../../context/StateContextProvider";

const tab = [
  {
    name: "man",
    children: [
      {
        name: "Accessoires",
        id: "1",
      },
      {
        name: "Clothes",
        id: "2",
      },
      {
        name: "News",
        id: "3",
      },
      {
        name: "Shoes",
        id: "4",
      },
    ],
  },

  {
    name: "woman",
    children: [{}],
  },
];

const Test = () => {
  const { t, changeAppLanguage, currentLanguage } = useStateContext();

  const [sub, setSub] = useState(null);

  const [cat, setCat] = useState(null);

  const CreateUseState = () => {};

  const toSet = (x) => {
    setCat(x);
    console.log("cat my friend", cat);
  };

  const Recursive = (tab) => {
    let subC = [];

    if (tab.length) {
      tab.map((t) => {
        console.log("Name :", t);
        subC.push(t);
      });
      // setCat(subC);
      // toSet(subC);
    } else {
      return console.log("soorry tab is no more contain something");
    }

    console.log("subC", subC);

    // subC.map((s) => {
    //   console.log("s", s);
    // });

    // if (subC?.length && subC) {
    //   subC.map((s) => {});
    // }

    // subC.map((lc) => {
    //   console.log("lc", lc);
    // });

    Recursive(subC);
  };

  useEffect(() => {
    Recursive(tab);
  }, []);

  return (
    <div style={{ paddingTop: "150px" }}>
      <Step />
      <Step1 />
      <h1>CurrentLanguage is : {currentLanguage}</h1>
      <h1>{t("welcome_message")}</h1>
      <h1>{t("app_title")}</h1>
      <button onClick={changeAppLanguage}>Change Language Please !</button>
    </div>
  );
};

export default Test;
