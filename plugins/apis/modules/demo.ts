import { createFetchService } from '../core'

const demoApiService = createFetchService({
    settings: {
        moduleName: 'todos'
    }
})

export const demoApis = {
    getADemo ({ id }: { id:string }) {
        return demoApiService(`/${id}`, { method: 'GET', headers: { permission: 'get-demo' } })
    },
    postDemo ({ data }:{ data:Record<string, any> }) {
        const payload = JSON.stringify(data)
        return demoApiService('/', { method: 'POST', body: payload })
    },
    putDemo ({ data, id }:{ data:Record<string, any>, id: string }) {
        const payload = JSON.stringify(data)
        return demoApiService(`/${id}`, { method: 'PUT', body: payload })
    },
    patchDemo ({ data, id }:{data:Record<string, any>, id: string }) {
        const payload = JSON.stringify(data)
        return demoApiService(`/${id}`, { method: 'PATCH', body: payload })
    },
    deleteDemo ({ id }:{ id: string }) {
        return demoApiService(`/${id}`, { method: 'DELETE' })
    }
}
