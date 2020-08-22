module.exports = {
  name: 'dummy',
  setup: plugin => {
    console.log(plugin.config.message || 'Dummy module installed!')
  }
}
