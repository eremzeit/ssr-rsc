"use client";

import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface SnippetProps {
  username: string;
  description: string;
  code: string;
  language: string;
}
export const Snippet: FC<SnippetProps> = ({ language, code }) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center text-sm">
      {/* <SyntaxHighlighter language={language} style={docco}>
        {code}
      </SyntaxHighlighter> */}
    </div>
  );
};
