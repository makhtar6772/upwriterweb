import React from "react";
import { Link } from "react-router-dom";

function CreditsInfo({ credits }) {
  const balance = credits > 0 ? credits : 0;
  return (
    <div>
      <div className="text-black">
        <div className="flex items-center border border-gray-300 rounded-lg p-4 max-w-xs mx-auto shadow-md">
          <div className="icon mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.1737 12.9256V12.12C19.1737 10.6492 19.1737 9.91383 18.7234 9.45691C18.2732 9 17.5485 9 16.0992 9H7.90077C6.45147 9 5.72682 9 5.27658 9.45691C4.82634 9.91383 4.82634 10.6492 4.82634 12.12V12.9256C4.82634 13.3018 4.82634 13.4899 4.79345 13.6739C4.76056 13.858 4.69549 14.0341 4.56534 14.3863L4.34812 14.9742C3.16867 18.166 2.57895 19.7619 3.34312 20.8809C4.1073 22 5.78684 22 9.14591 22H14.8541C18.2132 22 19.8927 22 20.6569 20.8809C21.4211 19.7619 20.8313 18.166 19.6519 14.9742L19.4347 14.3863C19.3045 14.0341 19.2394 13.858 19.2065 13.6739C19.1737 13.4899 19.1737 13.3018 19.1737 12.9256Z"
                stroke="#7ed321"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 11C16 5 13.8655 2 12 2C10.1345 2 8 5 8 11"
                stroke="#7ed321"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 16C13.2504 16 14.944 18.6278 13.3547 18.8954C12.5228 19.0354 11.4711 19.0344 10.6453 18.8954C9.056 18.6278 10.7496 16 12 16Z"
                stroke="#7ed321"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13.94 17.0049C15.2105 16.8729 17.4477 16.1267 19.0551 14.9424"
                stroke="#7ed321"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1147 17.0312C8.84417 16.8992 6.60699 16.1531 4.99961 14.9688"
                stroke="#7ed321"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="content">
            <h2 className="title text-lg font-bold">AI Credits</h2>
            <p className="balance">Balance: {balance}</p>
            <p className="description mb-10">
              Use these credits for generating proposals and other purposes.
            </p>
            <Link
              to={"/credits"}
              className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              + Add more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditsInfo;
