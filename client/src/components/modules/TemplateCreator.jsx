import React, { useState, useEffect } from "react";
import axios from "axios";

function TemplateCreator({ title, subheading, fields, onCancelClick }) {
  const [generatedContent, setGeneratedContent] = useState("");
  const [typingContent, setTypingContent] = useState("");
  const key = import.meta.env.REACT_APP_OPENAI_KEY;
  const url = import.meta.env.REACT_APP_OPENAI_URL;

  const generateContent = async (labelValues) => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `You are a project catalog generator. Here are your questions and their answers:\n\n${JSON.stringify(
              labelValues,
              null,
              2
            )}\n\nPlease generate a project catalog based on these answers.\nThe output should contain:\n- 3 Titles\n- SEO Optimized Description\n- 5 Search Tags\n- 3 Pricing Tiers\n- 5 Add-ons\n- 5 Requirements\n- 5 Project Steps\n- 5 FAQs`,
          },
        ],
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (data && data.choices && data.choices.length > 0) {
        const generatedContent = data.choices[0].message.content;
        // Format the generated content here before setting the state
        const formattedContent = formatContent(generatedContent);
        setGeneratedContent(formattedContent); // Update the generated content state
      } else {
        console.error("Invalid response format from API");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formatContent = (content) => {
    // Split the content into sections
    const sections = content.split("**");

    // Initialize an array to hold the formatted content
    const formattedContent = [];

    // Loop through each section (skipping the first and last empty sections)
    for (let i = 1; i < sections.length - 1; i += 2) {
      const title = sections[i];
      let text = sections[i + 1].trim();

      // Check if the text contains bullet points or numbered lists
      if (text.includes("- ") || /^\d+\.\s/.test(text)) {
        // Convert bullet points and numbered lists to HTML format
        text = text
          .split(/\n(?=\s*(-|\d+\.\s))/)
          .map((item) =>
            item.trim().startsWith("-") || /^\d+\.\s/.test(item.trim())
              ? `<li>${item
                  .trim()
                  .replace(/^-|\d+\./, "")
                  .trim()}</li>`
              : `<p>${item.trim()}</p>`
          )
          .join("");
        text = `<ul>${text}</ul>`;
      } else {
        // Format regular text with <p> tags
        text = `<p>${text}</p>`;
      }

      // Format each section with HTML tags
      const sectionHTML = `
        <div class="section">
          <h2>${title}</h2>
          ${text}
        </div>
      `;

      formattedContent.push(sectionHTML);
    }

    // Join the formatted sections into a single string
    return formattedContent.join("\n");
  };

  const handleGenerateClick = async () => {
    // Get textarea values from the DOM
    const labelValues = {};
    fields.forEach((field, index) => {
      const textarea = document.getElementById(`field-${index}`);
      if (textarea) {
        labelValues[field.label] = textarea.value;
      }
    });
    console.log(labelValues);
    // Call generateContent function with labelValues
    await generateContent(labelValues);
  };

  useEffect(() => {
    if (generatedContent) {
      // Start typing effect when generated content is available
      const typingEffect = async () => {
        for (let i = 0; i < generatedContent.length; i++) {
          setTypingContent(
            (prevContent) => prevContent + generatedContent.charAt(i)
          );
          await new Promise((resolve) => setTimeout(resolve, 20)); // Delay between each character
        }
      };
      typingEffect();
    }
  }, [generatedContent]);

  const handleCreditsClick = async () => {
    // Make a POST request to the backend to decrement user credits
    try {
      const userId = localStorage.getItem("userId"); // Get the user ID from local storage
      await axios.post(`http://3.145.167.157:8000/decrement-credits/${userId}`);
      // Handle success (e.g., update UI, show success message)
    } catch (error) {
      console.error("Error decrementing credits:", error);
      // Handle error (e.g., show error message)
    }
  };

  const handleClick = async () => {
    // Call the asynchronous function
    await handleCreditsClick();
    // Call the non-asynchronous function
    handleGenerateClick();
  };

  return (
    <div className="flex flex-row w-[130%] bg-white p-2 ml-6 mt-14 rounded-[20px]">
      <div className="  p-6 max-w-90vw mx-auto bg-white flex flex-wrap">
        <div className="header w-full mb-6">
          <h2 className="title text-2xl font-bold mb-2">{title}</h2>
          <p className="subtitle text-gray-600">{subheading}</p>
        </div>
        <div className="input-fields w-full mb-6">
          {fields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={`field-${index}`}
                className="block font-bold mb-2"
              >
                {field.label}
              </label>
              <textarea
                id={`field-${index}`}
                rows={field.textareaRow}
                className="w-full p-2 mb-2 bg-gray-100 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          ))}
          <div className="buttons flex justify-end mt-4">
            <button
              className="cancel-btn bg-red-600 text-white border-none px-4 py-2 rounded mr-2 cursor-pointer hover:bg-red-700"
              onClick={onCancelClick}
            >
              Cancel
            </button>
            <button
              className="generate-btn bg-green-600 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-green-700"
              onClick={handleClick} // Call handleGenerateClick function on click
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="output-section w-[80%] m-10">
        <h3 className="text-xl font-bold mb-2">Output</h3>
        <div className=" bg-gray-100 generated-content border border-gray-300 rounded p-2 min-h-[calc(100%-110px)] overflow-y-auto">
          <div
            className="bg-gray-100 generated-content border border-gray-300 rounded p-2  max-h-[calc(100%-110px)] overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: typingContent }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCreator;
