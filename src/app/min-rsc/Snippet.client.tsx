"use client";

import { FC } from "react";
import { Snippet as SnippetData } from "@/services";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import moment from "moment";

export interface SnippetProps {
  snippet: SnippetData;
}

export const SnippetClient: FC<SnippetProps> = ({ snippet }) => {
  const a = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div className="z-10 max-w-5xl w-full items-center text-sm mb-8">
      <h3 className="text-m font-bold mb-3">{snippet.title}</h3>
      <div className="mb-3">{snippet.description}</div>
      <SyntaxHighlighter language={snippet.language} style={docco}>
        {snippet.code}
      </SyntaxHighlighter>
    </div>
  );
};
