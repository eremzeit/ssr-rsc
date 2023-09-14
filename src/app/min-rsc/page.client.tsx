"use client";

import { FC, Suspense } from "react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Snippet as SnippetData, UserData } from "@/services";

import { ComplexComponentTreeSection } from "@/components/ComplexComponentTree/ComplexComponentTreeSection";
import { ComplexComponentTreeSectionClient } from "@/components/ComplexComponentTree/ComplexComponentTreeSection.client";
import { FooForm } from "@/components/FooForm/FooForm";
import { NavBar } from "@/components/NavBar";
import { SnippetClient } from "./Snippet.client";
import { SnippetsSection } from "@/components/SnippetSection/SnippetsSection";
import _ from "lodash";

type PageProps = { userData: UserData; snippets: SnippetData[] };

export const SnippetClientPage: FC<PageProps> = (props) => {
  return (
    <main className="font-mono">
      <NavBar user={props.userData} />
      <div
        className="px-3"
        style={{ maxWidth: 1600, margin: "0px auto", padding: "0px 3rem" }}
      >
        <FooForm />
        <Suspense fallback={<p>Loading snippets...</p>}>
          <SnippetsSection
            snippetList={props.snippets.map((s, i) => (
              <SnippetClient key={i} snippet={s} />
              // <Snippet key={i} snippet={s} />
            ))}
          />
        </Suspense>
        <ComplexComponentTreeSectionClient />
      </div>
    </main>
  );
};
