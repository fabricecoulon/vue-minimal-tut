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
