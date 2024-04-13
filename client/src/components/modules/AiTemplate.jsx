import React, { useState } from "react";
import AiTemplateCard from "./AiTemplateCard";
import TemplateCreator from "./TemplateCreator";

function AiTemplate({ credits }) {
  const [showTemplateCreator, setShowTemplateCreator] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templateInfo = {
    "Upwork Project Catalogue Creator": {
      title: "Upwork Project Catalogue Creator",
      subheading:
        "Create a complete Upwork project catalogue in one click and publish it on Upwork.",
      fields: [
        {
          label: "On which topic you want to create Upwork Project Catalogue?",
          textareaRow: 4,
        },
        { label: "What are your main keywords?", textareaRow: 4 },
        { label: "Pricing Information?", textareaRow: 2 },
      ],
    },
    "Upwork Profile Description": {
      title: "Upwork Profile Description",
      subheading:
        "Generate SEO Optimized and high converting Upwork Profile Description.",
      fields: [
        { label: "What is your main category?", textareaRow: 1 },
        { label: "What is your sub-category?", textareaRow: 1 },
        { label: "What are your skills?", textareaRow: 1 },
        { label: "How much experience do you have?", textareaRow: 1 },
        { label: "What are your focus keywords?", textareaRow: 1 },
      ],
    },
    "Upwork Headline Generator": {
      title: "Upwork Headline Generator",
      subheading:
        "Generate eye-catching and processing headlines that help you stand out from the rest.",
      fields: [
        { label: "How many years of experience do you have?", textareaRow: 1 },
        { label: "In which nich/category do you work", textareaRow: 1 },
        { label: "Which languages programs or tools you use", textareaRow: 3 },
        {
          label:
            "Do you have any success story or Proven Result Let us know about it here:",
          textareaRow: 3,
        },
      ],
    },
    "Fiverr Profile Description Writer": {
      title: "Fiverr Profile Description Writer",
      subheading:
        "Generate a unique description of your Fiverr Profile based on the services you offer.",
      fields: [
        { label: "What services do you offer to our clients?", textareaRow: 1 },
        { label: "What skills do you have?", textareaRow: 1 },
        { label: "What is your unique selling proposition?", textareaRow: 1 },
      ],
    },
    "Fiverr Tagline Generator": {
      title: "Fiverr Tagline Generator",
      subheading:
        "Generate a unique and compelling tagline for your Fiverr Profile.",
      fields: [
        { label: "What is your nich:", textareaRow: 1 },
        { label: "What are your unique selling points", textareaRow: 4 },
      ],
    },
    "Gig Description Writer": {
      title: "Gig Description Writer",
      subheading:
        "Generate compelling & SEO optimized Fiverr Gig Description based on provided information.",
      fields: [
        { label: "Gig Title", textareaRow: 1 },
        { label: "Fiverr Gig Category:", textareaRow: 1 },
        { label: "What is your Focus keywords for this Gig:", textareaRow: 1 },
      ],
    },
    "Linkedin Post Generator": {
      title: "Linkedin Post Generator",
      subheading:
        "Innovate Your Professional Image: Craft Your Ultimate LinkedIn Headline with AI-Powered Precision!",
      fields: [
        { label: "What is the topic?", textareaRow: 3 },
        { label: "Target Audience", textareaRow: 1 },
        { label: "Goal", textareaRow: 1 },
      ],
    },
    "Linkedin Banner Copy Generator": {
      title: "Linkedin Banner Copy Generator",
      subheading:
        "Get 10 PERFECT messages that you can put on your LinkedIn Header Image.",
      fields: [
        { label: "What is your goal?", textareaRow: 3 },
        { label: "What services do you provide?", textareaRow: 3 },
        { label: "What is your Target Audience", textareaRow: 3 },
      ],
    },
    "Youtube Description and Tags Generator": {
      title: "Youtube Description and Tags Generator",
      subheading:
        "Generate SEO Optimized Youtube Description and tags from title and main keywords!",
      fields: [
        { label: "Vide Title", textareaRow: 3 },
        { label: "Main Keywords", textareaRow: 3 },
      ],
    },
    // Add other template information here
  };

  const handleGenerateClick = (title) => {
    setSelectedTemplate(templateInfo[title]);
    setShowTemplateCreator(true);
  };

  const handleCancelClick = () => {
    setShowTemplateCreator(false);
    setSelectedTemplate(null);
  };
  return (
    <div className="">
      <div className="mt-4 ml-6 p-2 rounded-[20px] w-[70%]">
        {showTemplateCreator ? (
          <TemplateCreator
            title={selectedTemplate.title}
            subheading={selectedTemplate.subheading}
            fields={selectedTemplate.fields}
            onCancelClick={handleCancelClick}
            elClick={handleCancelClick}
          />
        ) : (
          <div className="">
            <div
              className="grid grid-cols-3 gap-4 p-10 bg-white rounded-[20px] overflow-auto "
              style={{ maxHeight: "800px" }}
            >
              <AiTemplateCard
                title="Upwork Project Catalogue Creator"
                description="Create a complete Upwork Project catalogue in one click and publish it on Upwork. The output will contai..."
                credits={credits}
                onClick={() =>
                  handleGenerateClick("Upwork Project Catalogue Creator")
                }
              />
              <AiTemplateCard
                title="Upwork Profile Description"
                description="Generate SEO Optimized and hight converting Upwork Profile Description"
                credits={credits}
                onClick={() =>
                  handleGenerateClick("Upwork Profile Description")
                }
              />

              <AiTemplateCard
                title="Upwork Headline Generator"
                description="Generate eye-catching and processing headlines that help you stand out from the rest"
                credits={credits}
                onClick={() => handleGenerateClick("Upwork Headline Generator")}
              />

              <AiTemplateCard
                title="Fiverr Profile Description Writer"
                description="Generate unique description of you Fiverr Profile after based on services you offer"
                credits={credits}
                onClick={() =>
                  handleGenerateClick("Fiverr Profile Description Writer")
                }
              />

              <AiTemplateCard
                title="Fiverr Tagline Generator"
                description="Generate a Unique and Compelling Tagline for your Fiverr Profile"
                credits={credits}
                onClick={() => handleGenerateClick("Fiverr Tagline Generator")}
              />
              <AiTemplateCard
                title="Gig Description Writer"
                description="Generate complelling & SEO optimized Fiverr Gig Description based on provided information"
                credits={credits}
                onClick={() => handleGenerateClick("Gig Description Writer")}
              />

              <AiTemplateCard
                title="Linkedin Post Generator"
                description="Innovate Your Professional Image: Craft Your Ultimate LinkedIn Headline with Al-Powered Precision!"
                credits={credits}
                onClick={() => handleGenerateClick("Linkedin Post Generator")}
              />

              <AiTemplateCard
                title="Linkedin Banner Copy Generator"
                description="Get 10 PERFECT messages that you can put on your LinkedIn Header Image."
                credits={credits}
                onClick={() =>
                  handleGenerateClick("Linkedin Banner Copy Generator")
                }
              />
              <AiTemplateCard
                title="Youtube Description and Tags Generator"
                description="Generate SEO Optimized Youtube Desccription and tags from title and main keywords!"
                credits={credits}
                onClick={() =>
                  handleGenerateClick("Youtube Description and Tags Generator")
                }
              />
            </div>
          </div>
        )}
        {/* )} */}
      </div>
    </div>
  );
}

export default AiTemplate;
