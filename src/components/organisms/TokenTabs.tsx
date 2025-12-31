"use client";

import * as Tabs from "@radix-ui/react-tabs";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const TokenTabs = ({ value, onChange }: Props) => {
  return (
    <Tabs.Root
      value={value}
      onValueChange={onChange}
      className="mb-4"
    >
      <Tabs.List className="flex gap-4 border-b">
        <Tab value="new">New Pairs</Tab>
        <Tab value="final">Final Stretch</Tab>
        <Tab value="migrated">Migrated</Tab>
      </Tabs.List>
    </Tabs.Root>
  );
};

const Tab = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => (
  <Tabs.Trigger
    value={value}
    className="pb-2 text-sm text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2"
  >
    {children}
  </Tabs.Trigger>
);
