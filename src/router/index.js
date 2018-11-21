export default [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'home',
        meta: {
            tilte: '主页'
        },
        children: [
            {
                path
            }
        ]
    }
]