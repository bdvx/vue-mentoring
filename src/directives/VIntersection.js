export default {
  mounted(el, binding) {
    const options = {
      root: null,
      threshold: 0.5,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        console.log(el, binding);
        binding.value.showImage();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: 'intersection',
};
