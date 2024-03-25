/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
