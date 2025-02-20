import * as httpRequest from '~/utils/httpRequest';

export const LikeVideoService = async (idVideo) => {
    try {
        const res = await httpRequest.post(
            'videos/' + idVideo + '/like',
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            },
        );
        console.log('successLikeVideo: ', res);
        return res.data;
    } catch (error) {
        console.log('errorLikeVideo: ', error);
    }
};

export const UnLikeVideoService = async (idVideo) => {
    try {
        const res = await httpRequest.post(
            'videos/' + idVideo + '/unlike',
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            },
        );
        console.log('successUnLikeVideo: ', res);
        return res.data;
    } catch (error) {
        console.log('errorUnLikeVideo: ', error);
    }
};

export const postVideoService = async (formData) => {
    try {
        const res = await httpRequest.post('videos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log('successPostVideo: ', res);
        return res;
    } catch (error) {
        console.log('errorPostVideo: ', error);
    }
};
