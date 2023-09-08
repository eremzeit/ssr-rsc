import { FC, ReactNode, Suspense } from "react";
import { Section, SectionContent, SectionHeader } from "@/components/helpers";
import { Snippet, SnippetProps } from "./api/snippets.client";
import { UserData, loadSnippets, loadUserData } from "@/services";

import { FooForm } from "@/components/FooForm";
import Image from "next/image";
import _ from "lodash";
import moment from "moment";

// date picker
// auto-complete


export const NavBar: FC<{ user: UserData }> = ({ user }) => {
  return (
    <header className="bg-gray-200 h-8 flex">
      {" "}
      <h1 className="mx-6 font-bold h-full leading-8">FubarUI.xyz</h1>
      <div className="mx-6 flex flex-grow">
        <div className="mr-10 leading-8">Home</div>
        <div className="mr-10 leading-8">About</div>
      </div>
      {/* <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div> */}
      <div className="mr-6 basis-auto">
        Welcome {user.username} ({user.unreadCount})
      </div>
    </header>
  );
};

export async function SnippetSection() {
  const snippets = await loadSnippets();
  console.log(snippets);
  return (
    <Section>
      <SectionHeader>leet code snippets</SectionHeader>
      <SectionContent>
        <div
          className="flex items-stretch flex-col"
          style={{ maxHeight: "500px", overflow: "scroll" }}
        >
          {snippets.map((s, i) => (
            <Snippet key={i} snippet={s} />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}

export default async function SnippetPage() {
  const userData = await loadUserData();

  return (
    <main className="font-mono">
      <NavBar user={userData} />
      <div
        className="px-3"
        style={{ maxWidth: 1600, margin: "0px auto", padding: "0px 3rem" }}
      >
        <Suspense fallback={<p>loading snippets...</p>}>
          <FooForm />
        </Suspense>
        <Suspense fallback={<p>loading snippets...</p>}>
          <SnippetSection />
        </Suspense>
      </div>
    </main>
  );
}
