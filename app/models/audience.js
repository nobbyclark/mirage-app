import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  app:          DS.belongsTo('app'),
  facetFilters: DS.hasMany('filter')
});
