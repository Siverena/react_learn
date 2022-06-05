import style from './button.module.scss';
export const Button = ({ label, disabled = false }) => (
  <button disabled={disabled} className={style['button']}>
    {label}
  </button>
);
