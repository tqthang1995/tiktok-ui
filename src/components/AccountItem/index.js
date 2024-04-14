import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/64d4afc23ecb61f229e69dbe63cd5bec~c5_300x300.webp?lk3s=a5d48078&x-expires=1713250800&x-signature=xP7w7X6fwuucVzRNEiMe1i90he8%3D"
                alt="file img"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>thangtq14</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('nickname')}>Chuyen Cua Gau Voi</span>
            </div>
        </div>
    );
}

export default AccountItem;
