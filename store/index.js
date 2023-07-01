
export const state = () => ({
  theme: 'light-theme', // default theme
});

export const mutations = {
  switchTheme(state) {
    state.theme = state.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
  },
};