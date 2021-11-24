import React from 'react';
import { Redirect, Switch, useLocation } from 'react-router-dom';
// local
import { Page } from 'components/Page';

const Routes: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Switch>
      {/* REDIRECTS */}
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />

      {/* <Route exact path={'/about'} render={() => <Redirect to={'/about/company'} />} /> */}

      {/* PATHS */}
      <Page
        onlyPublic
        title={'Авторизация'}
        path={'/auth/login'}
        component={React.lazy(() => import('pages/Login'))}
      />
      <Page exact title={'Главная'} path={'/'} component={React.lazy(() => import('pages/Main'))} />

      <Page
        title={'Ошибка 404'}
        path={'*'}
        component={React.lazy(() => import('pages/NotFound'))}
      />
    </Switch>
  );
};

export default Routes;
