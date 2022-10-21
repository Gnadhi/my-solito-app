module.exports = {
  "stories": [
    "../../../packages/app/design/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions", 
    {
       name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: [
          "@gorhom/bottom-sheet",
          "@gorhom/portal",
          "moti",
          "zeego",
          "nativewind",
          "@showtime-xyz",
        ],
        babelPlugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin",
        ],
      },
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
