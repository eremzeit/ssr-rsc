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
import MuiCheckbox from "./MuiCheckbox";
import MuiList from "./MuiList";
import MuiRating from "./MuiRating";
import MuiSwitch from "./MuiSwitch";

export const FooForm: FC<{}> = ({}) => {
  return (
    <Section>
      <SectionHeader>
        interactive UI form (which are client components)
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

        <ControlWrapper headerText="MUI Checkbox">
          <MuiCheckbox />
        </ControlWrapper>
        <ControlWrapper headerText="MUI List">
          <MuiList />
        </ControlWrapper>
        <ControlWrapper headerText="MUI Switch">
          <MuiSwitch />
        </ControlWrapper>
        <ControlWrapper headerText="MUI Rating">
          <MuiRating />
        </ControlWrapper>
      </SectionContent>
    </Section>
  );
};
