import React, { useEffect, Suspense } from 'react';
// import { LazyExoticComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
// import { RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
// local
import MainLayout from './Layout';
import { Breadcrumb } from 'types/common';
import { StoreProps, BaseLayoutProps, BasePageProps } from 'types/props';

interface OwnProps extends RouteProps {
  path?: string;
  title?: string;
  secured?: boolean;
  onlyPublic?: boolean;
  breadcrumbs?: Breadcrumb[];
  layout?: React.FC<BaseLayoutProps> | React.ComponentClass<BaseLayoutProps>;
  component: React.FC<BasePageProps<any>>;
  // component: LazyExoticComponent<
  //   React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  // >;
}

type Props = OwnProps & StoreProps;

const PageComponent: React.FC<Props> = ({
  path = '*',
  title = '',
  breadcrumbs = [],
  secured = false,
  onlyPublic = false,
  component: Component,
  layout: Layout = MainLayout,
  store,
  ...rest
}) => {
  const auth = store!.auth;
  const { isAuth } = auth;
  useEffect(() => {
    document.title = title;
  }, [title]);

  if (secured && !isAuth) return <Redirect to={'/auth/login'} />;

  if (isAuth && onlyPublic) return <Redirect to={'/'} />;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          {/* <Suspense fallback={<Loader className="mt-10" size="m" />}> */}
          <Suspense fallback={<div>Loading</div>}>
            <Component {...props} breadcrumbs={breadcrumbs} />
          </Suspense>
        </Layout>
      )}
    />
  );
};

export const Page = inject('store')(observer(PageComponent));
