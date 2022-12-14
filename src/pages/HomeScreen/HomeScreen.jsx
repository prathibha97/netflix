import { Banner, Nav, Row } from '../../components'
import requests from '../../request'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row title='NETFLIX_ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow />

            <Row title='Trending Now'
                fetchUrl={requests.fetchTrending} />

            <Row title='Top Rated'
                fetchUrl={requests.fetchTopRated} />

            <Row title='Action Movies'
                fetchUrl={requests.fetchActionMovies} />

            <Row title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies} />

            <Row title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies} />

            <Row title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies} />

            <Row title='Documentaries'
                fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen