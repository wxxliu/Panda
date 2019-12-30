import React, { PureComponent, Fragment } from 'react';
import { Row, Col, Pagination, Icon, Spin, Popover } from 'antd';
import { connect } from 'dva';
import styles from './index.less'

@connect(({ loading, movie }) => ({
  loading: loading.effects,
  movieList: movie.movieList
}))
class Index extends PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch({ type: 'movie/getList' })
  }
  render () {
    const { movieList =[], loading } = this.props
    const isLoading = loading['movie/getList']

    const content = (item) => (
      <div>
        <img src={ item.images.small } className={styles.cover} />
      </div>
    )
    const movieCards = movieList.map((item, index) => (
      <div className={styles.card} key={item.id}>
        <p className={styles.rank}>
          <span><Icon type="crown" theme="twoTone" />&ensp;{ index + 1 }</span>
        </p>
        <p>
          <span className={styles.lable}>名字: </span>
          <Popover content={ content(item) } title="海报">
            <span>{ `《${item.title}》` }</span>
          </Popover>
        </p>
        <p>
          <span className={styles.lable}>导演: </span>
          <span>{ item.directors.map(it => it.name).join("、") }</span>
        </p>
        <p>
          <span className={styles.lable}>演员: </span>
          <span>{ item.casts.map(it => it.name).join("、") }</span>
        </p>
        <p>
          <span className={styles.lable}>上映日期: </span>
          <span>{ item.year }</span>
        </p>
        <p>
          <span className={styles.lable}>类型: </span>
          <span>{ item.genres.join(",") }</span>
        </p>
        <p>
          <span className={styles.lable}>分数: </span>
          <span>{ item.rating.average }</span>
        </p>
        <p>
          <span className={styles.lable}>时长: </span>
          <span>{ item.durations[0] }</span>
        </p>
      </div>
    ))

    return (
      <Fragment>
        <div className='flow'>
          <Row className={styles.pagination_row}>
            <Pagination size="small" total={250} />
          </Row>
          <Spin spinning={isLoading} tip="loading...">
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
