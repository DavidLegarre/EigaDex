# EigaDex

A full-stack app for discovering, tracking, and getting recommendations for Japanese media — anime, Japanese films, and Japanese TV dramas.

EigaDex pulls titles from external APIs (MyAnimeList / AniList for anime, The Movie Database for film and TV) and helps you decide what to watch next.

## Features

- **Discover** — browse movies, anime, and TV shows across a unified catalog.
- **Track** — build a personal watchlist: want to watch, watching, finished, dropped.
- **Recommend** — personalized suggestions based on what you have already watched and rated.
- **Japanese media focus** — curated for anime, J-dramas, and Japanese cinema.

## Tech Stack

| Layer      | Technology      |
|------------|-----------------|
| Backend    | Go (stdlib HTTP server) |
| Frontend   | TBD              |
| Data       | External APIs    |

## Architecture

```
Frontend/  ──►  Backend/  ──►  External APIs
 (UI)            (Go API)        (MyAnimeList, AniList, TMDb)
                  │
                  └── local data (watchlist, ratings)
```

The backend serves the frontend's requests, merges results from the external APIs, and stores user-specific state (watchlist, history, ratings) locally. Recommendations are computed server-side from that local state.

## Getting Started

### Prerequisites

- Go 1.26+
- API keys for the external services you want to use

### Run

```sh
# from the Backend directory
go run .
```

The server will start and listen on its configured port.

### Configuration

External API keys are read from the environment (`.env` file, gitignored).

## Project Layout

```
Backend/        Go backend
Frontend/       Web frontend (to be built)
resources/      Design system and assets
AGENTS.md       Agent/learning notes for this repo
```

## Roadmap

- [ ] Compiling Go backend with working HTTP server
- [ ] API integration (anime, film, TV)
- [ ] Search + catalog browsing
- [ ] Watchlist and tracking
- [ ] Recommendations engine
- [ ] Frontend UI