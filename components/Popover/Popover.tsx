import { Popover } from '@headlessui/react';
import Button from '../Button/Button'; // ajuste o caminho se necessário

type Placement = 'top' | 'right' | 'bottom' | 'left';

const placementClasses: Record<Placement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
};

export type PopoverMessageProps = {
  message: string;
  placement?: Placement;
  buttonLabel?: string;
  w?: string; // Tailwind width class, e.g., 'w-64', 'max-w-xs'
}

const PopoverMessage = ({
  message,
  placement = 'bottom',
  buttonLabel = 'Show Message',
  w = 'w-64',
}: PopoverMessageProps) => {
  return (
    <Popover className="relative inline-block">
      <Popover.Button as={Button}>
        {buttonLabel}
      </Popover.Button>
      <Popover.Panel
        className={`absolute z-10 p-4 bg-white border rounded shadow text-gray-800 ${w} ${placementClasses[placement]}`}
      >
        {message}
      </Popover.Panel>
    </Popover>
  );
}

export default PopoverMessage;