## Table of Contents
   - [1. getAnimeBySeasonAndYear](#1-getanimebyseasonandyear)
   - [2. getCurrentSeasonAnime](#2-getcurrentseasonanime)
   - [3. getAnimeByGenre](#3-getanimebygenre)
   - [4. searchAnime](#4-searchanime)
   - [5. getTrendingAnime](#5-gettrendinganime)
   - [6. getAnimeByID](#6-getanimebyid)
   - [7. getAnimeByTitle](#7-getanimebytitle)

### 1. `getAnimeBySeasonAndYear`

Retrieves a list of anime that aired/will air in a specific season and year.

```typescript
async function getAnimeBySeasonAndYear(season: SEASON, seasonYear: number, page?: number, perPage?: number): Promise<[AnimeInformation[], boolean]>
```

- `season`: The season the anime aired/will air (e.g., 'FALL', 'WINTER', 'SPRING', 'SUMMER').
- `seasonYear`: The year the anime aired/will air.
- `page` (optional): The page number.
- `perPage` (optional): The count of results per page (not more than 50).

Example:
```typescript
const [animeList, hasMorePages] = await getAnimeBySeasonAndYear('FALL', 2023, 1, 20);
```

### 2. `getCurrentSeasonAnime`

Retrieves a list of anime that are airing/will air in the current season.

```typescript
async function getCurrentSeasonAnime(page?: number, perPage?: number): Promise<[AnimeInformation[], boolean]>
```

- `page` (optional): The page number.
- `perPage` (optional): The count of results per page (not more than 50).

Example:
```typescript
const [animeList, hasMorePages] = await getCurrentSeasonAnime(1, 10);
```

### 3. `getAnimeByGenre`

Retrieves a list of anime that have the provided genre.

```typescript
async function getAnimeByGenre(genre: GENRE, season?: SEASON, seasonYear?: number, page?: number, perPage?: number): Promise<[AnimeInformation[], boolean]>
```

- `genre`: The genre of the anime.
- `season` (optional): The season the anime aired/will air.
- `seasonYear` (optional): The year the anime aired/will air.
- `page` (optional): The page number.
- `perPage` (optional): The count of results per page (not more than 50).

Example:
```typescript
const [animeList, hasMorePages] = await getAnimeByGenre('ACTION', 'WINTER', 2024, 1, 15);
```

### 4. `searchAnime`

Searches for anime based on the provided query.

```typescript
async function searchAnime(query: string, page?: number, perPage?: number): Promise<[AnimeInformation[], boolean]>
```

- `query`: The search query string.
- `page` (optional): The page number.
- `perPage` (optional): The count of results per page (not more than 50).

Example:
```typescript
const [animeList, hasMorePages] = await searchAnime('Fullmetal Alchemist', 1, 5);
```

### 5. `getTrendingAnime`

Retrieves a list of the current trending anime.

```typescript
async function getTrendingAnime(page?: number, perPage?: number): Promise<[AnimeInformation[], boolean]>
```

- `page` (optional): The page number.
- `perPage` (optional): The count of results per page (not more than 50).

Example:
```typescript
const [animeList, hasMorePages] = await getTrendingAnime(1, 10);
```

### 6. `getAnimeByID`

Retrieves an anime based on the provided ID.

```typescript
async function getAnimeByID(id: number): Promise<AnimeInformation>
```

- `id`: ID of the anime.

Example:
```typescript
const animeInfo = await getAnimeByID(1234);
```

### 7. `getAnimeByTitle`

Retrieves an anime based on the provided title.

```typescript
async function getAnimeByTitle(title: string): Promise<AnimeInformation>
```

- `title`: Title of the anime.

Example:
```typescript
const animeInfo = await getAnimeByTitle('Attack on Titan');
```