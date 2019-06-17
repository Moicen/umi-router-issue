import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';


const Login = ({ dispatch }) => {

  const submit = () => {
    dispatch({ type: 'global/login' });
  };


  return (
    <div>
      <Button type="primary" onClick={submit}>
        Login
      </Button>
    </div>
  );
};

export default connect(({ global, dispatch, loading }) => ({ global, dispatch, loading }))(Login);
