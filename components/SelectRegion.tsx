import { Menu } from '@headlessui/react'
import type { Dispatch } from 'react';
import { IoIosArrowDown as Arrow } from "react-icons/io";
import type { CountryAPI } from '../utils/types';

interface Props {
  setCountries: Dispatch<CountryAPI[]>
}

const SelectRegion: React.FC<Props> = ({ setCountries }) => {
  const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const selectRegion = async (region: string) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital,cca3`)
    const data = await res.json()
  
    setCountries(data)
  }

  return (
    <div className="relative self-start">
      <Menu>
        <Menu.Button className="bg-white dark:bg-darkBlue px-4 h-[47.97px] rounded-md shadow flex items-center gap-8 w-max">
          <p>Filter by Region</p>
          <Arrow />
        </Menu.Button>
        <Menu.Items className="flex flex-col bg-white dark:bg-darkBlue w-[192.01px] absolute top-[52px] py-2 rounded shadow">
          {options?.map((opt, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <button
                  className={`${active && 'dark:bg-[#394b5b] bg-zinc-200/50'} py-[.15rem] text-left pl-4`}
                  onClick={() => selectRegion(opt)}
                >
                  {opt}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default SelectRegion