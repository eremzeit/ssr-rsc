import { FC, ReactNode } from "react";

export const SectionHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="text-xl font-bold mb-5">{children}</h1>;
};

export const Section: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mt-8">{children}</div>;
};

export const SectionContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="p-10 border rounded-md border-slate-300 border-solid">
      {children}
    </div>
  );
};
