import { CSSProperties } from 'react';
import { match, RouteComponentProps } from 'react-router';
import RootStore from '../store';

export interface StoreProps {
  store?: typeof RootStore;
}

export interface BaseLayoutProps extends RouteComponentProps<{}> {}

export interface BaseComponentProps extends StoreProps {
  className?: string;
  style?: CSSProperties;
}

export interface BasePageProps<Params extends { [K in keyof Params]?: string } = {}>
  extends BaseComponentProps {
  match?: match<Params>;
  breadcrumbs?: Breadcrumb[];
}
