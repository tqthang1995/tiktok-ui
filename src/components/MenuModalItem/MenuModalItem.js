import classNames from 'classnames/bind';
import styles from './MenuModalItem.module.scss';
import { useContext } from 'react';
import { ModalContext } from '../ModalProvider';
import LoginAuthForm from '../AuthForms/UserAuthForm/LoginAuthForm';
import LoginForm from '../AuthForms/LoginForm';
import { XIcon } from '../Icons';

const cx = classNames.bind(styles);

function MenuModalItem() {
    const context = useContext(ModalContext);

    console.log('menu', context);

    return (
        <div className={cx('modal-mask')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        {context.typeForm === 'loginform' && <LoginForm />}
                        {context.typeForm === 'login' && <LoginAuthForm />}
                    </div>

                    <div className={cx('keep-stable')}>
                        <div className={cx('policy')}>
                            {context.typeForm === 'login' && (
                                <p>
                                    By continuing, you agree to TikTok’s{' '}
                                    <a href="https://www.tiktok.com/legal/terms-of-use?lang=en">Terms of Service</a> and
                                    confirm that you have read TikTok’s{' '}
                                    <a href="https://www.tiktok.com/legal/privacy-policy?lang=en">Privacy Policy.</a>
                                </p>
                            )}
                        </div>
                        {context.typeForm === 'login' || context.typeForm === 'loginform' ? (
                            <div className={cx('footer')}>
                                Don't have an account?
                                <span onClick={() => context.handleChangeForm('register')}>Sign up</span>
                            </div>
                        ) : (
                            <div className={cx('footer')}>
                                Already have an account?
                                <span
                                    onClick={() => {
                                        context.handleChangeForm('login');
                                    }}
                                >
                                    Log in
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className={cx('close-btn')}
                    onClick={() => {
                        context.handleChangeForm('login');
                        context.handleHideModal();
                    }}
                >
                    <XIcon />
                </div>
            </div>
        </div>
    );
}

export default MenuModalItem;
