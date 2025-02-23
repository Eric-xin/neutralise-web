import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Header from "../components/neutralHeader";
import api from "../service/api";

const AnalysisPage = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState<string | null>(null);
  const [icont, setIcont] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    setOutputText(null);
    setIcont(null);

    const formData = new FormData();
    formData.append("text", inputText);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await api.post("/reduce_bias", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.status !== 200) throw new Error("Failed to fetch analysis");

      const data = response.data;
      setOutputText(data.neutral_text);
      setIcont(data.mulcont);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
    setLoading(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
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
          <strong>Bias Reduction</strong>
        </Typography>
        <TextField
          label="Enter text here..."
          multiline
          fullWidth
          rows={4}
          variant="outlined"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginTop: "16px", display: "block" }}
        />
        {imagePreview && (
          <Box mt={2} display="flex" justifyContent="center">
            <img src={imagePreview} alt="Uploaded" style={{ maxWidth: "200px", borderRadius: "8px" }} />
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAnalyze}
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? "Processing..." : "Reduce Bias"}
        </Button>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            Error: {error}
          </Typography>
        )}
        {icont && (
          <Paper variant="outlined" sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6">Image</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <ReactMarkdown>{icont}</ReactMarkdown>
            </Typography>
          </Paper>
        )}
        {outputText && (
          <Paper variant="outlined" sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6">Neutralized Text</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <ReactMarkdown>{outputText}</ReactMarkdown>
            </Typography>
          </Paper>
        )}
      </Paper>
    </div>
  );
};

export default AnalysisPage;
