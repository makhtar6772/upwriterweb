import React from "react";

function AiTemplateCard({ title, description, credits, onClick }) {
  return (
    <div>
      <div className="bg-white border mt-2 rounded-lg shadow-lg relative overflow-hidden ">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-base">{description}</p>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-between items-center bg-green-50">
          <div className="flex items-center">
            <span className="mr-1">{credits} Credits</span>
          </div>
          <button
            type="button"
            className="bg-green-600 text-white py-2 px-6 rounded-full font-bold hover:bg-green-700"
            onClick={onClick}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiTemplateCard;
