import React from 'react'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ReactStaticFavicons from '@kuroku/react-static-favicons'

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

const reactStaticFavicons = new ReactStaticFavicons({
  // string: directory where the image files are written
  outputDir: path.join(__dirname, 'dist'),

  // string: the source image
  inputFile: path.join(__dirname, 'favicon.png'),

  // object: the configuration passed directory to favicons
  configuration: {
    icons: {
      favicons: true,
      // other favicons configuration
    },
  },
})

export default {
  renderToHtml: async (render, C, meta) => {
    meta.faviconsElements = await reactStaticFavicons.render()
    return render(<C />)
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126625261-1" />
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-126625261-1');
        </script>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {renderMeta.faviconsElements}
        <title>CastQ – Find your next podcast guest</title>
        <link rel="stylesheet" href="https://use.typekit.net/eme3hjr.css" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    config.resolve.alias = typescriptWebpackPaths.resolve.alias

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    config.plugins.push(new ExtractTextPlugin('styles.css'))
    return config
  },
}
