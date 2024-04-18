import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { ModalContext } from '~/components/ModalProvider';
import MenuModalItem from '~/components/MenuModalItem/MenuModalItem';
import { LoginContext } from '~/components/LoginProvider';
import { getCurrentUserService } from '~/services/UserServices';
import LogoutForm from '~/components/AuthForms/LogoutForm';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const contextModal = useContext(ModalContext);
    const contextLogin = useContext(LoginContext);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                const result = await getCurrentUserService();
                if (result) {
                    contextLogin.handleSetData(result);
                }
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header />
            {contextModal.isLogout && <span className={cx('notify')}>Log out Success</span>}
            {contextLogin.isNotify && <span className={cx('notify')}>Login Success</span>}
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {contextModal.activeLogOut && <LogoutForm />}
            {contextModal.active && <MenuModalItem />}
        </div>
    );
}

export default DefaultLayout;
