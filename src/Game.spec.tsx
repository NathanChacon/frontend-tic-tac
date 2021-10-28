import { render, fireEvent, cleanup } from "@testing-library/react";
import Game from "./Game";

afterEach(cleanup)

it("renders game headings", () => {
  const { getByText } = render(<Game />);
  getByText("TIC-TAC-LIVEN");
});

it("renders board and check for step counter update", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Expect "Current step: 0" to be found
  getByText("Current step: 0");

  const square0 = getByTestId(`square-0`);
  fireEvent.click(square0);

  // Expect "Current step: 1" to be found
  getByText("Current step: 1");
});

it("should player X be winner", () => {
  
  const { getByText, getByTestId, findByText} = render(<Game />);

  const square0 = getByTestId(`square-0`);
  const square4 = getByTestId(`square-4`);
  const square8 = getByTestId(`square-8`);

  const square1 = getByTestId(`square-1`);
  const square2 = getByTestId(`square-2`);

  fireEvent.click(square0)
  fireEvent.click(square1)
  fireEvent.click(square4)
  fireEvent.click(square2)
  fireEvent.click(square8)

  getByText("Winner: X");
})

it("should player O be winner", async () => {
  const { getByText, getByTestId } = render(<Game />);

  const square0 = getByTestId(`square-0`);
  const square1 = getByTestId(`square-1`);
  const square2 = getByTestId(`square-2`);

  const square3 = getByTestId(`square-3`);
  const square5 = getByTestId(`square-5`);
  const square8 = getByTestId(`square-8`);

  fireEvent.click(square0)
  fireEvent.click(square2)
  fireEvent.click(square1)
  fireEvent.click(square5)
  fireEvent.click(square3)
  fireEvent.click(square8)

  getByText("Winner: O");
})
