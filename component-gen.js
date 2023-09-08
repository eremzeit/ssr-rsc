const fs = require("fs");

const template = `
export const COMPONENT_NAME: FC<{ prop1: number }> = ({ prop1 }) => {
    const [myState, setMyState] = useState(0);
    return <div STYLE>CHILDREN</div>;
};
`;
const rootTemplate = `
export const COMPONENT_NAME: FC<{ prop1: number }> = ({ prop1 }) => {
    const [myState, setMyState] = useState(0);
    return <div>
        <button onClick={() => setMyState(myState + 1)}>Click Me</button>
        CHILDREN
    </div>;
};
`;

const CHILDREN = 3;
const LEVELS = 5;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function letter(i) {
  if (i < 0) return "-";
  return letters[i];
}

function indent(num) {
  let s = "";
  for (let i = 0; i < num; i++) {
    s = s + "  ";
  }
  return s;
}

function generateFromTemplate(componentBaseName, template, level, namePrefix) {
  namePrefix = namePrefix || "";
  if (level >= LEVELS) {
    return [undefined, undefined, 0];
  }

  let defStrings = [];
  const childCallsStrings = [];
  let nodeCount = 0;

  let count = level == 0 ? 1 : CHILDREN;
  for (let i = 0; i < count; i++) {
    const nextPrefixString = level == 0 ? "" : namePrefix + letter(i);
    const componentName = `${componentBaseName}${nextPrefixString}`;
    // console.log(
    //   `// ${indent(level)}LEVEL ${letter(level)} - index ${letter(
    //     i
    //   )} - name ${componentName}`
    // );

    const [childDefs, childCalls, childNodeCount] = generateFromTemplate(
      componentBaseName,
      template,
      level + 1,
      nextPrefixString
    );
    nodeCount = nodeCount + childNodeCount + 1;

    let defStr = template.replaceAll("COMPONENT_NAME", componentName);

    let style = "";
    if (childCalls) {
      defStr = defStr.replaceAll(
        "CHILDREN",
        `<p>${componentName}</p>` + childCalls
      );
      defStr = defStr.replaceAll(
        "STYLE",
        'style={{display: "inline-block", margin: "5px", border: "1px solid #555555", borderRadius: "4px"}}'
      );
    } else {
      defStr = defStr.replaceAll("CHILDREN", "");
      defStr = defStr.replaceAll(
        "STYLE",
        'style={{height: "10px", width: "10px", display: "block", backgroundColor: "#333", margin: "5px", borderRadius: "4px"}}'
      );
    }

    defStrings = [...defStrings, ...(childDefs || []), defStr];
    childCallsStrings.push(`<${componentName} prop1={prop1} />`);
  }

  return [
    defStrings,
    childCallsStrings.map((s) => "\n    " + s).join(""),
    nodeCount,
  ];
}

const result1 = generateFromTemplate("Hamburger", template, 0);
const result2 = generateFromTemplate("Salad", template, 0);

// console.log(result1[0].join("\n////\n"), "\n\n///num components " + result1[2]);
// console.log(result2[0].join("\n////\n"), "\n\n///num components " + result2[2]);

let fileStr = "import { FC, useState } from 'react';\n";
fileStr = fileStr + result1[0].join("\n////\n");
fileStr = fileStr + result2[0].join("\n////\n");
fileStr = fileStr + "\n\n///num components " + (result1[2] + result2[2]);

const path = "src/components/ComplexComponentTree/complex-component-tree.tsx";

fs.writeFile(path, fileStr, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
