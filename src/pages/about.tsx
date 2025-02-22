import React from "react";
import {
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "./../logo.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="neutralize-app">
      <div className="geographic-background" />
      <header className="neutralize-header">
        <img src={logo} alt="Neutralise Logo" className="neutralize-logo" />
        <Typography variant="h3" component="h1" className="neutralize-title">
          About Neutralise
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 600, margin: "20px auto", textAlign: "center" }}
        >
          Welcome to <strong>Neutralise</strong>—the cutting-edge tool that
          harnesses advanced language models like BERT and GPT to detect and
          explain bias in internet articles. Our platform offers both an
          online client and a browser plugin so you can analyze content on the
          go.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 600, margin: "20px auto", textAlign: "center" }}
        >
          Our mission is to empower users with transparent, data-driven insights,
          enabling you to navigate the digital landscape with confidence and
          clarity. Whether you’re a casual reader or a dedicated researcher, we
         ’re here to help you uncover the hidden biases shaping the news.
        </Typography>

        {/* FAQ Section */}
        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
          Frequently Asked Questions
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 800, margin: "0 auto" }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What is Neutralise?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Neutralise is a platform that uses state-of-the-art models like
                BERT and GPT to analyze online articles and provide clear
                explanations of their inherent biases.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does Neutralise work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our system leverages BERT for deep language understanding and
                GPT for generating human-readable explanations, effectively
                breaking down complex bias patterns in content.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What platforms does Neutralise support?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Neutralise is available as both an online client and a browser
                plugin, making it accessible across your desktop and mobile
                devices.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Is my data secure?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely. We take privacy and security very seriously. All
                data processed by Neutralise is handled with strict
                confidentiality and robust security protocols.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How can I get started?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Simply sign up for our online platform or install our browser
                plugin. Once you’re set up, you can begin analyzing articles
                for bias immediately.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>

        <Button
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to="/"
          className="neutralize-button"
          sx={{ mt: 4 }}
        >
          Back to Home
        </Button>
      </header>
    </div>
  );
}

export default About;
