import { useEffect, useState } from 'react'
import api from '../../utils/api'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([])
    const base_url = 'https://image.tmdb.org/t/p/original/'
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get(fetchUrl)
            setMovies(data.results)
            return data
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row