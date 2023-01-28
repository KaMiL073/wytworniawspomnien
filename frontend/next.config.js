// module.exports = (phase, { defaultConfig }) => ({
module.exports = () => ({
  compress: true,
  // images: {
  //   domains: ['directus'],
  //   loader: 'imgix',
  //   path: '/'
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    assetsPath: 'http://172.21.208.1/backend/assets/',
  },
});
