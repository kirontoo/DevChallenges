import styled, { css } from 'styled-components';

/**
* options:
*   variant: outline, text
*   disabled
*   size: sm md lg (change padding)
* */

// TODO: use grid instead of flex?

const Btn = ({ className, children, startIcon, endIcon }) => {
	return (
	<button className={className}>
		{ startIcon ? <span className="material-icons">{ startIcon }</span> : undefined }
		{ children }
		{ endIcon ? <span className="material-icons">{ endIcon }</span> : undefined }
	</button>
)};

const setColor = ( { color, variant } ) => { 
	return ( variant && color ) ? `rgba(var(--${color}-color), 1)` : ( color ) ? 'white' : 'rgba(var(--default-text-color))';
};

const setBackgroundColor =  ( { color, variant } ) => {
	if( variant ) { return 'none'; }
	if ( color && color !== 'default' ) {
		return `rgba(var(--${color}-color), 1)`;
	} else {
			return 'rgba(var(--default-color), 1)';
	}
}


const setHover =({ color, variant }) => {
	let styles = '';

	if ( color ) { 
		styles += ( variant ) ? 
		` background: rgba(var(--${color}-hover-color), 0.4);` : 
		` background: rgba(var(--${color}-hover-color), 1);`
	} else { 
		styles += ' background: rgba(var(--default-hover-color), 1);'
	}

	if( variant === 'outline' ) {
		if ( color ) {
			styles += ` border: 1px solid rgba(var(--${color}-color), 1);`;
		} else {
			styles += ' border: 1px solid rgba(var(--default-text-color), 1);';
		}
	} 
	return css`${styles}`
}

const setBorder = ({ color, variant }) => {
	if ( variant === 'outline' ) {
			return color ? `1px solid rgba(var(--${color}-color), 1)` : '1px solid rgba(var(--default-text-color), 1)';
	} else {
		return 'none';
	}
}

// TODO: fix variant text shadow
const Button = styled(Btn)`
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: 500;
	border-radius: 6px;
	padding: 0.5em 1em;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;

	color: ${ props => setColor( props ) };
	background: ${ props => setBackgroundColor( props ) };
	border: ${ props => setBorder( props ) };

	:hover {
		${ props => ( !props.disabled ) ? setHover( props ) : '' }
		cursor: ${ props => ( props.disabled ? 'not-allowed' : 'pointer' ) };
	}

 	${ props => ( props.disabledShadow || props.variant ) || 'box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);' };

	span.material-icons {
		font-size: 1em;
		margin: 0.2em;
	}
`

// const Button = styled(Btn)`
// 	font-family: 'Noto Sans JP', sans-serif;
// 	font-weight: 500;
// 	color: ${ props => setColor( props ) };
// 	border-radius: 6px;
// 	background: ${ props => setBackgroundColor( props ) };
// 	padding: 0.5em 1em;
// 	${ props => props.disabledShadow || 'box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);' };
// 	text-align: center;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	text-decoration: none;
// 	border: ${ props => props.variant == 'outline' ? '1px solid var(--variant-color)' : 'none'};
//
// 	:hover {
// 		background: ${ props => setHover( props ) }; 
// 		cursor: pointer;
// 	}
// `


export { Button };
