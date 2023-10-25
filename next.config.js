/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuration setting to include images from external sources
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'name of the website',
    //             port: 'in case there is a port',
    //             pathname: 'if it follows a special path structure'
    //         }
    //     ]
    // }
    experimental: {
        serverActions: true
    },

}

module.exports = nextConfig
