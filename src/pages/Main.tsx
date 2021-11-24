/**
 * Description of the page
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
// local
import { StoreProps, BasePageProps } from 'types/props';
import { bem } from 'utils/helper';

interface OwnProps extends BasePageProps {}

type Props = OwnProps & StoreProps;

const b = bem('main-page');

const MainPage: React.FC<Props> = () => {
  return <div className={b('wrapper')}>MAIN PAGE</div>;
};

const Main = inject('store')(observer(MainPage));
export default Main;
