import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Movie } from './components/Card'
import { setCards } from './Redux/Store'

const apiUrl = 'https://www.omdbapi.com/?apikey=b08d4b18&'

const Api = {
  search: (title: string) => {
    let searchParams = new URLSearchParams()
    searchParams.set('s', title)

    return fetch(apiUrl + searchParams.toString())
  },
  getMovie: (id: string) => {
    let searchParams = new URLSearchParams()
    searchParams.set('i', id)

    return fetch(apiUrl + searchParams.toString())
  },
}

export const useSearch = (search: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>(undefined)
  const dispatch = useDispatch()

  useEffect(() => {
    setError(undefined)

    if (search.length > 0) {
      Api.search(search)
        .then((response) => response.json())
        .then((data: SearchResults) => {
          if (data.Response === 'True') {
            dispatch(setCards(data.Search))
          } else {
            setError(data.Error)
            dispatch(setCards([]))
          }

          setLoading(false)
        })
        .catch((error) => {
          setError('Request failed.')
          setLoading(false)
        })
    }
  }, [search, dispatch])

  return { error, loading }
}

export type MovieResponse = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
  Error?: string
}

export type Rating = {
  Source: string
  Value: string
}

export const useGetMovie = (query: URLSearchParams) => {
  const [movie, setMovie] = useState<MovieResponse | null>(null)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (query.get('id')) {
      Api.getMovie(query.get('id') || '')
        .then((response) => response.json())
        .then((response: MovieResponse) => {
          if (response.Response === 'True') {
            setMovie(response)
          } else {
            setError(response.Error)
          }
        })
        .catch((error) => {
          setError('Request failed.')
        })
    }
  }, [query])

  return { movie, error }
}

export type SearchResults = {
  Search: Movie[]
  totalResults: string
  Response: string
  Error?: string
}

export default Api
