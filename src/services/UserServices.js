import * as httpRequest from '~/utils/httpRequest';

export const loginService = async (email, password) => {
    try {
        const res = await httpRequest.post('auth/login', {
            email: email,
            password: password,
        });
        return res;
    } catch (error) {
        console.log('errorLogin: ', error);
    }
};

export const getCurrentUserService = async () => {
    try {
        const res = await httpRequest.get('auth/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log('errorGetCurrent: ', error.message);
    }
};

export const RegisterService = async (email, password) => {
    try {
        const res = await httpRequest.post(
            'auth/register',
            {
                type: 'email',
                email: email,
                password: password,
            },
            {},
        );
        return res;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};
