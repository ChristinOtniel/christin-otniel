/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/christin-otniel' : '',
};



module.exports = nextConfig;
