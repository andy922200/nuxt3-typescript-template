import { $fetch, FetchOptions } from 'ohmyfetch'

const serviceBasicSettings:FetchOptions = {
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    retry: 1,
    onRequest: ({ options }) => {
        options.headers = {
            ...serviceBasicSettings.headers,
            ...options.headers
        } as Record<string, string>

        // if (!options.headers.permission?.includes('get-demo')) {
        //     throw new Error('Test Permission Error')
        // }
    },
    onRequestError: () => {
        // console.log('config on Req Error', req)
    },
    onResponse: () => {
        // console.log('config on Res', res)
    },
    onResponseError: () => {
        // console.log('config on Res Error', res)
    }
}

export const createFetchService = ({ settings }:{ settings: FetchOptions & Record<'moduleName', string>}) => {
    if (!settings?.moduleName) { throw new Error('Please enter api module name') }
    const { moduleName } = settings

    const serviceSettings = {
        ...serviceBasicSettings,
        ...settings,
        baseURL: `${import.meta.env.VITE_API_DOMAIN || ''}${import.meta.env.VITE_API_PREFIX}/${moduleName}`
    }

    const service = $fetch.create(serviceSettings)
    return service
}
