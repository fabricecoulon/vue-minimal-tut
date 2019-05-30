# vue-minimal-tut

The goal of this project is to is to set up a 'Hello World' Vue.js project with
a minimalist procedure with as few dependencies as possible. You only need a `node.js` install, an
internet connection and a web browser with a modern JavaScript support and follow the instructions of this how-to.

# Level 1

## Install `browser-sync`

We have to run a local web server and also
automatically reload the web page when
a change to a file is detected.

`npm install --save-dev browser-sync`

Then, paste this into a `package.json`

```
{
  "scripts": {
    "start": "browser-sync start --server 'src' --files 'src' --single"
  }
}
```


## Create the basic folder structure

Some directories and files are already created during the steps above, the project directory structure should look like this:

```
.
├── node_modules/
├── package.json
├── package-lock.json
└── src/
    ├── components/
    ├── index.html
    └── main.js
```

Then create `src`, `src/components`, `index.html` and `main.js`.


## Edit `src/index.html`

The core of a single page application is `index.html`. Just paste this inside it:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Hello World!</title>
    <!-- This is a development version of Vue.js! -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/main.js" type="module"></script>
  </head>
  <body>
    <h1>Level 1: Testing Vue:</h1>
    <!--
    Show the behaviour of vue with directive 'v-model'
    -->
    <div id="level1">
      <input id="input1"
             type="text"
             placeholder="Write something here"
             v-model="message"
      />
      <p>
        {{ message }}
      </p>
    </div>
    <h1>Level 2: Vue components:</h1>
    <!--
    Show the App component mounted on element #level2
    -->
    <div id="level2">
    </div>
  </body>
</html>
```

As you see in the `html`code above, among other things, `vue.js` and `main.js`
are referenced. `vue.js` will be downloaded by the browser from an open source
content delivery network aka `CDN` and contains the latest Vue version available,
while `main.js` will be edited locally.


## Edit `src/main.js`

Just paste the following content inside `main.js`:

```
// src/main.js

new Vue({
  el: '#level1',
  data: {
    message: 'Hello World'
  }
});

// Import the App
import App from './components/App.js';

new Vue({
  render: h => h(App),
}).$mount(`#level2`);


```

As you see in this `javascript` file, we mount one Vue to the element with the `#level1`
div id and another Vue to `#level2`.


## Start the web server

Now run `npm start`, this will start `browser-sync` and monitor the files under `src` for changes.
Go to `localhost:3000` and check that when you edit the input box, the corresponding
text message in between `{{` and `}}` changes as you type.


# Level 2

Now that you've set up the project we can continue with learning new concepts.
But first, install this development tool which will facilitate working with Vue:


## Download Vue-devtools for your browser

Just search for this extension corresponding to your browser and install it.
Then, go to your browser tab on page `localhost:3000` with the local web server running and open `developer tools`, then `vue`. The `dev-tools` extensions
should show something like `<Root> == $vm0`, try edit the message inside `dev-tool` too, it should also change the data on the web page.

Now, you can also use the `javascript` console directly with the Vue instance `$vm0`:

`$vm0.message = "wow"`

This will also update the input element and the web page text below. Great!


## Create your first Vue component

Look at the js code under `src/components`, it is pretty self-explanatory.
Component `HeroesList` is automatically associated with `heroes-list` in the
template.

Now, with the help of `dev-tools` locate which Vue instance the component `HeroesList` is associated with and in the javascript console type something like:

`$vmX.heroes.push("Spider-Man")`

This will also update the unordered list and add it to the hard-coded list of heroes. Cool!
