import { useContext } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { ModalContext } from '~/components/ModalProvider';
import MenuModalItem from '~/components/MenuModalItem/MenuModalItem';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const contextModal = useContext(ModalContext);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {contextModal.active && <MenuModalItem />}
        </div>
    );
}

export default DefaultLayout;
