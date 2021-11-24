/**
 * Description of the page
 */
import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
// local
import { BasePageProps } from 'types/props';
// import { bem } from 'utils/helper';

interface Props extends BasePageProps<{}> {}

// const b = bem('not-found');

const NotFoundPage: React.FC<Props> = ({ match }) => {
  return (
    <Fragment>
      <div>NotFound</div>
    </Fragment>
  );
};

const NotFound = inject('store')(observer(NotFoundPage));
export default NotFound;
