import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title:       'The Message Title',
  text:        'The message text',
  html:        '<p>The message text</p>',
  createdAt:   new Date(),
  state:       'draft',
  pushState:   null,
  type:        'text_message',
  poster:      null,
  localTime:   false,
  deviceCount: 999

  // publishedAt: DS.attr('date'),

  // publishAt:   DS.attr('time-with-zone'),
  // unpublishAt: DS.attr('time-with-zone'),

  
});
