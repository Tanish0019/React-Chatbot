const express = require("express");
const chatbot = require("../chatbot/chatbot");

const router = express.Router();

router.post("/api/df_text_query", async (req, res) => {
  const { text, userID, parameters } = req.body;
  
  const responses = await chatbot
  .textQuery(text, userID, parameters)
  .catch(err => {
      console.log("ERROR:", err);
      res.status(400).send("error");
    });
  
  const result = responses[0].queryResult;
  res.send(result);
});

router.post("/api/df_event_query", async (req, res) => {
  const { event, userID, parameters } = req.body;

  const responses = await chatbot
    .eventQuery(event, userID, parameters)
    .catch(err => {
      console.log("ERROR:", err);
      res.status(400).send("error");
    });
    
  const result = responses[0].queryResult;
  res.send(result);
});

module.exports = router;
