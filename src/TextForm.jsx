import React from "react";

export default function TextForm({ input, setInput }) {
  console.log(input);

  return (
    <div className="flex flex-col gap-4 grow py-10">
      <label>
        <p className="font-medium">Word</p>
        <input
          dir="auto"
          className="block w-full mt-1 px-3 py-1 border rounded-lg"
          type="text"
          value={input.text}
          onChange={(e) => setInput((prev) => ({ ...prev, text: e.target.value }))}
        />
      </label>
      <label>
        <p className="font-medium">Number of rows</p>
        <div className="flex gap-1 mt-1">
          <input
            className="block w-full px-3 py-1 border rounded-lg arrows-hidden"
            type="number"
            value={input.nbRows}
            onChange={(e) => setInput((prev) => ({ ...prev, nbRows: Number(e.target.value) }))}
          />

          <button
            className="mr-2 "
            onClick={() => {
              setInput((prev) => ({ ...prev, nbRows: Math.max(prev.nbRows - 1, 1) }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <MinusIcon />
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              setInput((prev) => ({ ...prev, nbRows: prev.nbRows + 1 }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <PlusIcon />
            </div>
          </button>
        </div>
      </label>
      <label>
        <p className="font-medium">Number of Columns</p>
        <div className="flex gap-1 mt-1">
          <input
            className="block w-full px-3 py-1 border rounded-lg arrows-hidden"
            type="number"
            value={input.nbCols}
            onChange={(e) => setInput((prev) => ({ ...prev, nbCols: Number(e.target.value) }))}
          />

          <button
            className="mr-2 "
            onClick={() => {
              setInput((prev) => ({ ...prev, nbCols: Math.max(prev.nbCols - 1, 1) }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <MinusIcon />
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              setInput((prev) => ({ ...prev, nbCols: prev.nbCols + 1 }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <PlusIcon />
            </div>
          </button>
        </div>
      </label>
      <label>
        <p className="font-medium">Padding</p>
        <div className="flex gap-1 mt-1">
          <input
            className="block w-full px-3 py-1 border rounded-lg arrows-hidden"
            type="number"
            value={input.padding}
            onChange={(e) => setInput((prev) => ({ ...prev, padding: Number(e.target.value) }))}
          />

          <button
            className="mr-2 "
            onClick={() => {
              setInput((prev) => ({ ...prev, padding: Math.max(prev.padding - 1, 1) }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <MinusIcon />
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              setInput((prev) => ({ ...prev, padding: prev.padding + 1 }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <PlusIcon />
            </div>
          </button>
        </div>
      </label>
      <label>
        <p className="font-medium">Font Weight</p>
        <select
          value={input.fontWeight}
          onChange={(e) => setInput((prev) => ({ ...prev, fontWeight: e.target.value }))}
          className="block w-full mt-1 px-3 py-1 border rounded-lg"
        >
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
      </label>
      <label>
        <p className="font-medium">Font Family</p>
        <select
          value={input.fontFamily}
          onChange={(e) => setInput((prev) => ({ ...prev, fontFamily: e.target.value }))}
          className="block w-full mt-1 px-3 py-1 border rounded-lg"
          style={{ fontFamily: input.fontFamily }}
        >
          {fonts.map((font) => (
            <option style={{ fontFamily: font }} key={font} value={font}>
              {font} -- السلام عليكم و رحمة الله و بركاته
            </option>
          ))}
        </select>
      </label>
      <label>
        <p className="font-medium">Font Size</p>
        <div className="flex gap-1 mt-1">
          <input
            className="block w-full px-3 py-1 border rounded-lg arrows-hidden"
            type="number"
            value={input.fontSize}
            onChange={(e) => setInput((prev) => ({ ...prev, fontSize: Number(e.target.value) }))}
          />

          <button
            className="mr-2 "
            onClick={() => {
              setInput((prev) => ({ ...prev, fontSize: Math.max(prev.fontSize - 1, 1) }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <MinusIcon />
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              setInput((prev) => ({ ...prev, fontSize: prev.fontSize + 1 }));
            }}
          >
            <div className="flex items-center justify-center h-full aspect-square rounded-lg border bg-slate-100">
              <PlusIcon />
            </div>
          </button>
        </div>
      </label>
      <label>
        <p className="font-medium">Font Color</p>
        <input
          className="block w-full mt-1 border rounded-lg"
          type="color"
          value={input.color}
          onChange={(e) => setInput((prev) => ({ ...prev, color: e.target.value }))}
        />
      </label>
      <button
        onClick={() => {
          window.frames["words"].focus();
          window.frames["words"].print();
        }}
        className="rounded-lg bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700"
      >
        Print
      </button>
    </div>
  );
}

const fonts = [
  "sans-serif",
  "Rubik",
  "Cairo",
  "Readex Pro",
  "Changa",
  "Noto Kufi Arabic",
  "Baloo Bhaijaan 2",
  "El Messiri",
  "Alexandria",
  "Cairo Play",
  "Handjet",
  "Kufam",
  "Lemonada",
  "Mada",
  "Marhey",
  "Markazi Text",
  "Noto Naskh Arabic",
  "Noto Nastaliq Urdu",
  "Noto Sans Arabic",
  "Reem Kufi Fun",
  "Reem Kufi",
  "Vazirmatn",
];

function PlusIcon({ width = 24, height = 24, color = "#000000" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} color={color} fill={"none"}>
      <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon({ width = 24, height = 24, color = "#000000" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} color={color} fill={"none"}>
      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
