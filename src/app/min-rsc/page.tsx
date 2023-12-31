//export const runtime = "edge";

import { Snippet, UserData, loadSnippets, loadUserData } from "@/services";

import { SnippetClientPage } from "./page.client";
import { Suspense } from "react";
import _ from "lodash";
import { cookies } from "next/headers";

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

async function Page() {
  const userData = await loadUserData();
  const snippets = await loadSnippets();

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <>
      <SnippetClientPage userData={userData} snippets={snippets} />
      {theme?.name}
    </>
  );
}

export default async function PageWithSuspense() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Page />
    </Suspense>
  );
}
