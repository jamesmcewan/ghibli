import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FilmProps } from '../../interfaces/films';
import Films from '../Films/Films';
import { getFilms } from '../../actions/actions';
import GlobalStyle from '../../styles/GlobalStyle';
import StyledApp from '../../styles/StyledApp';
import Header from '../Header/Header';

interface AppProps {
  films: FilmProps[];
  filmsLoaded: boolean;
  getFilms: Function;
}

class App extends Component<AppProps> {
  componentDidMount() {
    const { getFilms, filmsLoaded } = this.props;
    // if (!filmsLoaded) {
    getFilms();
    // }
  }

  public render() {
    const { films, filmsLoaded } = this.props;

    return (
      <StyledApp>
        <GlobalStyle />
        <Header />
        {filmsLoaded && films && <Films {...{ films }} />}
      </StyledApp>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    films: state.films.films,
    filmsLoaded: state.films.filmsLoaded,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getFilms }, dispatch);

export { App };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
