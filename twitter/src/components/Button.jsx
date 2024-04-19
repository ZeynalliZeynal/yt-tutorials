import PropTypes from 'prop-types';

const Button = ({ size, children }) => {
  return (
    <button
      className={`bg-primary-background hover:bg-primary-hoverBg transition-colors rounded-full font-bold w-[90%] ${size === 'normal' ? 'px-4 text-[15px] h-9' : size === 'large' ? 'px-8 text-[17px] h-[52px]' : ''}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['normal', 'large']),
  children: PropTypes.string,
};

export default Button;
