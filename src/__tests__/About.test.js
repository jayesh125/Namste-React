import { render, screen } from "@testing-library/react";
import About from "../Components/About";
import "@testing-library/jest-dom"

test("renders About component without crashing", () => {
    render(<About />);

    const heading = screen.getByText("About Us (Lifting Up State)")

    expect(heading).toBeInTheDocument(); 
});

it("should check span btns", () => {
    render(<About />);

    const buttons = screen.getAllByText("Open");
    expect(buttons).toHaveLength(5);
})