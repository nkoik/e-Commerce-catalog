export function generateGuid(numberOfCharacters: number = 10): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for (let index = 0; index < numberOfCharacters; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export function formatCardNumber(value: string) {
  return value
    .replace(/\W/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .trim()
}
