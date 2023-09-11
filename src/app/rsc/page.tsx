export const runtime = "edge";

import { FC, ReactNode, Suspense } from "react";
import { Section, SectionContent, SectionHeader } from "@/components/helpers";
import {
  Snippet,
  SnippetProps,
} from "../../components/SnippetSection/Snippets";
import { UserData, loadSnippets, loadUserData } from "@/services";

import { ComplexComponentTreeSection } from "@/components/ComplexComponentTree/ComplexComponentTreeSection";
// import { DynamicFooForm } from "@/components/FooForm/FooFormDynamic";
import { FooForm } from "@/components/FooForm/FooForm";
import Image from "next/image";
import { SnippetsSection } from "@/components/SnippetSection/SnippetsSection";
import _ from "lodash";
import { cookies } from "next/headers";
import moment from "moment";

const NavBar: FC<{ user: UserData }> = ({ user }) => {
  return (
    <header className="bg-gray-200 h-8 flex">
      {" "}
      <h1 className="mx-6 font-bold h-full leading-8">FubarUI.xyz</h1>
      <div className="mx-6 flex flex-grow">
        <div className="mr-10 leading-8">Home</div>
        <div className="mr-10 leading-8">About</div>
      </div>
      <div className="mr-6 basis-auto">
        Welcome {user.username} ({user.unreadCount})
      </div>
    </header>
  );
};

export default async function SnippetPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  const userData = await loadUserData();
  const snippets = await loadSnippets();

  return (
    <main className="font-mono">
      <NavBar user={userData} />
      <div
        className="px-3"
        style={{ maxWidth: 1600, margin: "0px auto", padding: "0px 3rem" }}
      >
        <Suspense fallback={<p>loading snippets...</p>}>
          <FooForm />
          {/* <DynamicFooForm /> */}
        </Suspense>
        <Suspense fallback={<p>loading snippets...</p>}>
          <SnippetsSection
            snippetList={snippets.map((s, i) => (
              <Snippet key={i} snippet={s} />
            ))}
          />
        </Suspense>
        <ComplexComponentTreeSection />
        {theme?.value}
      </div>
    </main>
  );
}
