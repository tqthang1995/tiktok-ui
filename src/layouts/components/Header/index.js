import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faLightbulb,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { LoginContext } from '~/components/LoginProvider';
import { ModalContext } from '~/components/ModalProvider/ModalProvider';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
        to: '/live-creator',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@thangtq14',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const handleMenuOnchange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
        }
    };

    const contextModal = useContext(ModalContext);
    const contextLogin = useContext(LoginContext);

    const userMenuTab = contextLogin.data ? userMenu : MENU_ITEMS;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="logo clone from TikTok" />
                </Link>
                <Search></Search>
                <div className={cx('action')}>
                    {contextLogin.data ? (
                        <>
                            <Button
                                className={cx('upload')}
                                to={config.routes.upload}
                                outlineSecondary
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                className={cx('upload')}
                                outlineSecondary
                                leftIcon={<FontAwesomeIcon icon={faPlus} onClick={contextModal.handleShowModal} />}
                            >
                                Upload
                            </Button>
                            <Button primary onClick={contextModal.handleShowModal}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={userMenuTab} hideOnClick={false} onChange={handleMenuOnchange}>
                        {contextLogin.data ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="nguyen van A"
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/64d4afc23ecb61f229e69dbe63cd5bec~c5_300x300.webp?lk3s=a5d48078&x-expires=1713250800&x-signature=xP7w7X6fwuucVzRNEiMe1i90he8%3D"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
