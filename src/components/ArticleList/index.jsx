/*
 * @description: 文章列表
 * @author: zpl
 * @Date: 2019-12-04 16:42:36
 * @LastEditTime: 2019-12-06 14:21:31
 * @LastEditors: zpl
 */
import React from 'react';
import PropTypes from 'prop-types';
import { List, Icon } from 'antd';

import './index.less';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
IconText.propTypes = {
  type: PropTypes.oneOf(['star-o', 'like-o', 'message']).isRequired,
  text: PropTypes.number,
};
IconText.defaultProps = {
  text: 0,
};

const ArticleList = (props) => {
  const { listData, pageSize } = props;
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          // TODO: 待处理
          // eslint-disable-next-line no-console
          console.log(page);
        },
        pageSize,
      }}
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <IconText type="star-o" text={item.favorite_sum} key="list-vertical-star-o" />,
            <IconText type="like-o" text={item.like_sum} key="list-vertical-like-o" />,
            <IconText type="message" text={item.comment_sum} key="list-vertical-message" />,
          ]}
          extra={(
            <img
              alt="logo"
              // src={item.image}
              src={`${process.env.PUBLIC_URL}testImg.jpg`}
            />
          )}
        >
          <List.Item.Meta
            title={<a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>}
            description={item.description}
          />
          {/* {item.content} */}
        </List.Item>
      )}
    />
  );
};

ArticleList.propTypes = {
  listData: PropTypes.array,
  pageSize: PropTypes.number,
};

ArticleList.defaultProps = {
  listData: [],
  pageSize: 10,
};

export default ArticleList;
