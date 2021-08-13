// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    'src/css': '/css',
    '_site': '/',
  },
  plugins: [
    /* ... */
    [
    '@snowpack/plugin-postcss',
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch'
      },
    ],
  ],
  packageOptions: {
    /* ... */
    source: 'remote'
  },
  devOptions: {
    /* ... */
    tailwindConfig: './tailwind.config',
    out: "build"
  },
  buildOptions: {
    /* ... */
    out: "build"
  },
};
