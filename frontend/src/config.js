const dev ={
    apiHost: 'http://localhost:3300'
};

const prod = {
    apiHost: 'http://ec2-54-237-103-28.compute-1.amazonaws.com:3300'
};

const config = process.env.NODE_ENV === 'production'
    ? prod
    : dev;

export default {
    ...config
};