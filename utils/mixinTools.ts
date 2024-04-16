export const generateCustomHeader = function ({
  pageName,
}: {
  pageName: string
}): Record<string, any> {
  const newObj = {
    titleTemplate: `%s - ${pageName}`,
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: `${pageName}`,
      },
    ],
  }
  return newObj
}

export const getLanguage = (): string => {
  let language = ''
  if (typeof window !== 'undefined') {
    language = window.navigator.language.toLowerCase()
  }
  return language
}
