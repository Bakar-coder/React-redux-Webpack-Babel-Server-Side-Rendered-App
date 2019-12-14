import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { fetchMovies } from "../../actions";
import Movies from "../movies/movies";
import { Helmet } from "react-helmet";

class MoviesPage extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies } = this.props;

    const head = () => (
      <Helmet>
        <title>{`Found ${this.props.movies.length} Movies`}</title>
        <meta property="og:title" content="Movies List" />
      </Helmet>
    );
    return (
      <Fragment>
        {head()}
        <Movies movies={movies} />
      </Fragment>
    );
  }
}

const mapState = state => ({
  movies: state.movies.movies
});

MoviesPage.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired
};

const mapDispatch = dispatch => bindActionCreators({ fetchMovies }, dispatch);

export default {
  loadData: ({ dispatch }) => dispatch(fetchMovies()),
  component: connect(mapState, mapDispatch)(MoviesPage)
};
