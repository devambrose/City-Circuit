const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Projects\\node\\money-app\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Projects\\node\\money-app\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Projects\\node\\money-app\\src\\pages\\index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("D:\\Projects\\node\\money-app\\src\\pages\\using-typescript.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("D:\\Projects\\node\\money-app\\src\\templates\\blog-post.js")))
}

