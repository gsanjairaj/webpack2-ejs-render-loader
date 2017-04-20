# webpack2-ejs-render-loader for webpack

EJS render loader for [webpack](https://webpack.js.org/). Uses [ejs](https://github.com/mde/ejs) function to render templates.
Use this loader in combination with raw-loader.

This is the initial and very simple version. Much more changes are needed and anyone is welcome to make further changes.

## Installation

`npm install webpack2-ejs-render-loader`

## Usage

[Documentation: Using loaders](https://webpack.js.org/concepts/loaders/)

```javascript
 module: {
        rules: [{
            test: /\.ejs$/,
            use: [{
                    loader: 'webpack2-ejs-render-loader',
                    options: { data: { href: '/my/about', Age: '20' } }
                },
                {
                    loader: 'raw-loader'
                }
            ]            
        }]
    }
```
test.ejs

```html

<div>
  <a href="<%= data.href %>">Name</a>
</div>

```
Webpack Output bundle:

```javascript

module.exports = "<div>\n  <a href=\"/my/about\">Name</a>\n</div>\n"


```
Look at the [example](https://github.com/gsanjairaj/webpack2-ejs-render-loader/tree/master/example) provided in the folder - example. Navigate to the example folder and run "npm run build", the webpack bundle will be
created in example/dist/main.bundle.js.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)



