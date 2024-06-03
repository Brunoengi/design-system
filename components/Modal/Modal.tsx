import { Dialog, Transition, DialogProps } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
} & DialogProps<any> &
  React.HTMLAttributes<HTMLDivElement>;

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col gap-5 w-full max-w-md transform overflow-hidden rounded-lg bg-white p-7 transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title as="h3" className="text-lg font-semibold">
                    {title}
                  </Dialog.Title>
                  <button onClick={onClose}>
                    <XMarkIcon className="w-5 h-5 text-disabled" />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;