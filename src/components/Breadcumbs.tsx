import React from 'react';
// local
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'types/common';
import { BaseComponentProps } from 'types/props';
import { bem } from 'utils/helper';

interface Props extends BaseComponentProps {
  data: Breadcrumb[];
}

const b = bem('breadcrumbs');

const Breadcrumbs: React.FC<Props> = ({ className = '', style, data }) =>
  data.length ? (
    <nav className={`${className} ${b()}`} style={style}>
      {data.map(({ text, link }, index) =>
        link ? (
          <Link key={index} className={b('item', { link: true })} to={link}>
            {text}
          </Link>
        ) : (
          <span key={index} className={b('item')}>
            {text}
          </span>
        ),
      )}
    </nav>
  ) : null;

export default Breadcrumbs;
