import {
  Snippet,
  SnippetProps,
} from "../components/SnippetSection/Snippets.client";

import { FC } from "react";
import Image from "next/image";
import SnippetPage from "./snippet-page";
import _ from "lodash";

export default function Home() {
  return <SnippetPage />;
}
