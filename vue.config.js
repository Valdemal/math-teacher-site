const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: `/math-teacher-site/`,
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(docx|doc|pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
      ],
    },
  }
})
