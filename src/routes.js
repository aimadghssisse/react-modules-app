import modules from './modules';

const routes = [];
modules.map(module => {
  module.routes.map(item => {
    routes.push(item)
  })
})

export default routes
