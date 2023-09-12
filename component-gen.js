const fs = require("fs");

const template = `
export const COMPONENT_NAME: FC<{ prop1: number }> = ({ prop1 }) => {
    return <div STYLE CLASS_NAME>CHILDREN</div>;
};
`;

const CHILDREN = 3;
const LEVELS = 4;

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
      defStr = defStr.replaceAll("CLASS_NAME", "");
    } else {
      defStr = defStr.replaceAll("CHILDREN", "");
      defStr = defStr.replaceAll(
        "STYLE",
        'style={{height: "10px", width: "10px", display: "block", backgroundColor: "#333", margin: "5px", borderRadius: "4px"}}'
      );
      defStr = defStr.replaceAll("CLASS_NAME", "");
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

function generateFile(componentName) {
  const result = generateFromTemplate(componentName, template, 0);

  let fileStr = "import { FC } from 'react';\n";
  fileStr = fileStr + result[0].join("\n////\n");
  fileStr = fileStr + "\n\n///num components " + result[2];

  const path = `src/components/ComplexComponentTree/${componentName}.tsx`;

  fs.writeFile(path, fileStr, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}
generateFile("Hamburger");
generateFile("Salad");
generateFile("BabyCorn");
generateFile("PeanutButter");
generateFile("Watermellon");
