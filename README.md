# DheeInvites

A hand-crafted, single-file digital birthday invitation for Dhrithi's 2nd birthday.

## About

DheeInvites is a bespoke digital invitation built as a multi-page card experience. It follows a Finnish midsummer forest theme — forest greens, excavator yellow, panda black & white, and wildflower accents — bringing Dhrithi's personality to life for every guest.

The invite spans three pages:

- **Page 1 — The Invite** — party details, date, time, and venue
- **Page 2 — Meet Dhrithi** — a story-style peek into a day in her life
- **Page 3 — The Family** — the people behind the celebration

## Tech Stack

| Layer | Detail |
|---|---|
| Markup | HTML5 (single file) |
| Styling | Vanilla CSS with custom properties, embedded in `<style>` |
| Illustrations | Inline SVG (scene, characters, folk borders) |
| Animations | CSS keyframe animations |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Media | MP4 video and JPG/MOV photos in `media/` |

No build tools, no frameworks, no dependencies beyond a Google Fonts CDN request.

## Project Structure

```
DheeInvites/
├── index.html   # entire app — markup, styles, SVG, and scripts
├── media/       # photos and video clips used in the invite
└── README.md
```
