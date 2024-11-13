// Import functions for reading and writing files
const { readFileSync, writeFileSync } = require("fs");

// Import OpenAI client
const OpenAI = require("openai");

// Load environment variables from .env file
require("dotenv").config();

// Retrieve the OpenAI API key from environment variables
const key = process.env.OPENAI_API_KEY;

// Reading the text file that contains the article content
const tekst = readFileSync("article.txt");

// Initialize the OpenAI client with the API key
const openai = new OpenAI({
  apiKey: key,
});

// Function to generate HTML summary for the article
async function getSummary() {
  try {
    // Request a completion from OpenAI with specific instructions for HTML formatting
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Please generate HTML code for an article that uses appropriate HTML tags
                    to structure the content, marks places for images by adding the '<img>' tag with the attribute src='image_placeholder.jpg' 
                    and an alt attribute with a detailed description of each image as a prompt for generating the graphic, 
                    adds captions below each image using an appropriate HTML tag and uses <figure>, and does not contain any CSS or JavaScript, 
                    making it ready to be inserted between <body> and </body> tags without adding <html>, <head>, or <body> tags.`,
        },
        { 
          role: "user", 
          content: tekst.toString("utf-8") 
        },
      ],
    });

    // Write the generated HTML to a file
    writeFileSync("artykul.html", completion.choices[0].message.content);
    console.log("Generated successfully!");
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error fetching completion:", error);
  }
}

// Run the function to get the HTML version of the text
getSummary();
