"use client";

import { Hamburger, Salad } from "./complex-component-tree";
import { Section, SectionContent, SectionHeader } from "../helpers";
import { Snippet as SnippetData, loadSnippets } from "@/services";

import { FC } from "react";

export const ComplexComponentTreeSection: FC<{}> = ({}) => {
  return (
    <Section>
      <SectionHeader>
        About 250 uniquely generated component definitions (to simulate app
        bloat)
      </SectionHeader>
      <SectionContent>
        <Hamburger prop1={0} />
        <Salad prop1={0} />
      </SectionContent>
    </Section>
  );
};
