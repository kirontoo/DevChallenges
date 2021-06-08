import styled from 'styled-components';

/*
* Requirements:
*   :hover, :focus
*   error
*   disabled
*   helperText: string
*   startIcon, endIcon
*   value ( built-in )
*   size: sm, md
*   fullWidth
*   multiline ( built-in )
*
* Colors:
*   --hover-text-color: no focus, regular
*   &:hover: 51, 51, 51
*   &:focus: --primary-color
*   error:focus : --secondary-color
*   error:hover : same as above
*   error: --secondary-color
*   input disabled: 224, 224, 224
*   helperText: --hover-text-color
*   helperText error: --danger-color
*   icon: --hover-text-color
*   placeholder: --hover-text-color
*   text: 51, 51, 51
* */

const inpt = ({ className, startIcon, endIcon, placeholder }) => {
  return <input className={className} placeholder={placeholder} />
}

const StyledInput = styled(inpt)`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  padding: 1em 0.5em;
  color: rgba(var(--input-text-color), 1);

  &::placeholder {
    color: rgba(var( --input-default-color ), 1);
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Label = styled.label`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 0.8em;
  color: rgba(var(--input-text-color), 1);
  margin-bottom: 0.5em;
`

const Input = ( props ) => {
  return (
    <Section>
      <Label>{props.label}</Label>
      <StyledInput {...props}></StyledInput>
    </Section>
  )
}

export { Input };
