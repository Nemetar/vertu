import type { App, Component } from 'vue';

const layoutModules = import.meta.glob('./*.vue');

export default (app: App): void => {
  Object.entries(layoutModules).forEach(async ([path, layoutImport]) => {
    const layoutModule = (await layoutImport()) as { default: Component };
    const layoutName = path.split('/').pop()?.replace('.vue', '');
    if (layoutName && layoutModule.default) {
      app.component(layoutName, layoutModule.default);
    }
  });
};
