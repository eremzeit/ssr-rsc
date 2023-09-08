import React, { FC } from "react";
import { Section, SectionContent, SectionHeader } from "./helpers";

import { FooAutocomplete } from "./FooAutocomplete";

export const FooForm: FC<{}> = ({}) => {
  return (
    <Section>
      <SectionHeader>killer interactive UI form</SectionHeader>
      <SectionContent>
        <FooAutocomplete />
      </SectionContent>
    </Section>
  );
};
