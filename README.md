# chartabl
Helpers for our data visualizations

To add `chartable.js` to your project, include it in your project with a script tag.

```
  <script src="https://ablschools.github.io/chartabl/chartabl.min.js"></script>
```

<h2>Making Changes</h2>

To make changes to this repository, please open a Pull Request. 

<h4>Prettier</h4>
We use [Prettier](https://prettier.io/) to tighten up our code. You can install with `npm install -g prettier`
To _prettify_ your code before committing, use this command
```
prettier --write chartabl.js
```

<h4>Minification</h4>
If you are modifying javascript, make sure to update the minified version of the javascript file as well. 
We use [UglifyJS](https://github.com/mishoo/UglifyJS). You can then run the following command from the project directory.

```
uglifyjs --output chartabl.min.js --compress --mangle -- chartabl.js
```

<h4>Testing your changes</h4>
Make changes in your text editor of choice in a branch that is *not* `master`. Commit the changes with `git`, and push up the branch using `git push origin your_branch`. 
Update your `script` tag in your development report with

```
  <script src="https://raw.githubusercontent.com/ablschools/chartabl/<your_branch>/chartabl.min.js"></script>
```

And verify the changes work.
