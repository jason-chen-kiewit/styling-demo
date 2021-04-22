import StyledButton from "../styled-components/StyledButton/StyledButton";

export const DeleteButton = () => {
  return <StyledButton variant="contained" color="red" iconOnly="delete" />;
};

export const EditButton = () => {
  return (
    <StyledButton
      variant="outlined"
      color="green"
      startIcon="AiFillEdit"
      text="Edit"
      activatable
    />
  );
};

export const PlusIconButton = () => {
  return (
    <StyledButton
      variant="outlined"
      color="blue"
      iconOnly="plus"
      round
      activatable
    />
  );
};

export const SaveIconButton = () => {
  return (
    <StyledButton
      variant="minimal"
      color="neutral"
      iconOnly="save"
      size="large"
      round
    />
  );
};

export const BackButton = () => {
  return (
    <StyledButton
      variant="minimal"
      color="neutral"
      startIcon="AiOutlineLeft"
      text="Back"
    />
  );
};

export const NextButton = () => {
  return (
    <StyledButton
      variant="minimal"
      color="neutral"
      endIcon="AiOutlineRight"
      text="Next"
    />
  );
};

const Buttons = {
  DeleteButton,
  EditButton,
  PlusIconButton,
  SaveIconButton,
  BackButton,
  NextButton,
};

export default Buttons;
