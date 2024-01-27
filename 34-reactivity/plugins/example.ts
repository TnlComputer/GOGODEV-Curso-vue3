export default {
  install: (app, options) => {
    app.config.globalProperties.$count = () => 0,
    app.config.globalProperties.$saySomething = () => alert(options.message)
  }
}