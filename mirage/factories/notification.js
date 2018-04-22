import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  payload: {
    alert: 'The alert',
    badge: '123',
    sound: 'bleep.aiff'
  },
  created_at:   new Date(),
  sent_at:      new Date(),
  device_count: 100,
  progress:     1,
  state:        'scheduled',
  offset:       -13.0,
  deactivated_tokens_count: 0
});
