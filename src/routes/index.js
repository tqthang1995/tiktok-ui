import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/layouts';

import config from '~/config';
import Live from '~/pages/Live';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.live, component: Live },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.explore, component: Explore },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
