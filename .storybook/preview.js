import '../src/lib/styles/main.css'
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    parameters: {
      docs: {
        theme: themes.light,
      }
    }
  },
}