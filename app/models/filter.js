import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  notFilter: DS.attr('boolean', { defaultValue: false }),
  criteria:  DS.attr({ defaultValue: () => { return []; } }),

  audience: DS.belongsTo()
});
