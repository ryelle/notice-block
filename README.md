# Notice Block

A demo block plugin for [WordCamp Montclair](https://montclair.wordcamp.org/2022/).

This plugin has 5 branches, for each step in my presentation.

The main branch is the initial block, what we get from @wordpress/create-block with a little cleanup.

0. `initial-block` - The sketch of the block, get basic HTML structure and styles in place.
1. `step-1-type` - Add the `type` attribute, set an icon and class name based on the selected type
2. `step-2-rich-text` - Add the `content` attribute, which is a RichText component for live preview as you edit
3. `step-3-block-supports` - Add some configuration to opt-in to some style controls like font size & spacing
4. `step-4-block-controls` - Move the type control from the sidebar to the block toolbar
5. `step-5-block-variations` - Add block variations for each type, so it's easier to toggle between them

## Development

The files in this repo (and in each branch) are only the source files. You will need to build them to try out the plugin yourself. Make sure [node & npm](https://nodejs.org/en/) are installed first. I also recommend [nvm](https://github.com/nvm-sh/nvm) if you work with multiple projects.

```bash
$ npm install
$ npm run build
```

You'll see a lot of code, ending with `webpack 5.73.0 compiled successfully in 1107 ms`. You can open up the `build` folder to see that there are files there.

Note: This is just a plugin, so you'll need to put it inside an existing WordPress environment. If you need to create a local development environment, I recommend `wp-env`. Here are some [docs to get `wp-env` set up](https://developer.wordpress.org/block-editor/getting-started/devenv/#wordpress-development-site).
