/*
 * @description:
 * @author: zpl
 * @Date: 2019-12-03 17:09:39
 * @LastEditTime: 2019-12-12 10:51:25
 * @LastEditors: zpl
 */
import React from 'react';
import Login from '../../components/Login';

export default () => (
  <Login
    visible
    handleCancel={() => { window.location.href = '/'; }}
    loginSuccess={() => { }}
    loginFailure={() => { }}
  />
);
