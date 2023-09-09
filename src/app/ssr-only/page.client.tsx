"use client";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Snippet, UserData, loadSnippets, loadUserData } from "@/services";

import { ComplexComponentTreeSection } from "@/components/ComplexComponentTree/ComplexComponentTreeSection";
import { FC } from "react";
import { FooForm } from "@/components/FooForm/FooForm";
import { SnippetClient } from "./Snippet.client";
import { SnippetsSection } from "@/components/SnippetSection/SnippetsSection";
import _ from "lodash";

type PageProps = { userData: UserData; snippets: Snippet[] };
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

export const SnippetClientPage: FC<PageProps> = (props) => {
  return (
    <main className="font-mono">
      <NavBar user={props.userData} />
      <div
        className="px-3"
        style={{ maxWidth: 1600, margin: "0px auto", padding: "0px 3rem" }}
      >
        <FooForm />
        <SnippetsSection
          snippetList={props.snippets.map((s, i) => (
            <SnippetClient key={i} snippet={s} />
          ))}
        />
        <ComplexComponentTreeSection />
      </div>
    </main>
  );
};
