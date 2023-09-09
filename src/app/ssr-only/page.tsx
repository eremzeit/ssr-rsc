import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Snippet, UserData, loadSnippets, loadUserData } from "@/services";

import { ComplexComponentTreeSection } from "@/components/ComplexComponentTree/ComplexComponentTreeSection";
import { FC } from "react";
import { FooForm } from "@/components/FooForm/FooForm";
import Image from "next/image";
import { NavBar } from "../rsc/page";
import { SnippetClientPage } from "./page.client";
import { SnippetsSection } from "@/components/SnippetSection/SnippetsSection";
import _ from "lodash";

type PageProps = { userData: UserData; snippets: Snippet[] };

// export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
//   const userData = await loadUserData();
//   const snippets = await loadSnippets();
//   return { props: { userData, snippets } };
// };

// export default function Page({
//   userData,
//   snippets,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <main className="font-mono">
//       <NavBar user={userData} />
//       <div
//         className="px-3"
//         style={{ maxWidth: 1600, margin: "0px auto", padding: "0px 3rem" }}
//       >
//         <FooForm />
//         <SnippetsSection snippets={snippets} />
//         <ComplexComponentTreeSection />
//       </div>
//     </main>
//   );
// }

export default async function SnippetPage() {
  const userData = await loadUserData();
  const snippets = await loadSnippets();

  return <SnippetClientPage userData={userData} snippets={snippets} />;
  // return <div></div>;
}
