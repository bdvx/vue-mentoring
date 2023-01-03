import { createApp, Directive } from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';
import directives from './directives';

const app = createApp(App);
directives.forEach((directive) => {
  app.directive(directive.name, directive as Directive);
});
app.use(store);
// app.use(router);
app.mount('#app');
