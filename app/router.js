import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('messages');
  this.route('apps');
  this.route('app', { path: '/apps/:id' });
});

export default Router;
