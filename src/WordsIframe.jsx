import React from "react";

export default function WordsIframe({ input, setInput }) {
  const { text, nbRows, nbCols, padding, fontSize, fontWeight, color, fontFamily } = input;

  const srcDoc = `
    <html>
      <head>
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=El+Messiri:wght@400..700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Cairo+Play:wght@200..1000&family=Handjet:wght@100..900&family=Kufam:ital,wght@0,400..900;1,400..900&family=Lemonada:wght@300..700&family=Mada:wght@200..900&family=Marhey:wght@300..700&family=Markazi+Text:wght@400..700&family=Noto+Naskh+Arabic:wght@400..700&family=Noto+Nastaliq+Urdu:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&family=Reem+Kufi+Fun:wght@400..700&family=Reem+Kufi:wght@400..700&family=Vazirmatn:wght@100..900&display=swap");
          body {
            font-family: sans-serif;
          }
          .container{
            display: flex;
            flex-direction:column;
            aspect-ratio: 2480 / 3508;
            justify-content: space-between;
            color: ${color};
            padding: ${padding}px;
            font-weight: ${fontWeight};
            font-size: ${fontSize}px;
            font-family: ${fontFamily};
          }
          .row{
            display: flex;
            justify-content: space-between;
          }
          
        </style>
      </head>
      <body>
      <div class="container">
        ${Array(nbRows)
          .fill(0)
          .map(
            () => `
          <div class="row">
            ${Array(nbCols)
              .fill(0)
              .map(
                () => `
              <div class="word">${text}</div>
              `
              )
              .join("")}
          </div>
          `
          )
          .join("")}
      </div>
      </body>
    `;

  return (
    <div className="">
      <iframe id="words" name="words" className="border border-slate-700 w-full lg:h-screen aspect-[2480/3508]" srcDoc={srcDoc}></iframe>
    </div>
  );
}