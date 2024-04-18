import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive delay={[800, 0]} appendTo={() => document.body} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <Image className={cx('avatar')} src="" alt=""></Image>

                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>Thang.Tran</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Thang Tran Quoc</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
