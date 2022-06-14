import style from './loader.module.scss';
export const Loader = () => (
  <div className={style['lds-wrapper']}>
    <div className={style['lds-default']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
