/**
 * event.config.js — DheeInvites template configuration
 *
 * Edit this file to customise the invite for any event.
 * The HTML reads all event-specific values from here at runtime,
 * so the markup itself never needs to change between events.
 */

const EVENT_CONFIG = {
  child: {
    name: 'Dhrithi',
    age: 2,
  },
  event: {
    /** Displayed date string */
    date: 'July 4, 2026',
    /** Displayed time range */
    time: '17:00 – 19:00',
    /** HTML allowed — use <br> for line breaks */
    venue: 'Jussilankulma 1 B7,<br>33580 Tampere',
    /** Google Maps or any map URL */
    mapsUrl: 'https://maps.google.com/?q=Jussilankulma+1+B7+Tampere+Finland',
  },
  rsvp: {
    /** RSVP cut-off shown in the invite footer */
    deadline: 'June 28, 2026',
  },
};
