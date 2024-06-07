/** @type {import('next').NextConfig} */

/* const withNextIntl = require('next-intl/plugin') */
const nextConfig = {


    crossOrigin: 'anonymous',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                // You can add these as well
                // port: '',
                // pathname: 'arifscloud/image/upload/**',
            },
        ],
    },


};

/* export default withNextIntl(nextConfig); */
module.exports = nextConfig