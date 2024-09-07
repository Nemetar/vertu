import { App, Component } from 'vue';

export default function registerComponents(app: App) {
  const components = import.meta.glob('./**/*.vue', { eager: true });

  Object.entries(components).forEach(([path, definition]) => {
    const componentName = path
      .split('/')
      .pop()!
      .replace(/\.\w+$/, '');

    if ((definition as { default: Component }).default) {
      app.component(componentName, (definition as { default: Component }).default);
    }
  });
}
