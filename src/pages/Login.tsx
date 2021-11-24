/**
 * Description of the page
 */
import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
// local
import { BasePageProps } from 'types/props';
// import { bem } from 'utils/helper';

interface Props extends BasePageProps<{}> {}

// const b = bem('login');

const LoginPage: React.FC<Props> = ({ match }) => {
  return (
    <Fragment>
      <div>Login</div>
    </Fragment>
  );
};

const Login = inject('store')(observer(LoginPage));
export default Login;
