import React from "react";
import {
  Typography,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "./../ictt.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="neutralize-app">
      <div className="geographic-background" />

      <header className="neutralize-header">
        {/* Logo + Title */}
        <img src={logo} alt="Neutralise Logo" className="neutralize-logo" />
        <Typography variant="h3" component="h1" className="neutralize-title">
          Contact Us
        </Typography>

        {/* Intro */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: 600,
            mx: "auto",
            my: 2,
          }}
        >
          Have questions or feedback? Fill out the form below and our team will
          get right back to you—whether it’s a bug report, a feature request, or
          just a hello.
        </Typography>

        {/* Contact Form */}
        <Container maxWidth="sm">
          <Stack
            component="form"
            spacing={2}
            sx={{
              width: "100%",
              px: { xs: 2, sm: 0 }, // padding on mobile
              mt: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              type="email"
            />
            <TextField label="Subject" variant="outlined" fullWidth />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button variant="contained" size="large" type="submit">
              Send Message
            </Button>
          </Stack>
        </Container>

        {/* Other Contact Methods */}
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 2, textAlign: "center" }}
          >
            Other Ways to Reach Us
          </Typography>
          <Stack spacing={2}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Email</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>contact@neutralise.net</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Phone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>+353 0834878652</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Office</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Trinity College Dublin
                  <br />
                  College Green, Dublin 2
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Follow Us</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <li>
                    <Typography component="span">
                      LinkedIn:{" "}
                      <a
                        href="https://www.linkedin.com/in/ericxin123/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Here
                      </a>
                    </Typography>
                  </li>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Container>

        {/* Back to Home */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            component={Link}
            to="/"
            className="neutralize-button"
          >
            Back to Home
          </Button>
        </Box>
      </header>
    </div>
  );
}

export default Contact;
