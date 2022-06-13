import { render, screen, fireEvent } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";

describe("Summary", () => {
  it("should check if checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should check if checkbox enables button on first click and then disables button on second click", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});
