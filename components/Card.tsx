import { formatStrArr } from "../utils/helpers"
import Link from 'next/link'
import type { CountryAPI } from "../utils/types"

interface Props {
  country: CountryAPI
}

const Card: React.FC<Props> = ({ country }) => {
  return (
    <Link href={`/${country.cca3}`}>
      <div className="w-[280px] bg-white dark:bg-darkBlue rounded-md cursor-pointer overflow-hidden ml-7">
        <div className="h-[180px] bg-cover bg-center" style={{backgroundImage: `url('${country.flags.svg}')`}}></div>
        <div className="p-6 [&>span]:flex [&>span]:gap-2 pb-12">
          <h2 className="text-xl font-bold mb-3">{country.name.common}</h2>
          <span>
            <p className="font-bold">Population: </p>
            <p className="dark:text-white/80 text-veryDarkText">{country.population.toLocaleString('en-US')}</p>
          </span>
          <span>
            <p className="font-bold">Region: </p>
            <p className="dark:text-white/80 text-veryDarkText">{country.region}</p>
          </span>
          <span>
            <p className="font-bold">Capital: </p>
            <p className="dark:text-white/80 text-veryDarkText">{formatStrArr(country?.capital)}</p>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Card