/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		API_APP_URL: process.env.API_APP_URL
	},
	images: {
		domains: ['localhost']
	},
};

export default nextConfig;
