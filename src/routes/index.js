import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';

import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.profile, component: Profile, layout: HeaderOnly },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
