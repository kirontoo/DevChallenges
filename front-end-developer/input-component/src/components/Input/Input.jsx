import styled from 'styled-components';

const Inpt = ({ multiline, row, ...rest }) => {
	return multiline 
		? <textarea {...rest} columns="60" rows={row} /> 
		: <input {...rest} />
};

const setFocusColor = ({ error }) => {
	return ( error ) ? 'rgba(var(--input-error-color), 1)' : 'rgba(var(--primary-color), 1)';
};

const setBorderColor = ({ focus, disabled, error }) => {
	if ( focus && !error && !disabled ) {
		return `rgba(var(--primary-color), 1)`;
	}

	if ( disabled ) {
		return 'rgba(var(--input-disabled-color), 1)';
	} 

	if ( error ) {
		return 'rgba(var(--input-error-color), 1)'; 
	} 

	return 'rgba(var(--input-default-color), 1)'; 
};

const setErrorColor = ({ error }) => {
	return error 
		? 'rgba(var(--input-error-color), 1)' 
		: 'rgba(var(--input-default-color), 1)';
}

const setLabelColor = ({ error, focus }) => {
	if ( !error && focus ) {
		return 'rgba(var(--primary-color), 1)';
	}

	return error 
		? 'rgba(var(--input-error-color), 1)' 
		: 'rgba(var(--input-text-color), 1)';
}

const setSize = ({ size }) => {
	return size == 'md'
		? '1.3em 0.8em'
		: '1em 0.8em';
}

const StyledInput = styled(Inpt)`
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: 500;
	border-radius: 0.5em;
	color: rgba(var(--input-text-color), 1);

	width: ${ props => props.fullWidth ? '100%' : '15em'};
	border: 1px solid ${props => setBorderColor( props )};
	padding: ${ props => setSize(props) };
	padding-right: ${props => props.endIcon ? '2.8em' : '0.8em'};

	${ props => props.disabled ? 'background-color: rgba(var(--input-disabled-background-color), 1);' : '' }

	text-indent: ${ props => props.startIcon ? '1.8em' : '0' };

	&::placeholder {
		color: rgba(var( --input-default-color ), 1);
	}

	&:focus {
		border-color: ${ props => setFocusColor( props ) };
	}

	&:hover {
		border-color: rgba(var(--input-text-color), 1);
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
`;

const Label = styled.label`
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: 400;
	font-size: 0.8em;
	color: ${ props => setLabelColor(props) };
	margin-bottom: 0.5em;
`;

const Icon = styled.i`
	position: relative;
	color: rgba(var(--input-default-color), 1);
	right: ${ props => props.startIcon ? '9em' : props.endIcon ? '1.5em' : 'none' };
`;

const HelperText = styled.span`
	display: ${ props => props.helperText ? 'none' : 'block' };
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: 400;
	font-size: 0.65em;
	margin-top: 0.2em;
	color: ${props => setErrorColor( props )};
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`

const Input = ({ startIcon, endIcon, error, label, helperText, ...props }) => {
	return (
		<Section>
			<Label focus={ props.focus } error={ error }>{ label }</Label>
			<InputContainer>
				<StyledInput startIcon={ startIcon } endIcon={ endIcon } error={ error } { ...props } />
				{ startIcon 
					? <Icon startIcon={ true } className="material-icons">{ startIcon }</Icon> 
					: endIcon 
					? <Icon endIcon={ true } className="material-icons">{ endIcon }</Icon>
					: undefined
				}
			</InputContainer>
			<HelperText error={ error }>{ helperText }</HelperText>
		</Section>
	)
};

export { Input };
