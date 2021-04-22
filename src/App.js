import './App.css';
import StyledButton from './styled-components/StyledButton/StyledButton';
import Buttons from './premadeComponents/Buttons';

function App() {
  return (
    <div className="App">
      <div className="container premade-buttons">
        Premade Buttons
        <Buttons.DeleteButton />
        <Buttons.PlusIconButton />
        <Buttons.EditButton />
        <Buttons.SaveIconButton />
        <Buttons.BackButton />
        <Buttons.NextButton />
      </div>
      
      <div className="container contained">
        Contained
        <StyledButton
          activatable
          variant="contained"
          color="neutral"
          text="Neutral"
        />
        <StyledButton
          activatable
          variant="contained"
          color="blue"
          endIcon="AiFillEdit"
          text="Blue"
        />
        <StyledButton
          activatable
          variant="contained"
          color="red"
          startIcon="AiFillFilter"
          text="Red"
        />
        <StyledButton
          activatable
          variant="contained"
          color="green"
          round
          iconOnly="AiFillFilter"
          size="small"
        />
        <StyledButton
          activatable
          variant="contained"
          color="orange"
          startIcon="AiFillFilter"
          text="Bulk Edit"
          size="small"
        />
        <StyledButton
          activatable
          variant="contained"
          color="purple"
          endIcon="AiFillFilter"
          text="Bulk Filter"
          size="large"
          disabled
        />
      </div>
      <div className="container outlined">
        Outlined
        <StyledButton
          activatable
          variant="outlined"
          color="neutral"
          text="Neutral"
        />
        <StyledButton
          activatable
          variant="outlined"
          color="blue"
          endIcon="AiFillEdit"
          text="Blue"
        />
        <StyledButton
          activatable
          variant="outlined"
          color="red"
          startIcon="AiFillFilter"
          text="Red"
        />
        <StyledButton
          activatable
          variant="outlined"
          color="green"
          // round
          iconOnly="AiFillFilter"
        />
        <StyledButton
          activatable
          variant="outlined"
          color="orange"
          startIcon="AiFillFilter"
          text="Bulk Edit"
          size="small"
        />
        <StyledButton
          activatable
          variant="outlined"
          color="purple"
          endIcon="AiFillFilter"
          text="Bulk Filter"
          size="large"
          disabled
        />
      </div>
      <div className="container minimal">
        Minimal
        <StyledButton
          activatable
          variant="minimal"
          color="neutral"
          text="Neutral"
        />
        <StyledButton
          activatable
          variant="minimal"
          color="red"
          text="Red"
          endIcon="AiOutlineRight"
        />
        <StyledButton
          activatable
          variant="minimal"
          color="blue"
          text="Blue"
          startIcon="AiOutlineLeft"
        />
        <StyledButton
          activatable
          variant="minimal"
          color="green"
          // round
          iconOnly="AiFillFilter"
          size="large"
        />
        <StyledButton
          activatable
          variant="minimal"
          color="orange"
          startIcon="AiFillFilter"
          text="Bulk Filter"
          size="small"
        />
        <StyledButton
          activatable
          variant="minimal"
          color="purple"
          endIcon="AiFillFilter"
          text="Bulk Filter"
          size="large"
          disabled
        />
      </div>
    </div>
  );
}

export default App;
