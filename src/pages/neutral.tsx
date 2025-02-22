import * as React from "react";
import { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Header from "./../components/neutralHeader";

interface BiasAnalysis {
  Left: number;
  Middle: number;
  Right: number;
}

interface AnalysisResponse {
  bias_analysis: BiasAnalysis;
  explanation: string;
}

// A helper component to display the bias spectrum.
const BiasSpectrum: React.FC<{ bias: BiasAnalysis }> = ({ bias }) => {
  const total = bias.Left + bias.Middle + bias.Right;
  const leftPercent = (bias.Left / total) * 100;
  const middlePercent = (bias.Middle / total) * 100;
  const rightPercent = (bias.Right / total) * 100;

  return (
    <Box
      sx={{
        display: "flex",
        height: 30,
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: 4,
        overflow: "hidden",
        mt: 2,
      }}
    >
      <Box
        sx={{
          width: `${leftPercent}%`,
          backgroundColor: "#3f51b5", // blue for left bias
        }}
        title={`Left: ${leftPercent.toFixed(1)}%`}
      />
      <Box
        sx={{
          width: `${middlePercent}%`,
          backgroundColor: "#9e9e9e", // gray for middle
        }}
        title={`Middle: ${middlePercent.toFixed(1)}%`}
      />
      <Box
        sx={{
          width: `${rightPercent}%`,
          backgroundColor: "#f44336", // red for right bias
        }}
        title={`Right: ${rightPercent.toFixed(1)}%`}
      />
    </Box>
  );
};

const BiasAnalysisPage: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/api/analyze_mult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Optionally include auth headers here, e.g. Authorization: Bearer <token>
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: AnalysisResponse = await response.json();
      setAnalysis(data);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Paper
        sx={{
          width: "90%",
          m: "auto",
          mt: 8,
          p: 4,
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" gutterBottom>
          <strong> Neutral </strong> Bias Analysis
        </Typography>
        <TextField
          label="Enter text to analyze"
          multiline
          fullWidth
          rows={4}
          variant="outlined"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </Button>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            Error: {error}
          </Typography>
        )}
        {analysis && (
          <Paper variant="outlined" sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6">Bias Spectrum</Typography>
            <BiasSpectrum bias={analysis.bias_analysis} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Explanation:
            </Typography>
            <ReactMarkdown>{analysis.explanation}</ReactMarkdown>
          </Paper>
        )}

        {/* {analysis && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Bias Spectrum</Typography>
            <BiasSpectrum bias={analysis.bias_analysis} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Explanation:
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
              <ReactMarkdown>{analysis.explanation}</ReactMarkdown>
            </Paper>
          </Box>
        )} */}
      </Paper>
    </div>
  );
};

export default BiasAnalysisPage;
