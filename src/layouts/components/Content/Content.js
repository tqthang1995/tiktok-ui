import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Content.module.scss';
import VideoItem from '~/components/VideoItem';
import VideoInfoOverlay from '~/components/VideoInfoOverlay';

const cx = classNames.bind(styles);

function Content({ data }) {
    console.log('DataVideo:', data);
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => (
                <div key={item.id} className={cx('video-item')}>
                    <VideoInfoOverlay item={item} />
                    <VideoItem idVideo={item.id} uuidVideo={item.uuid} item={item}>
                        {item.file_url}
                    </VideoItem>
                </div>
            ))}
        </div>
    );
}
Content.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Content;
