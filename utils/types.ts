export interface CountryAPI {
  borders?: string[]
  capital?: string[]
  currencies?: {}
  languages?: {}
  name?: {
    nativeName?: {}
    common?: string
  }
  flags?: {
    svg?: string
  }
  population?: number
  region?: string
  subregion?: string
  tld?: string[]
  cca3?: string
}