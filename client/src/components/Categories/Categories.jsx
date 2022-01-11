import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { commerce } from "../../lib/Commerce";

const CategoriesComponent = ({ cat }) => (
  <div>
    <h1>{cat?.name}</h1>
  </div>
);

const SubCatComp = ({ sub }) => (
  <div>
    <h5>{sub.name}</h5>
  </div>
);

const Categories = () => {
  const [cat, setCat] = useState(null);

  const [sub, setSub] = useState(null);

  const fetchCategories = () => {
    let tab = [];

    commerce.categories.list().then(({ data }) => {
      setCat(data);

      console.log("data", data);

      data?.map((c) => {
        return <CategoriesComponent cat={c} />;
        // console.log("c", c);
        c?.children?.map((child) => {
          commerce.categories.retrieve(child.id).then((x) => {
            console.log("tab", tab);
            tab.push(x);
          });
        });
      });
    });
    console.log("tab", tab);

    // setSub((prevState) => ({
    //   ...prevState,
    //   tab,
    // }));
    setSub({ ...sub, tab });
    console.log("sub", sub);
  };

  useEffect(() => {
    document.title = "Categories | E-Commerce";
  }, []);

  useEffect(() => {
    fetchCategories();
    // console.log("sub", sub);
  }, []);
  return (
    <Grid
      minHeight={"100vh"}
      alignItems={"center"}
      justifyContent="center"
      display="grid"
    >
      <div>
        <h1>The Categories:</h1>
        {cat?.map((c) => (
          <h4>{c.name} </h4>
        ))}
      </div>
      <div>
        <h1>The Sub Categories:</h1>

        {sub?.tab?.map((s) => (
          <h5>{s.name}</h5>
        ))}
      </div>
      <CategoriesComponent cat="cat" />
      <SubCatComp sub="sub" />
    </Grid>
  );
};

export default Categories;
