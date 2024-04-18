import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import classNames from 'classnames/bind';
import {
    ExploreIcon,
    ExploreIconActive,
    FollowingIcon,
    FollowingIconActive,
    FriendsIcon,
    FriendsIconActive,
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';
import FollowingAccounts from './FollowingAccounts';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon height="2.4rem" />}
                    activeIcon={<FollowingIconActive height="2.4rem" />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<FriendsIcon />}
                    activeIcon={<FriendsIconActive />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreIconActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />

                <FollowingAccounts label="Following accounts" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
