export const formatStrArr = (caps: string[]) =>  caps?.map((c, i) => i != caps.length-1 ? c + ', ' : c).join('')