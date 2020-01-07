import React, { PureComponent } from 'react';
import withRouter from 'umi/withRouter';
import {
	Icon,
} from 'antd';
import styles from './card.less'

class MovieCard extends PureComponent {
  render () {
    const {
      item,
      index
    } = this.props
    return (
      <div className={styles.card} key={item.id}>
        <p className={styles.rank}>
          <span><Icon type="crown" theme="twoTone" />&ensp;{ index + 1 }</span>
        </p>
        <p>
          <span className={styles.lable}>名字: </span>
          <span>{ `《${item.title}》` }</span>
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
    )
  }
}

export default withRouter(MovieCard);
