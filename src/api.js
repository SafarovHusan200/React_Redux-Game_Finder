// API key - 21220ab047a74041ba00e23ba71db041

// API key
const api_key = "21220ab047a74041ba00e23ba71db041";

// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting current dates
const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};
const getDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();

// CurrentDate
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// Last Year
const lastDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// Next Year
const nextDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${api_key}&dates=${lastDate},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextDate}&ordering=-added&page_size=12`;
const new_games = `games?key=${api_key}&dates=${currentDate},${nextDate}&ordering=-released&page_size=12`;

export const popularGames = () => `${base_url}${popular_games} `;
export const upcomingGames = () => `${base_url}${upcoming_games} `;
export const newGames = () => `${base_url}${new_games} `;

// Game Details
export const GameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${api_key}`;
