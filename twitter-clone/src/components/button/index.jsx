import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({size, children}) {
  return (
      <button
          className={classNames('bg-[#1d9bf0] rounded-full flex justify-center items-center font-bold hover:bg-[rgb(26,140,216)] transition-colors',
              {
                'px-4 h-9': size === 'normal',
                'px-8 h-[52px] w-full text-[17px]': size === 'large'
              })}>{children}</button>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(['normal', 'large'])
}

Button.defaultProps = {
  size: 'normal',
}