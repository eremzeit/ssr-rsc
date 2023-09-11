"use client";

import {
  ControlWrapper,
  Section,
  SectionContent,
  SectionHeader,
  SubSectionHeader,
} from "../helpers";
import React, { FC, ReactNode } from "react";

import { MuiAccordian } from "./MuiAccordion";
import { MuiAutocomplete } from "./MuiAutocomplete";
import MuiCheckbox from "./MuiCheckbox";
import { MuiDatePicker } from "./MuiDatePicker";
import MuiList from "./MuiList";
import MuiRating from "./MuiRating";
import MuiSwitch from "./MuiSwitch";

export const MuiForm: FC<{}> = ({}) => {
  return (
    <Section>
      <SectionHeader>
        interactive UI form using MUI components(which are client components)
      </SectionHeader>
      <SectionContent>
        <ControlWrapper headerText="Date Picker">
          <MuiDatePicker />
        </ControlWrapper>
        <ControlWrapper headerText="Auto Complete">
          <MuiAutocomplete />
        </ControlWrapper>
        <ControlWrapper headerText="Accordian">
          <MuiAccordian />
        </ControlWrapper>
      </SectionContent>
    </Section>
  );
};
