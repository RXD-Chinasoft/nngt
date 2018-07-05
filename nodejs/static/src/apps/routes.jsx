import Kanban from './kanban'
import Dynamic from './chart'
import React from 'react'

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: Kanban,
    },
    {
        path: "/management",
        sidebar: () => <div>Management!</div>
    },
    {
        path: "/chart",
        sidebar: Dynamic
    }
];

export default routes