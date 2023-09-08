import _ from "lodash";
import { sleep } from "sleep-ts";

export async function loadUserData() {
  await sleep(2000);
  return { username: "megacoder25", firstName: "Joe", lastName: "Wasowski" };
}

export async function loadSnippets() {
  await sleep(2000);
}

export async function loadSnippetComments() {
  await sleep(2000);
}

export interface Snippet {
  username: string;
  description: string;
  code: string;
  language: string;
}

export interface SnippetComment {
  snippetId: number;
  username: string;
  comment: string;
}

export async function addSnippet(snippet: Snippet) {}

export async function addCommentToSnippet(snippetComment: SnippetComment) {}
