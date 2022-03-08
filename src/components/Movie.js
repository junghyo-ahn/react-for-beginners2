import PropTypes from 'prop-types';

Movie.propTypes = {
    coverImg: PropTypes.String
}

function Movie({medium_cover_image, title, genres, summary}) {
    return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

export default Movie;