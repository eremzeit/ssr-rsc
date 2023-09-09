import { FC, ReactNode } from "react";
import { Section, SectionContent, SectionHeader } from "../helpers";
import { Snippet as SnippetData, loadSnippets } from "@/services";

import { Snippet } from "./Snippets";

export const SnippetsSection: FC<{
  // snippets: SnippetData[];
  snippetList: ReactNode[];
}> = ({ snippetList }) => {
  return (
    <Section>
      <SectionHeader>
        leet code snippets (which are server components)
      </SectionHeader>
      <SectionContent>
        <div
          className="flex items-stretch flex-col"
          style={{ maxHeight: "500px", overflow: "scroll" }}
        >
          {snippetList}
          {/* {snippets.map((s, i) => (
            <Snippet key={i} snippet={s} />
          ))} */}
        </div>
      </SectionContent>
    </Section>
  );
};
