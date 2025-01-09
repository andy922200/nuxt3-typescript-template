import { $fetch, type FetchOptions } from 'ofetch'

const generalFetchSettings: FetchOptions = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  retry: 1,
  onRequest: ({ options }) => {
    options.headers = {
      ...generalFetchSettings.headers,
      ...options.headers,
    }
  },
  onRequestError: () => {
    // console.log('config on Req Error', req)
  },
  onResponse: () => {
    // console.log('config on Res', res)
  },
  onResponseError: () => {
    // console.log('config on Res Error', res)
  },
}

export const useCustomFetch = (settings: FetchOptions) => {
  const serviceSettings = {
    ...generalFetchSettings,
    ...settings,
  }

  const service = $fetch.create(serviceSettings)
  return service
}
