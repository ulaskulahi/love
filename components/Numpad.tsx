import React from "react";
import { useState } from "react";

type NumpadProps = {
  onSubmit: (passcode: string) => void;
};

export default function Numpad({ onSubmit }: NumpadProps) {
  const [passcode, setPasscode] = useState("");

  const handleButtonClick = (value: string) => {
    if (passcode.length < 6) setPasscode(passcode + value);
  };

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  };

  const handleEnter = () => {
    onSubmit(passcode);
    setPasscode("");
  };

  return (
    <div className="min-h-screen flex h-full mt-[100px]  ">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl text-cusPink"> Enter Passcode</h1>
        <input
          type="password"
          value={passcode}
          disabled
          className="text-2xl text-center bg-cusPink w-32 py-2 rounded-md text-white"
        />
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handleButtonClick((i + 1).toString())}
              className="bg-cusPink text-white w-16 h-16 rounded-md text-xl font-bold hover:bg-pink-200"
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleDelete}
            className="bg-cusPink text-white w-16 h-16 rounded-md text-xl font-bold hover:bg-pink-200"
          >
            Del
          </button>
          <button
            onClick={() => handleButtonClick("0")}
            className="bg-cusPink text-white w-16 h-16 rounded-md text-xl font-bold hover:bg-pink-200"
          >
            0
          </button>
          <button
            onClick={handleEnter}
            className="bg-cusPink text-white w-16 h-16 rounded-md text-xl font-bold hover:bg-pink-200"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
