import dotenv from 'dotenv';
import { nanoid } from 'nanoid';
import path from 'path';

const isNotProd = process.env.NODE_ENV !== 'production';
const baseApi = process.env.BASE_API;

const { parsed: env } = dotenv.config({ path: `./.env.${process.env.APP_ENVIRONMENT}` });

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack(config, { webpack }) {
    const conf = config;

    conf.devtool = isNotProd ? 'eval-source-map' : false;
    conf.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts)x?$/] },
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: false,
              svgo: true,
              dimensions: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        resourceQuery: /url/, // *.svg?url
      },
    );

    conf.resolve.alias = {
      ...conf.resolve.alias,
      react: path.resolve('./node_modules/react'),
    };

    conf.plugins.push(
      new webpack.ProvidePlugin({
        cn: 'classnames',
      }),
    );

    return conf;
  },
  env,
  swcMinify: true,
  crossOrigin: 'anonymous',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${baseApi}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-request-id',
            value: nanoid(36),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
