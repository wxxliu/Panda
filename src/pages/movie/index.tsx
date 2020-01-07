import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import styles from './index.less'
import {
	Row,
	Col,
	Pagination,
	Spin,
	Popover
} from 'antd';
import MovieCard from './components/card';

@connect(({ loading, movie }) => ({
  loading,
  movieList: movie.movieList
}))
class Index extends PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch({ type: 'movie/getList' })
  }
  render () {
    const { movieList =[], loading } = this.props
    const movieCards = movieList.map((item, index) => (
      <MovieCard item={ item } index={ index } />
    ))
    return (
      <Fragment>
        <div className='flow'>
          <Row className={styles.pagination_row}>
            <Pagination size="small" total={250} />
          </Row>
          <Spin spinning={ loading.effects['movie/getList'] } tip="loading...">
            <div className={styles.water_flow} >
             { movieCards }
            </div>
          </Spin>
        </div>
      </Fragment>
    )
  }
}

export default Index;
