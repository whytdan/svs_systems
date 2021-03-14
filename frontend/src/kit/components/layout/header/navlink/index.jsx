import React from 'react';
import { Link } from '@reach/router';

export default function NavLink(props) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? '#15c3cb' : props.scrolled === true ? '#fff' : '#fff',
          },
        };
      }}
    >
      {props.children}
    </Link>
  );
}

