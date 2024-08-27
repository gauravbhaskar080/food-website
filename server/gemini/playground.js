const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-pro",
});

async function main() {
  const result = await model.generateContent("Burger is which cuisines part?");
  console.log(result.response.text());
}

main().catch(console.error);