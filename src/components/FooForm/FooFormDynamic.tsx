import dynamic from "next/dynamic";
export const DynamicFooForm = dynamic(
  () => import("../../components/FooForm/FooForm").then((mod) => mod.FooForm),
  {
    ssr: false,
    loading: () => <p>loading form....</p>,
  }
);
