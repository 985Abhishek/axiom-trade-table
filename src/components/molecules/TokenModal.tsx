"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title: string; // <-- new
}

export const TokenModal = ({title, open, onOpenChange, children }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
       <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl max-w-md w-full border border-gray-200">
  <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>
  {children}
</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
