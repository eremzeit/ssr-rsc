import {
  ControlWrapper,
  Section,
  SectionContent,
  SectionHeader,
  SubSectionHeader,
} from "../helpers";
import React, { FC, ReactNode } from "react";

import FooAccordian from "./FooAccordian";
import { FooAutocomplete } from "./FooAutocomplete";
import { FooDatePicker } from "./FooDatePicker";

export const FooForm: FC<{}> = ({}) => {
  return (
    <Section>
      <SectionHeader>
        killer interactive UI form (which are client components)
      </SectionHeader>
      <SectionContent>
        <ControlWrapper headerText="Date Picker">
          <FooDatePicker />
        </ControlWrapper>
        <ControlWrapper headerText="Auto Complete">
          <FooAutocomplete />
        </ControlWrapper>
        <ControlWrapper headerText="Accordian">
          <FooAccordian />
        </ControlWrapper>
      </SectionContent>
    </Section>
  );
};
