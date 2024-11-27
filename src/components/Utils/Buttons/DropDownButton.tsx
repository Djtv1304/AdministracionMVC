import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RiArrowDropDownLine } from 'react-icons/ri'

interface MenuOption {
  name: string;
  url: string;
}

interface DropDownButtonProps {
  titleDropDown: string;
  menuOptions: MenuOption[];
}

const DropDownButton: React.FC<DropDownButtonProps> = ({ titleDropDown, menuOptions }) => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md border-gray-300 shadow-sm px-4 py-2 bg-cyan-600 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none ring-1 ring-inset ring-gray-300">
          {titleDropDown}
          <RiArrowDropDownLine aria-hidden='true' className='-mr-1 size-5 text-white' />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {menuOptions.map((option, index) => (
            <MenuItem key={index}>
              {({ focus }) => (
                <a
                  href={option.url}
                  className={`block px-4 py-2 text-sm text-gray-700 ${focus ? 'bg-gray-100 text-gray-900 outline-none' : ''}`}
                >
                  {option.name}
                </a>
              )}
            </MenuItem>
          ))}
  
        </div>
      </MenuItems>
    </Menu>
  )
}

export default DropDownButton;
