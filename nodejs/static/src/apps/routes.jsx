import Kanban from './kanban'
import Dynamic from './chart'
import Kanbans from './kanbans'
import React from 'react'

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: Kanban,
    },
    {
        path: "/management",
        sidebar: Kanbans
    },
    {
        path: "/chart",
        sidebar: Dynamic
    }
];

export default routes