import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {

  return (
    <Wrapper>
      <div className="poweredBy">
      poweredBy {' '}
        <a key="website" href="https://strapi.io" target="_blank" rel="noopener noreferrer">
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
