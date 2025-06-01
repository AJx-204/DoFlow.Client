import React from "react";
import { useNotifier } from "../../src/global/index";

const TestButtons = () => {

  const { addMessage } = useNotifier();

  return (
    <div className="w-full h-screen bg-zinc-100">
      <div className="space-x-4 p-4">
        <button
          className="bg-green-600 text-white px-3 py-1 rounded"
          onMouseEnter={() => addMessage("Success message!", "success")}
        >
          Success
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded"
          onMouseEnter={() => addMessage("Error occurred h h hudwhq i hdwhqu hdwqhu dwqhui!", "error")}
        >
          Error
        </button>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onMouseEnter={() => addMessage("Info message!", "info")}
        >
          Info
        </button>
        <button
          className="bg-yellow-400 text-black px-3 py-1 rounded"
          onMouseEnter={() => addMessage("Warning warning!", "warning")}
        >
          Warning
        </button>
      </div>
    </div>
    
  );
};


export default TestButtons;
