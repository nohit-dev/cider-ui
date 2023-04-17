# Storybook + PostCSS + TailwindCSS

<br/>

## Folder Structure 
<hr/>
<br/>

```files
├── .storybook/
│   ├── main.js
│   ├── preview.js
│── public/
│── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   │   ├── Button.js
│   │   │   │   ├── Button.stories.js
│   │   ├── styles/
│   │   │   ├── main.css
│   │   │   ├── tailwind.css
│   │   └── index.js
├── ...
```

<br />

## Create a new React project and install TailwindCSS
<hr/>

1. Create a new project using the ```create-react-app``` command:

	```bash
	npx create-react-app storybook-postcss-tailwind
	```
<br />


2. Install TailwindCSS.

	```bash
	npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
	```
<br />

-  Inside ```tailwind.css``` file, add the following line:

	```css
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	```
<br />
<br />

3. Create ```tailwind.config.js``` with npx. 

	```--full``` option scaffold file that matches the default configuration file that Tailwind uses internally.

	```bash
	npx tailwindcss init --full
	```
<br />

- Inside ```tailwind.config.js``` file, add the following line inside ```purge:[]```:

	```js
	"./src/**/*.{js,ts,jsx,tsx}"}
	```
<br />

4. Install postcss-cli and create ```postcss.config.js``` file.

	```bash
	npm install -D postcss-cli
	```
	<br />

+ Inside postcss.config.js, add the following:

	```js
	module.exports = {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	};
	```

<br />
<br />

## Install Storybook and create a new component
<hr/>
<br />

1. Initialize Storybook with the following command:

	```bash
	npx sb init
	```
<br />

2. Create sample component ```src/lib/components/Button/Button.js```, with tailwindcss
<br />

	```js
	import React from ‘react’
	import PropTypes from 'prop-types'
	
	const Button = ({ label }) => {

		return (
			<div>

				<button 
				className='bg-red-500 text-white text-xl py-4 px-8 rounded-md'>{label}</button>

			</div>
		)
	};
	
	Button.propTypes = {
	label: PropTypes.string.isRequired
	};
	
	Button.defaultProps = {
	label: 'Button'
	};
	
	export default Button
	```
<br />

3. Create ```src/lib/components/Button/Button.stories.js``` with the following content:
<br />

	```js
	import React from 'react';
	import Button from './Button'
	
	export default {
		title: 'Example/Button',
		component: Button,
	};
	
	const Template = (args) => <Button {...args} />

	
	export const Default = Template.bind({})
	Default.args = {
		label: 'Button'
	};
	```
<br />


4. Inside ```src/lib/index.js```, add the following line:
<br />

	```js
	import './styles/main.css';
	import Button from './lib/components/Button/Button'
	
	export { 
		Button 
	};
	```
<br />
<br />

## Configure ```package.json``` and install additional dependencies
<hr/>
<br />

-  Install additional dev dependencies:
<br />

	```bash
	npm i -D cross-env @babel/cli @babel/preset-env @babel/preset-react 
	```
<br />

- Create ```babel.config.js``` file:
<br />

	```js
	module.exports = function (api) {
	api.cache(true);

	const presets = [ "@babel/preset-env", "@babel/preset-react" ];
	const plugins = [ "macros" ];

		return {
			presets,
			plugins
		};
	}
	```
<br />

-  To avoid any React conflict, you can move the following React dependencies to a peer dependency:
<br />

	```js
	"peerDependencies": {
	"react": "^17.0.2",
	"react-dom": "^17.0.2",
	"react-scripts": "4.0.3"
  	}
  	```
<br />

1. Inside ```package.json```, add the following scripts for  TailwindCSS:
<br />

	```js
	"scripts": {
		"build:tailwind": "postcss src/lib/styles/tailwind.css -o src/lib/styles/main.css",
    	"build:tailwind-prod": "cross-env NODE_ENV=production postcss src/lib/styles/tailwind.css -o src/lib/styles/main.css"
	},
	```
<br />

2. To prepare for production we need to add the following script at the top of ```package.json```:
<br />

	```js
	"private": true, // change to false to make the project public
	"main": "dist/index.js",
	"module": "dist/index.js",
	"files": [
		"dist",
		"README.md"
	],
	```
<br />

- Still inside ```package.json```, add the following under ```scripts```:
<br />

	```js
	"scripts": {
		"clean": "rimraf dist",
   		"compile": "npm run clean && cross-env NODE_ENV=production babel src/lib/ --out-dir dist --copy-files"
	},
	```
<br />
<br />

## Building for production and Publishing to ```npm```
<hr/>
<br />

1. Build tailwindcss for production:
<br />

	```bash
	npm run build:tailwind-prod
	```
<br />

2. Compile components for production:
<br />

	```bash
	npm run compile
	```
<br />

3. If you don't have a ```npm``` account, create one.
<br />
<br />
2. Execute the following command:
<br />

	```bash
	npm login
	```
<br />

4. Execute the following command:
<br />

	```bash
	npm publish
	```
<br />

## Conclusion
<hr/>
<br />

NPM is a great tool for creating and publishing your own packages. Now you can use TailwindCSS with your own components. Creating your own components library is a great way to learn more about React and TailwindCSS, and you can use it for next projects as well. Storybook is a great tool for creating and testing components. You can use it for next projects as well. 
<br />
Improvements:
<br />
- Add a new components
<br />
- Create stories for components
<br />
- Create test cases for components
<br />

## References
<hr/>
<br />

- [TailwindCSS](https://tailwindcss.com/)
<br />
- [Storybook](https://storybook.js.org/)
<br />
- [React](https://reactjs.org/)
<br />
- [NPM](https://www.npmjs.com/)
<br />
<br />

### License
<hr/>
<br />

	Crafted with ❤️ by [Minja]
		
