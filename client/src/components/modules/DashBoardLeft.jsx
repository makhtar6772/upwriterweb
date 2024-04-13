import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreditsInfo from "./CreditsInfo";

function DashBoardLeft({ onSectionClick, creditsinfo }) {
  const [selectedHome, setSelectedHome] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState(false);
  const [selectedAITemplates, setSelectedAITemplates] = useState(false); // Fix the variable name here
  const [selectedPortfolio, setSelectedPortfolio] = useState(false);
  const [selectedCustomProjects, setSelectedCustomProjects] = useState(false);

  const handleClick = (section) => {
    setSelectedHome(section === "Home");
    setSelectedJobs(section === "Jobs");
    setSelectedAITemplates(section === "AI Templates"); // Fix the variable name here
    setSelectedPortfolio(section === "Portfolio");
    setSelectedCustomProjects(section === "Custom Projects");

    onSectionClick(section);
  };

  const handlelogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  return (
    <div className="w-[20%]">
      <div className="w-[100%] h-[92%] mt-14 ml-4 p-4 bg-white flex flex-col justify-between rounded-[14px] shadow-md">
        <div className="rounded-full p-2 mx-auto mb-6">
          <h1 className="text-[30px] font-bold text-center text-green-500">
            Upwriter
          </h1>
        </div>
        <nav>
          <ul className="justify-center items-center text-center text-xl">
            <li>
              <a
                className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                  selectedHome ? "bg-green-500 text-white" : "bg-white"
                }`}
                onClick={() => handleClick("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                  selectedJobs ? "bg-green-500 text-white" : "bg-white"
                }`}
                onClick={() => handleClick("Jobs")}
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                  selectedAITemplates ? "bg-green-500 text-white" : "bg-white"
                }`}
                onClick={() => handleClick("AI Templates")}
              >
                AI Templates
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                  selectedPortfolio ? "bg-green-500 text-white" : "bg-white"
                }`}
                onClick={() => handleClick("Portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                  selectedCustomProjects
                    ? "bg-green-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleClick("Custom Projects")}
              >
                Custom Projects
              </a>
            </li>
          </ul>
        </nav>
        <CreditsInfo credits={creditsinfo} />
        <div className="flex justify-center items-center">
          <button
            onClick={handlelogout}
            className="w-20 py-2 px-2 text-white bg-green-600 rounded-md transition duration-300 hover:bg-green-500"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoardLeft;
