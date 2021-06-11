import styled from 'styled-components';

/*
* Requirements:
*   -- :hover, :focus
*   -- error
*   -- disabled
*   helperText: string
*   startIcon, endIcon
*   value ( built-in )
*   size: sm, md
*   fullWidth
*   multiline ( built-in )
*   TODO: label on focus should be blue
* */


const Inpt = ({ startIcon, endIcon, multiline, ...rest }) => {
  return <input {...rest} multiline={multiline}/>
};

const setFocusColor = ({ error }) => {
  return ( error ) ? 'rgba(var(--input-error-color), 1)' : 'rgba(var(--primary-color), 1)';
};

const setBorderColor = ({ disabled, error }) => {
  if ( disabled ) {
    return 'rgba(var(--input-disabled-color), 1)';
  } else if ( error ) {
    return 'rgba(var(--input-error-color), 1)'; 
  } else {
    return 'rgba(var(--input-default-color), 1)'; 
  }
};

const setErrorColor = ({ error }) => {
  return ( error ) ? 'rgba(var(--input-error-color), 1)' : 'rgba(var(--input-default-color), 1)';
}

const setLabelColor = ({ focus, error }) => {
  return ( error ) ? 'rgba(var(--input-error-color), 1)' : 'rgba(var(--input-text-color), 1)';
}

const StyledInput = styled(Inpt)`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  padding: 1em 0.8em;

  color: rgba(var(--input-text-color), 1);
  width: 15em;
  border: 1px solid ${props => setBorderColor( props )};
  border-radius: 0.5em;

  ${ props => props.disabled ? 'background-color: rgba(var(--input-disabled-background-color), 1);' : '' }

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
`;

const Label = styled.label`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 0.8em;
  color: ${ props => setLabelColor(props) };
  margin-bottom: 0.5em;

  &:focus {
    color: rgba(var(--primary-color), 1);
  }
`;

const HelperText = styled.span`
  display: ${ props => props.helperText ? 'none' : 'block' };
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 0.65em;
  margin-top: 0.2em;
  color: ${props => setErrorColor( props )};
`;

const Input = ( props ) => {
  return (
    <Section>
      <Label focus={props.focus} error={props.error}>{props.label}</Label>
      <StyledInput {...props}></StyledInput>
      <HelperText error={props.error}>{ props.helperText }</HelperText>
    </Section>
  )
};

export { Input };
