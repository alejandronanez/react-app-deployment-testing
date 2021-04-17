import React, { useState } from 'react';

export function Banner() {
  const [isOn, setIsOn] = useState(false);
  const titleLabel = isOn ? 'On' : 'Off';
  const buttonLabel = isOn ? 'Off' : 'On';
  return (
    <div className="shadow-lg rounded bg-indigo-600 h-full flex items-center justify-center flex-col">
      <h2 className="text-indigo-50 font-black text-2xl">
        Switch is {titleLabel}
      </h2>
      <button
        className="bg-indigo-50 text-indigo-600 py-3 px-6 rounded font-medium mt-4 hover:bg-indigo-100"
        onClick={() => setIsOn((old) => !old)}
      >
        Turn {buttonLabel}
      </button>
    </div>
  );
}
