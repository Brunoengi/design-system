import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { dropdownStyles } from "./Dropdown.style";

export type DropdownProps = {
  list: string[];
};

const Dropdown = ({ list, ...rest }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState(list[0] || null);
  const [query, setQuery] = useState("");

  const filteredItem =
    query === ""
      ? list
      : list.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedItem} onChange={setSelectedItem} {...rest}>
      <div className={dropdownStyles.container}>
        <div className={dropdownStyles.containerMenu}>
          <Combobox.Input
            className={dropdownStyles.input}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className={dropdownStyles.button}>
            <ChevronDownIcon
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className={dropdownStyles.optionsContainer}>
            {filteredItem.length === 0 && query !== "" ? (
              <div className={dropdownStyles.noResult}>Nenhum selecionado.</div>
            ) : (
              filteredItem.map((item) => (
                <Combobox.Option
                  className={({ active }) =>
                    `${dropdownStyles.option} ${
                      active ? "bg-gray-100 text-gray-primary" : "text-gray-900"
                    }`
                  }
                  key={item}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-primary" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Dropdown;