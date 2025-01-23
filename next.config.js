module.exports = {
  swcMinify: false,
  reactStrictMode: true,
  optimizeFonts: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
      config.resolve.alias.canvas = false;
    }

    return config;
  },
  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },
  experimental: {
    images: {
      allowFutureImage: true,
      formats: ['image/avif', 'image/webp'],
    },
  },
};
