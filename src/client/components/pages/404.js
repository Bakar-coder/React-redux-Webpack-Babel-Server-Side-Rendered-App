import React from 'react';

const PageNotFound = ({staticContext = {}}) => {
  staticContext.notFound = true;
  return (
    <div className='not-found'>
      <h1>Oops! - Page not found</h1>
    </div>
  );
};

export default {
  component: PageNotFound
}
