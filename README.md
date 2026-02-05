# Weather (React)

Simple React weather dashboard built with OpenWeather APIs.

**Overview**
- Small dashboard showing current weather cards and an 8-day forecast.
- Components live in `src/components` and styles in `src/styles`.

**Prerequisites**
- Node.js (16+ recommended)
- npm (or yarn)

**Setup**
1. Install dependencies:

```bash
npm install
```

2. Provide your OpenWeather API key using an environment variable. Create a file named `.env` (gitignored) in the project root with:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

Note: The repo currently contains API keys inline in some files. For security, replace those literal keys with `process.env.REACT_APP_WEATHER_API_KEY` usage and remove the committed keys.

**Run (development)**

```bash
npm start
```

**Build (production)**

```bash
npm run build
```

**Project structure (important files)**
- `src/index.js` — application entry; renders `App`.
- `src/components/App.jsx` — top-level composition and central shared state (city, lat, lon, cards).
- `src/components/Hero.jsx` — search UI; calls `onSearch(searchTerm)` provided by `App`.
- `src/components/Weather-cards.jsx` — presentational list of weather cards (receives `cards` from `App`).
- `src/components/Days-forecast.jsx` — 8-day forecast; accepts `lat` and `lon` props and fetches forecast when coords are provided.
- Other components: `Header`, `Footer`, `Chart`, `Detailed-weather-cards`, `Pets-news`, `Natural-slider`.
- Styles: `src/styles/*` and `src/index.css`.

*Readme by Copilot
