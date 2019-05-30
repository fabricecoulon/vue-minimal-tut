 import HeroesList from './HeroesList.js';

export default {
  name: 'App',
  components: {
    HeroesList,  // This is our component
  },
  data() {
    return {
      message2: "Hello World #2",
      heroes: [ "Iron Man", "The Hulk", "Thor" ]
    }
  },
  template: `
    <div>
      <input id="input2"
             type="text"
             placeholder="Write something here"
             v-model="message2"
      />
      <p>This is a vue template message: '{{ message2 }}'</p>
      <!--
      This is a Vue component called 'heroes-list'
      -->
      <heroes-list v-bind:heroes="heroes">A slot message: insert a list of heroes below</heroes-list>
    </div>
  `
};
