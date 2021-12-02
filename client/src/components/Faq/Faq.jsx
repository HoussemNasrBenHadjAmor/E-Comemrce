import React from "react";

import useStyles from "./styles";

import { Link } from "react-router-dom";

import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Button,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const classes = useStyles();

  const faqList = [
    {
      title: " Can i purchase a gift card ?",
      reponse:
        "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: " Can i purchase a gift card ?",
      reponse:
        "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: " Can i purchase a gift card ?",
      reponse:
        "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <div className={classes.Container}>
      <Grid
        container
        className={classes.GridContainer}
        display="grid"
        textAlign="center"
      >
        <Typography
          variant="body2"
          fontWeight="500"
          className={classes.FAQTitle}
          gutterBottom
        >
          F.A.Q
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          fontWeight="500"
          className={classes.Title}
        >
          Have A Question?
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          fontWeight="400"
          className={classes.FAQTitle}
        >
          Search our FAQ for answers to anything you might ask.
        </Typography>
      </Grid>

      <Grid className={classes.GridFaq}>
        <Typography variant="h5" fontWeight="500">
          Basics
        </Typography>

        {faqList.map(({ title, reponse }, i) => (
          <Paper
            sx={{
              marginY: "20px",
              boxShadow: "0px 3px 6px 0px rgb(140,152,164,0.25)",
            }}
            className={classes.Paper}
            index={i}
          >
            <Accordion
              sx={{
                padding: "5px",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  fontWeight="400"
                  fontSize="1rem"
                  lineHeight="1.5"
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.FAQTitle}>{reponse}</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Grid>

      <Grid className={classes.GridFaq}>
        <Typography variant="h5" fontWeight="500">
          Account & Settings
        </Typography>
        {faqList.map(({ title, reponse }, i) => (
          <Paper
            sx={{
              marginY: "20px",
              boxShadow: "0px 3px 6px 0px rgb(140,152,164,0.25)",
            }}
            className={classes.Paper}
            index={i}
          >
            <Accordion
              sx={{
                padding: "5px",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  fontWeight="400"
                  fontSize="1rem"
                  lineHeight="1.5"
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.FAQTitle}>{reponse}</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Grid>

      <Grid className={classes.GridFaq}>
        <Typography variant="h5" fontWeight="500">
          Security
        </Typography>
        {faqList.map(({ title, reponse }, i) => (
          <Paper
            sx={{
              marginY: "20px",
              boxShadow: "0px 3px 6px 0px rgb(140,152,164,0.25)",
            }}
            className={classes.Paper}
            index={i}
          >
            <Accordion
              sx={{
                padding: "5px",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="body1"
                  fontWeight="400"
                  fontSize="1rem"
                  lineHeight="1.5"
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.FAQTitle}>{reponse}</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Grid>

      <Grid
        className={classes.LastGrid}
        display="grid"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" fontWeight="400" align="center">
          Didn't find what you are looking for?
        </Typography>

        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          sx={{ padding: "10px", marginTop: "30px" }}
        >
          Ask A Question
        </Button>
      </Grid>
    </div>
  );
};

export default Faq;
