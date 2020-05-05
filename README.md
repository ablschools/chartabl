# chartabl
Helpers for our data visualizations

To add `chartable.js` to your project, include it in your project with a script tag.

```
  <script src="https://ablschools.github.io/chartabl/chartabl.min.js"></script>
```

<h2>Making Changes</h2>

To make changes to this repository, please open a Pull Request. 

<h4>Minification</h4>
If you are modifying javascript, make sure to update the minified version of the javascript file as well. 
We use [UglifyJS](https://github.com/mishoo/UglifyJS). You can then run the following command from the project directory.

```
uglifyjs --output chartabl.min.js --compress --mangle -- chartabl.js
```
