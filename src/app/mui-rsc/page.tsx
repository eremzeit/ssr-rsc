//export const runtime = "edge";

import { FC, ReactNode, Suspense } from "react";
import { Section, SectionContent, SectionHeader } from "@/components/helpers";
import {
  Snippet,
  SnippetProps,
} from "../../components/SnippetSection/Snippets";
import { UserData, loadSnippets, loadUserData } from "@/services";

import { ComplexComponentTreeSection } from "@/components/ComplexComponentTree/ComplexComponentTreeSection";
// import { DynamicFooForm } from "@/components/FooForm/FooFormDynamic";
import Image from "next/image";
import { MuiForm } from "@/components/MuiForm/MuiForm";
import { NavBar } from "@/components/NavBar";
import { SnippetsSection } from "@/components/SnippetSection/SnippetsSection";
import _ from "lodash";
import { cookies } from "next/headers";
import moment from "moment";

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
          <MuiForm />
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
