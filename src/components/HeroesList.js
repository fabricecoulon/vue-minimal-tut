export default {
  name: 'HeroesList',
  props: [
    'heroes',
  ],
  template: `
    <div>
      <h1><slot></slot></h1>
      <ul>
        <li v-for="hero in heroes">{{ hero }}</li>
      </ul>
    </div>
  `
}
