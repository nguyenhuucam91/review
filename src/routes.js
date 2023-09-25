const routes = {
    api: {
        user: {
            create: '/user/create',
            list: '/user',
            update: '/user/{id}'
        }
    },

    web: {
        dashboard: '/',
        user: {
            index: '/user'
        }
    }
}

export default routes;