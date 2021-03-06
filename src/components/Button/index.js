import PropTypes from "prop-types";
import cn from 'classnames'

import { Button as BaseButton } from "antd";

import './Button.scss'

const Button = props => {
  return <BaseButton 
    {...props}
    className={cn('button', props.className, {
        "button-large": props.size === 'large'
    }
    )}/>
};

Button.propTypes = {
 className: PropTypes.string,
};

export default Button;
