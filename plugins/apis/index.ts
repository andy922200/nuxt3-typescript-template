import { demoApis } from './modules/demo'

export default defineNuxtPlugin(() => {
    const apiModules = {
        demo: demoApis
    }

    return {
        provide: {
            apis: apiModules
        }
    }
})
