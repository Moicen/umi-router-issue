import React from 'react'
import styles from './index.less';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import { Button } from 'antd';


function BasicLayout({dispatch, children}) {

  const logout = () => {
    dispatch({type: 'global/logout'})
  }

  return (
    <div className={styles.normal}>
      <div>
        {
          window.location.pathname !== '/login' &&  (
            <Button type="default" onClick={logout}>
              Logout
            </Button>
          )
        }
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default withRouter(connect(({ dispatch }) => ({ dispatch }))(BasicLayout));
