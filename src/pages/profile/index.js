import React from 'react';
import { connect } from 'dva';

const Index = () => (
  <div>
    profile page
  </div>
);

export default connect(({ global, dispatch, loading }) => ({ global, dispatch, loading }))(Index);
