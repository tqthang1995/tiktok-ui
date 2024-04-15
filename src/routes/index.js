import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/:nickname', component: Profile, layout: HeaderOnly },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
