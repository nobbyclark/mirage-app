import DS from 'ember-data';

export default DS.Model.extend({
  title:       DS.attr('string', { defaultValue: '' }),
  text:        DS.attr('string'),
  html:        DS.attr('string'),
  createdAt:   DS.attr('date', { defaultValue: () => { return new Date(); } }),
  state:       DS.attr('string', { defaultValue: 'draft' }),
  pushState:   DS.attr('string'),
  type:        DS.attr('string'),
  poster:      DS.attr('string'),
  localTime:   DS.attr('boolean'),
  deviceCount: DS.attr('number'),
  publishedAt: DS.attr('date'),

  // publishAt:   DS.attr('time-with-zone'),
  // unpublishAt: DS.attr('time-with-zone'),

  notifications: DS.hasMany('notification', { inverse: 'message', async: false })
});
