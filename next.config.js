module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'csimg.nyc3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};
