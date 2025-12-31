"use client";

import * as Popover from "@radix-ui/react-popover";
import { ReactNode } from "react";
// import { Button } from "@/components/atoms/Button";

interface Props {
  children: ReactNode;
  content: ReactNode;
}

export const TokenRowPopover = ({ children, content }: Props) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="p-2 bg-white shadow-lg rounded-md z-50">
          {content}
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
