exports.create = function() {
  var settings = {};

  var servicesAll = [{
      name: 'blog.bazoud.com - index',
      label: 'Olivier Bazoud blog index',
      check: 'http',
      host: 'blog.bazoud.com', 
      port: '80',
      path: '/',
      headers: {
        'Host': 'blog.bazoud.com'
      }
    }, {
      name: 'blog.bazoud.com - healthCheck',
      label: 'Olivier Bazoud blog healthCheck',
      check: 'http',
      host: 'blog.bazoud.com', 
      port: '80',
      path: '/healthCheck'
  }]

  var defaults = {
    title: 'Services Status Dashboard',
    hostname: '127.0.0.1',
    port: 8080,
    client: {
      transports: []
    },
    services: servicesAll,
    serviceInterval: 20000,
    serviceDelay: 500
  };

  return defaults;
};