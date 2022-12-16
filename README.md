# Single-page application

## 1. Task
### 1.1 Functionalities

- [x] users can select up to 5 currencies (somewhat)
- [x] users can remove the currencies (somewhat)
- [x] show 24h price chart along with the current price
      <!-- refreshes every 3s -->
- [x] show all selected currencies in one view
      <!-- refreshes every 20s -->
- [x] the selected currencies should be persistent. Refreshing the page should not reset them
      <!-- redux persist -->
- [x] each of the selected currencies should be displayed with a distinct color

#### 1.2 API

Used endpoints:

- /search
- /search/trending - display carousel
- /coins/:id/market_chart - get last 24h price (requires 5 requests for 5 coins)
- /coins/markets - refreshing current price (saved for future)

## Deliverables

external libraries installed:

- sass
- react-redux
- redux-persist
- react-vis
- @mui/material
- usehooks-ts
- notistack

Hosted on githubPages: []()
