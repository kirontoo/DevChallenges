import styled, { css } from 'styled-components';

const Btn = ({ className, children, startIcon, endIcon }) => {
	return (
		<button className={className}>
			{ startIcon ? <span className="material-icons">{ startIcon }</span> : undefined }
			{ children }
			{ endIcon ? <span className="material-icons">{ endIcon }</span> : undefined }
		</button>
	)};

const setColor = ( { disabled, color, variant } ) => { 
	if ( disabled ) { return 'rgba(var(--disabled-color), 1)' }
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
		` background: rgba(var(--${color}-hover-color), 0.2);` : 
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

const setPadding = ({ size }) => {
	switch ( size ) {
		case 'md':
			return '0.5em 1.5em';
		case 'lg':
			return '0.5em 2.1em';
		default: 
			return '0.5em 1.2em';
	}
}

const setHeight = ({ size }) => {
	switch ( size ) {
		case 'md':
			return '3em';
		case 'lg':
			return '3.2em';
		default: 
			return '2.8em';
	}
};

const setIconMargin = ({ startIcon, endIcon }) => {
	if ( startIcon ) {
		return css` margin-right: 0.8em; `
	}

	if ( endIcon ) {
		return css` margin-left: 0.8em; `
	}
}

const Button = styled(Btn)`
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: 500;
	border-radius: 6px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;

	padding: ${ props => setPadding( props ) };
	color: ${ props => setColor( props ) };
	background: ${ props => setBackgroundColor( props ) };
	border: ${ props => setBorder( props ) };
	height: ${ props => setHeight( props ) };

	:hover, :focus {
		${ props => ( !props.disabled ) ? setHover( props ) : '' }
		cursor: ${ props => ( props.disabled ? 'not-allowed' : 'pointer' ) };
	}

 	${ props => ( props.disableShadow || props.variant ) || 'box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);' };

	span.material-icons {
		font-size: 1em;
		${ props => setIconMargin( props ) }
	}
`

export { Button };
