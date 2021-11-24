/**
 * Description of the page
 */
import React from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
// local
import { StoreProps, BaseComponentProps } from 'types/props';
// import { bem } from 'utils/helper';

interface OwnProps extends BaseComponentProps {}

type Props = OwnProps & StoreProps;

// const b = bem('header');

const HeaderComponent: React.FC<Props> = ({ store }) => {
  // const auth = store!.auth;
  // const { isAuth } = auth;
  // const history = useHistory();
  // const { pathname } = useLocation();

  return <div>HEADER</div>;
};

export const Header = inject('store')(observer(HeaderComponent));
