import React from "react";

const poem = {
  lines: ["I write, erase, rewrite", "Erase again, and then", "A poppy blooms."]
};

export default function Poem() {
  let linesLength = poem.lines.length;
  return (
    <article>
      {poem.lines.map((line, index) => (
        <React.Fragment key={index}>
          <p>{line}</p>
          {index < linesLength - 1 && <hr />}
        </React.Fragment>
      ))}
    </article>
  );
}
