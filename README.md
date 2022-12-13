# Single-page application

## 1. Task

PYTANIE: Zalozyć że MUI czy pure HTML & CSS

### 1.1 Functionalities

- [ ] users can select up to 5 currencies
- [ ] users can remove the currencies
- [ ] show 24h price chart along with the current price
      <!-- refreshes every 3s -->
- [ ] show all selected currencies in one view
      <!-- refreshes every 20s -->
- [ ] the selected currencies should be persistent. Refreshing the page should not reset them
      <!-- redux persist -->
- [ ] each of the selected currencies should be displayed with a distinct color

#### 1.2 API

Used endpoints:

- /search
- /search/trending - display carousel
- /coins/list
- /coins/markets - refreshing current price
- /coins/:id/market_chart - get last 24h price (requires 5 requests for 5 coins)

## Deliverables

For the task i chose ReactJS. Project was created using Vite

external libraries installed:

- sass
- react-vis
- @mui/material
- usehooks-ts

Hosted on githubPages: []()
