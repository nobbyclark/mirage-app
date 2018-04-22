import { ActiveModelSerializer } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  serialize(object, request) {
    // This is how to call super, as Mirage borrows [Backbone's implementation of extend](http://backbonejs.org/#Model-extend)
    let json = ActiveModelSerializer.prototype.serialize.apply(this, arguments);

    let getLinks = function(app) {
      app.links = {
        audiences: `/apps/${app.id}/audiences`
      };
    };

    if (json.apps) {
      json.apps.forEach(app => getLinks(app));
    } else if (json.app) {
      getLinks(json.app);
    }

    return json;
  }
})