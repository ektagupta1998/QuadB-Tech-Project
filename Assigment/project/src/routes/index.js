
import { useRoutes } from 'react-router-dom'
import Show from '../components/Show';
import Listing from '../components/Listing';

export default function Router() {
    return useRoutes([
        {
            path: 'show',
            element: <Show />
        },
        {
            path: 'listing',
            element: <Listing />
        },
    ])
}