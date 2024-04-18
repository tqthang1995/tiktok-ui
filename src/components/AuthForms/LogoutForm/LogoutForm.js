import classNames from 'classnames/bind';

import styles from './LogoutForm.module.scss';
import Button from '~/components/Button';
import { useContext, useState } from 'react';
import { ModalContext } from '~/components/ModalProvider';
import { LoginContext } from '~/components/LoginProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LogoutForm() {
    const contextModal = useContext(ModalContext);
    const contextLogin = useContext(LoginContext);

    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        console.log('removeItem');
        setLoading(true);
        // await logoutService();
        localStorage.removeItem('token');
        contextLogin.handleDeleteData();
        contextModal.setIsLogout(true);
        setLoading(false);
        setTimeout(() => {
            contextModal.setIsLogout(false);
        }, 2200);
    };

    return (
        <div className={cx('wrapper')} onClick={contextModal.handleHideModalLogOut}>
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <span>Are you sure you want to log out?</span>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button white className={cx('button-cancel')} onClick={contextModal.handleHideModalLogOut}>
                        Cancel
                    </Button>
                    <Button outline className={cx('button-cancel')} onClick={handleLogout}>
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LogoutForm;
