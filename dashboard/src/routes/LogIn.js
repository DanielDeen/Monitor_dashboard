import React from 'react';
import { connect } from 'dva';
import WrappedNormalLoginForm from '../components/LogIn';

function LogIn({ location }) {
  return (
      <div>
        <WrappedNormalLoginForm />
      </div>
  );
}

export default connect()(LogIn);