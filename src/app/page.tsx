import { Snippet, SnippetProps } from "./api/snippets.client";

import { FC } from "react";
import Image from "next/image";
import SnippetPage from "./snippet-page";
import _ from "lodash";

export default function Home() {
  return <SnippetPage />;
}
