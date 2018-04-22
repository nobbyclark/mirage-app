import DS from 'ember-data';

export default DS.Model.extend({
  createdAt:              DS.attr('date', { defaultValue: function() { return new Date(); } }),
  sentAt:                 DS.attr('date'),
  deviceCount:            DS.attr('number', { defaultValue: 0 }),
  progress:               DS.attr('number', { defaultValue: 0 }),
  state:                  DS.attr('string', { defaultValue: 'awaiting_scheduling' }),
  deactivatedTokensCount: DS.attr('number', { defaultValue: 0 }),
  offset:                 DS.attr('number'),

  message: DS.belongsTo('message', { inverse: 'notifications', async: false }),

  alert:    DS.attr('string'),
  sound:    DS.attr('string'),
  badge:    DS.attr('string'),
  category: DS.attr('string')
});
