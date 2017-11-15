import * as React from 'react';
import style from './app.st.css';

export const App: React.SFC<{}> = () => {
  return (
    <div {...style('')}>
      <div className={style.item}>Hello World</div>
    </div>
  );
};
