import MovieDescription from '../components/MovieDescription/MovieDescription.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/MovieDescription',
  component: MovieDescription,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MovieDescription },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<MovieDescription
                title="Title"
                genre="Genre"
                year="2004"
                image="reservoir.jpg"
                key="title"
                description="description"
                length="150"
            />`,
});

export const Main = Template.bind({});