import Toggle from '../components/Toggle/Toggle.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Toggle',
  component: Toggle,
    args: {
        firstOption: "TITLE",
        secondOption: "GENRE",
        toggleName: "search",
    }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Toggle },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Toggle v-bind="args" />',
});

export const Main = Template.bind({});
