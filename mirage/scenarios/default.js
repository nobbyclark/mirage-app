export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  let notification = server.create('notification');
  
  server.create('message', { notifications: [notification] });

  let app = server.create('app');

  let ff1 = server.create('facet-filter', { name: 'Locale' });
  let ff2 = server.create('facet-filter', { name: 'Platform' });

  let audience1 = server.create('audience', { name: 'Test Audience 1', app: app, facetFilters: [ff1] });
  let audience2 = server.create('audience', { name: 'Test Audience 2', app: app, facetFilters: [ff2] });
}
