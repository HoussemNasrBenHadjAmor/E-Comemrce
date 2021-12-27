import React from "react";

import { Container, Grid, TextField, Button, Typography } from "@mui/material";

import { useStateContext } from "../../../context/StateContextProvider";

import useStyles from "./Styles";

const ContactForm = () => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);

  // const [fields, setFields] = useState({});

  // const changeFields = () => {};

  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.BigContainer}>
      <Container>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" fontWeight="500" gutterBottom>
            Can't find the answer you need?
          </Typography>
          <Typography
            paragraph
            align="center"
            fontSize="18px"
            gutterBottom
            color="text.secondary"
          >
            Keep track of what's happening with your data, change permissions,
            and run reports against your data anywhere in the world. Keep track
            of what's happening with your data, change permissions.{" "}
          </Typography>
        </Grid>

        <div className={classes.form}>
          <Grid item xs={12} className={classes.Grid}>
            <Typography className={classes.Span} fontWeight="700">
              Full Name
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Your full name"
              fullWidth
              required
              className={classes.TextField}
            />
          </Grid>

          <Grid item xs={12} className={classes.Grid}>
            <Typography className={classes.Span} fontWeight="700">
              Email
            </Typography>
            <TextField
              type="email"
              required
              variant="outlined"
              placeholder="Your e-mail address"
              fullWidth
              className={classes.TextField}
            />
          </Grid>

          <Grid item xs={12} className={classes.Grid}>
            <Typography className={classes.Span} fontWeight="700">
              Message
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Your question about our services"
              fullWidth
              multiline
              rows={4}
              rowsMax={5}
              required
              className={classes.TextField}
            />
          </Grid>

          <Grid item xs={12} className={classes.GridButton}>
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                padding: "10px 30px",
              }}
              onClick={sendMessage}
            >
              Send Message
            </Button>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
