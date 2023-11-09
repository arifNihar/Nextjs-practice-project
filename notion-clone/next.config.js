/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: [
            "files.edgestore.dev"
        ]
    }
}

module.exports = nextConfig
