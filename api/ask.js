const axios = require("axios");
const cors = require("cors"); // Seems to be unused, consider removing if you're not using it
const apiKey = process.env.API_KEY;

const prompt = `Hey Charlybot, here's your mission: Follow these instructions carefully! ... (your full prompt)`;

module.exports = async (req, res) => {
  const allowedOrigins = [
    "https://www.carlothedom.digital",
    "https://carlothedom.digital",
  ];
  const origin = req.headers.origin;

  // CORS adjustments start here
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET"); // Assuming this is a GET request
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Added
  }

  if (req.method === "OPTIONS") {
    // Handling OPTIONS method
    res.status(200).end();
    return;
  }
  // CORS adjustments end here

  const standardPrompt = prompt;
  const question = req.query.q;

  try {
    const gpt3Response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `${standardPrompt}: ${question}`,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(gpt3Response.data.choices[0].text.trim());
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in processing request");
  }
};
