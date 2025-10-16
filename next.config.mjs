import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        // DataTable: 'datatables.net'
      })
    );
    return config;
  },

  sassOptions: {
    includePaths: ['scss'],
  },

  // ✅ Add this section for proxying API requests to FastAPI
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://mynapi.onrender.com/:path*',
        // destination: 'http://127.0.0.1:8000/:path*', 
      },
    ];
  },
};

export default nextConfig;
