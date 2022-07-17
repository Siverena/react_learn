import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './elements/Loader/Loader';
import { Provider } from 'react-redux';
import { store } from './store';
import style from './index.module.scss';
// import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './components/AppRouter/AppRouter';

export const App: FC = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <div className={style['app-wrapper']}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Suspense>
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
};
