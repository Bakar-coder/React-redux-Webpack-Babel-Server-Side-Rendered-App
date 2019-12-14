import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  return (
    <Fragment>
        <table className="table table-container">
          <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
            <th />
          </tr>
          </thead>
          <tbody>
          {movies.length > 0 &&
          movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>like</td>
              <td>
                <button className='btn btn-danger btn-sm'>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
    </Fragment>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;
