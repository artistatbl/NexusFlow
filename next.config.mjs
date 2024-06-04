/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ucarecdn.com',
				// port: '',
				// pathname: '/u/**',
			},
		],
	}
};

export default nextConfig;
