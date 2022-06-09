import style from './button.module.scss';
export const Button = ({ label, disabled = false }) => (
  <button
    disabled={disabled}
    data-testid="submitbutton"
    className={style['button']}
  >
    {label}
  </button>
);
