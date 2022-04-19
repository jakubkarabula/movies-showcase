import { createStore, Reducer } from 'redux'
import { Movie } from '../components/Card'
import { reducer, StoreActions, StoreState } from '../Redux/Store'

export const setupStore = (state: StoreState) =>
  createStore(reducer as Reducer<StoreState, StoreActions>, state)

export const mockMoviesSearch: Array<Movie> = [
  {
    Title: 'Euphoria',
    Year: '2019–',
    imdbID: 'tt8772296',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Euphoria',
    Year: '2017',
    imdbID: 'tt5698320',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMmVhYTk5NDktMThjNC00MDg0LTg3OTEtOTZkNzMyMGE5ZDU1XkEyXkFqcGdeQXVyNjI2ODA4MDU@._V1_SX300.jpg',
  },
  {
    Title: 'Euphoria',
    Year: '2018',
    imdbID: 'tt7779590',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZTMxZWRjOTQtYjkyMS00Y2NjLTkyMjQtMjE0MjZkMjZhYzRjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg',
  },
  {
    Title: 'Euphoria',
    Year: '2006',
    imdbID: 'tt0847877',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BY2NhNTY4N2ItYjVjMi00MjQwLThlNjAtZTljOTkzYzUyM2JmXkEyXkFqcGdeQXVyMTEwNTQxMjQ@._V1_SX300.jpg',
  },
  {
    Title: 'Euphoria',
    Year: '2012–2013',
    imdbID: 'tt2896496',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNmQzZGZkMGQtNTE4ZS00ZTU1LWEyZTQtM2I0OWYxZDY3YzM4XkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_SX300.jpg',
  },
  {
    Title: 'The Euphoria of Being',
    Year: '2019',
    imdbID: 'tt9313040',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjcyMmIzNjEtN2Q4NC00NWRiLTllYTctZDFiMTM0MmRmMTVlXkEyXkFqcGdeQXVyMjIzMDAwOTc@._V1_SX300.jpg',
  },
  {
    Title: 'Euphoria',
    Year: '2005',
    imdbID: 'tt0926194',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjU0NTQzMzEyOF5BMl5BanBnXkFtZTgwMjE2MTA2MDE@._V1_SX300.jpg',
  },
  {
    Title: 'Euphoria',
    Year: '2011',
    imdbID: 'tt8513772',
    Type: 'game',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZGU5ZTg4MDAtMWIyNy00ZjhmLTlhOTQtNmZmODUzZGY4NWRmXkEyXkFqcGdeQXVyNzYyMjcwMjE@._V1_SX300.jpg',
  },
  {
    Title: 'Euphoria',
    Year: '2013',
    imdbID: 'tt2191328',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2FhMzE2YWQtZmQ5MC00MjI0LTkzYzgtNjc3YWM1YTc5ZGY0XkEyXkFqcGdeQXVyMjk1NzMxODk@._V1_SX300.jpg',
  },
  {
    Title: 'Feels Like Euphoria',
    Year: '2017',
    imdbID: 'tt5840072',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYTNhOTljODUtMjgzYS00YWQ1LWE0YmQtYTJiODJkNDdkYWE0XkEyXkFqcGdeQXVyMTA0NTAyNjI1._V1_SX300.jpg',
  },
]

export const mockMovies: Array<Movie> = [
  {
    Title: 'Game of Thrones',
    Year: '2011–2019',
    imdbID: 'tt0944947',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones: The Last Watch',
    Year: '2019',
    imdbID: 'tt10090796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDdlMzQzNDQtNTAxMS00NTMyLTgxYTAtYzQ0OGI1YzZhY2Y3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones: A Telltale Games Series',
    Year: '2014',
    imdbID: 'tt3391176',
    Type: 'game',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BODg0YTM4NzEtZDQyNi00M2MzLWE3MDQtNjcxNTkxNWM0NzNhXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones',
    Year: '2012',
    imdbID: 'tt2231444',
    Type: 'game',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjE5NTk5NDg3OV5BMl5BanBnXkFtZTgwNDExNzg2MDE@._V1_SX300.jpg',
  },
  {
    Title:
      'Game of Thrones Conquest & Rebellion: An Animated History of the Seven Kingdoms',
    Year: '2017',
    imdbID: 'tt7937220',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMGYzNDJiOTgtN2Y1OC00NmM2LTk3MTMtZmFhNmJlMzQzNGNhXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones: Season 2 - Character Profiles',
    Year: '2013',
    imdbID: 'tt2653342',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTU1MzU2MDE4MV5BMl5BanBnXkFtZTgwNTc3NzA2MDE@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones: The Story So Far',
    Year: '2017',
    imdbID: 'tt7136312',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones: Costumes',
    Year: '2011',
    imdbID: 'tt2653350',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYyODg1MjYzMV5BMl5BanBnXkFtZTgwOTc3NzA2MDE@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones: A Day in the Life',
    Year: '2015',
    imdbID: 'tt4437700',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMmZhODYxMmMtMjZkNS00YzU0LTlmYzgtNDEzYjgzMTBiNDc0XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg',
  },
  {
    Title: 'Game of Thrones: Season 2 - Invitation to the Set',
    Year: '2012',
    imdbID: 'tt2653340',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MjM4OTkzMV5BMl5BanBnXkFtZTgwMzc3NzA2MDE@._V1_SX300.jpg',
  },
]
