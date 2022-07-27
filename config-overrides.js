const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");
const rewirePostcss = require("react-app-rewire-postcss");
const px2rem = require("postcss-pxtorem");

module.exports = override(
  // 按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es/components",
    style: false,
  }),
  //路径别名
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  }),
  // px2rem适配的配置
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 3,
        }),
       // 关键:设置px2rem
        // px2rem({
        //   remUnit: 75,
        //   exclude: "/node-modules/i",
        // }),
        // 使用这个才不影响antd 的 UI
        require("postcss-px2rem-exclude")({
          // remUnit 等于 设计稿宽度  750除以10  37.5
          remUnit: 75,
          exclude: /node_modules/i,
        }),
      ],
    });

    // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
    // 全局引入公共样式，使用时候不需再导入
    const loaders = config.module.rules.find((rule) =>
      Array.isArray(rule.oneOf)
    ).oneOf;
    loaders[5].use.push({
      loader: "sass-resources-loader",
      options: {
        resources: path.resolve(__dirname, "./src/common.scss"), //全局引入公共的scss 文件
      },
    });

    return config;
  }
);