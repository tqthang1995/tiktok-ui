import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('following-accounts')}>{label}</h2>

            <AccountItem />
            <button className={cx('following-see-all')}>
                <p className={cx('more-btn')}>See more</p>
            </button>
        </div>
    );
}

FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
