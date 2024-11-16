/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['redux-persist'],
    images : {
        domains : ['res.cloudinary.com','drive.google.com'],
    }
};

export default nextConfig;
