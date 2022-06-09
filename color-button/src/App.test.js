import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

describe("button and checkbox", () => {
  test("button has correct initial color", () => {
    render(<App />);

    //find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole("button", {
      name: /change to MidnightBlue/i,
    });

    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  });

  test("button turns MidnightBlue and change text content when clicked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
      name: /change to MidnightBlue/i,
    });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
    expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
  });

  test("initial conditions of the button and the checkbox", () => {
    render(<App />);
    //check that the button starts out enabled
    const colorButton = screen.getByRole("button", {
      name: "Change to MidnightBlue",
    });
    expect(colorButton).toBeEnabled();

    //check that the checkbox starts out unchecked
    const changeColorCheckBox = screen.getByRole("checkbox");

    expect(changeColorCheckBox).not.toBeChecked();
  });

  test("check if button is disabled and background is gray if checkbox is checked", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
      name: /change to MidnightBlue/i,
    });
    const handleStatusButton = screen.getByRole("checkbox");

    fireEvent.click(handleStatusButton);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  });

  test("check if button is enabled and background is MidnightBlue if checkbox is checked and then unchecked", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
      name: /change to MidnightBlue/i,
    });
    const handleStatusButton = screen.getByRole("checkbox");

    fireEvent.click(handleStatusButton);
    fireEvent.click(handleStatusButton);
    fireEvent.click(colorButton);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
