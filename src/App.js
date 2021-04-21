import './App.css';
import StyledButton from './styled-components/StyledButton';

// Common Props

// children: array 
//    Optional (see text & iconName).

// onClick: function
//    The clickHandler function passed down to StyledButton.

// variant: string
//    determines 3 core stylings (“Contained”, “inverted”, “skeleton/borderless”)
//    These core stylings can be modified by adding a color to the variant string (ContainedColor).
//    i.e. ContainedRed, invertedRed, skeletonRed
//    Color modifies the core stylings accordingly.
//    Defaulted to Contained + primaryBlue color when variant prop isn't provided

// text: string, 
//    The text of a button saves 1 line of code if used by not needing </StyledButton>

// iconName: string
//    The name of the icon based on the icons imported into icons.js. 
//    StyledButton sets this prop as its default for curIcon state to allow for 
//    dynamic switching between Filled and Outline icon versions.
//    Note: Icons in this repo uses only AntD icons because it has both outlined and filled
//    versions of their icons. FontAwesome sells this as a premium option.

// iconPosition: string, one of ["top", "right", "bottom", "left", "center"]
//    Determines where the icon appears relative to a button's text.
//    "center" is used when no text is wanted on a button

// Uncommon Props

// activatable: boolean, allows user to toggle “active” state
// round: boolean, changes border-radius & padding to look round
// submit: boolean, determines the type of button it is, "submit" & "button"

function App() {
  return (
    <div className="App">
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
        />
        <StyledButton
          activatable
          variant="contained"
          color="orange"
          startIcon="AiFillFilter"
          column
          text="Bulk Edit"
        />
        <StyledButton
          activatable
          variant="contained"
          color="purple"
          endIcon="AiFillFilter"
          column
          text="Bulk Filter"
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
          round
          iconOnly="AiFillFilter"
        />
        <StyledButton
          activatable
          variant="outlined"
          color="orange"
          startIcon="AiFillFilter"
          column
          text="Bulk Edit"
        />
        <StyledButton
          activatable
          variant="outlined"
          color="purple"
          endIcon="AiFillFilter"
          column
          text="Bulk Filter"
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
          round
          iconOnly="AiFillFilter"
        />
        <StyledButton
          activatable
          variant="minimal"
          color="orange"
          startIcon="AiFillFilter"
          column
          text="Bulk Filter"
        />
        <StyledButton
          activatable
          variant="minimal"
          color="purple"
          endIcon="AiFillFilter"
          column
          text="Bulk Filter"
        />
      </div>
      {/* <StyledButton
          activatable
          variant="contained"
          color="purple"
          iconOnly="AiFillFilter"
          round
          column
          text="Bulk Filter"
        /> */}
    </div>
  );
}

export default App;
