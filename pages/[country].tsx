import type { NextPage } from 'next/types'
import { formatStrArr } from '../utils/helpers'
import toFullName from '../utils/country-name-cache'
import type { CountryAPI } from '../utils/types'
import Link from 'next/link'
import Head from 'next/head'
import { BsArrowLeft } from 'react-icons/bs'

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()

  const paths = data.map((c: CountryAPI) => ({
    params: { country: '' + c.cca3 },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const code = context.params.country
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  const data = (await res.json())[0]

  return {
    props: { country: data },
  }
}

interface Props {
  country: CountryAPI
}

const country: NextPage<Props> = ({ country }) => {
  console.log(country)

  return (
    <>
      <Head>
        <title>{'FEM | ' + country.name.common}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="flags, countries" />
        <link rel="icon" href={country.flags.svg} />
      </Head>
      <div className="relative grid place-content-center min-h-screen p-5 pb-10">
        <Link href="/">
          <a className="absolute z-50 top-5 sm:left-16 left-5 flex items-center bg-white dark:bg-darkBlue rounded shadow py-1 px-5 gap-2">
            <BsArrowLeft />
            <p>Back</p>
          </a>
        </Link>

        <div className="flex flex-col dtl:flex-row items-center gap-16">
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="w-full dtlsm:w-[600px] mt-8"
          />
          <div className="[&_span]:flex [&_span]:gap-2 max-w-[600px] -mb-[6rem] sm:mt-0">
            <h2 className="text-3xl font-bold">{country.name.common}</h2>
            <div className="flex flex-col dtlsm:flex-row items-start gap-14 justify-between my-8 [&>div]:space-y-2">
              <div>
                <span>
                  <p className="font-bold">Native Name: </p>
                  <p className="dark:text-white/80">
                    {'nativeName' in country.name
                      ? Object.values(country.name.nativeName)[0]['common']
                      : 'undefined'}
                  </p>
                </span>
                <span>
                  <p className="font-bold">Population: </p>
                  <p className="dark:text-white/80">{country.population.toLocaleString('en-US')}</p>
                </span>
                <span>
                  <p className="font-bold">Region: </p>
                  <p className="dark:text-white/80">{country.region}</p>
                </span>
                <span>
                  <p className="font-bold">Sub Region: </p>
                  <p className="dark:text-white/80">{country.subregion}</p>
                </span>
                <span>
                  <p className="font-bold">Capital: </p>
                  <p className="dark:text-white/80">{formatStrArr(country?.capital)}</p>
                </span>
              </div>
              <div>
                <span>
                  <p className="font-bold">Top Level Domain: </p>
                  <p className="dark:text-white/80">{formatStrArr(country.tld)}</p>
                </span>
                <span>
                  <p className="font-bold">Currencies: </p>
                  <p className="dark:text-white/80">
                    {'currencies' in country
                      ? Object?.values(country.currencies)[0]['name']
                      : 'undefined'}
                  </p>
                </span>
                <span>
                  <p className="font-bold">Languages: </p>
                  <p className="dark:text-white/80">
                    {'languages' in country
                      ? formatStrArr(Object?.values(country.languages))
                      : 'undefined'}
                  </p>
                </span>
              </div>
            </div>
            <span className="items-center flex-wrap h-max">
              <p className="font-bold w-full dtl:w-fit">Border Countries:</p>
              {country?.borders?.map((b, i) => (
                <Link key={i} href={`/${b}`}>
                  <div className="bg-white dark:bg-darkBlue px-4 py-2 rounded shadow cursor-pointer">
                    {toFullName[b]}
                  </div>
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default country
