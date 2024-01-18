export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //ButtonContainer defaults to "menu"
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
