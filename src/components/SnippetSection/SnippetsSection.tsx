import { Section, SectionContent, SectionHeader } from "../helpers";
import { Snippet as SnippetData, loadSnippets } from "@/services";

import { FC } from "react";
import { Snippet } from "./Snippets.client";

export const SnippetsSection: FC<{ snippets: SnippetData[] }> = ({
  snippets,
}) => {
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
          {snippets.map((s, i) => (
            <Snippet key={i} snippet={s} />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};
