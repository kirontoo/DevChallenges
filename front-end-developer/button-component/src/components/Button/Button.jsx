import styled from 'styled-components';
import './Button.css';

/**
* options:
*   variant: outline, text
*   disabled
*   size: sm md lg (change padding)
* */

const Btn = ({ className, children, startIcon, endIcon }) => (
		<button className={className}>
			{ startIcon ? <span className="material-icons">{ startIcon }</span> : undefined }
			{ children }
			{ endIcon ? <span className="material-icons">{ endIcon }</span> : undefined }
		</button>
);

const setColor = ( { color } ) => ( color && color !== 'default' ) ? 'white' : 'var(--default-text-color)';

const setBackgroundColor =  ( { color, variant } ) => {
	if( variant ) { return 'none'; }
	if ( color && color !== 'default' ) {
		return `var(--${color}-color)`;
	} else {
			return 'var(--default-color)';
	}
}

const setHover = ( { color, variant } ) => {
	if( variant ) { return 'var(--text-hover-color); border: 1px solid var(--text-outline-color)'; }
	if ( color && color !== 'default' ) {
		return `var(--${color}-hover-color)`;
	} else {
			return 'var(--default-hover-color)';
	}
};


const Button = styled(Btn)`
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: 500;
	color: ${ props => setColor( props ) };
	border-radius: 6px;
	background: ${ props => setBackgroundColor( props ) };
	padding: 0.5em 1em;
	${ props => props.disabledShadow || 'box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);' };
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
  text-decoration: none;
  border: ${ props => props.variant == 'outline' ? '1px solid var(--text-outline-color)' : 'none'};

	:hover {
		background: ${ props => setHover( props ) }; 
		cursor: pointer;
	}
`
export { Button };
