import { render, screen } from "@testing-library/react";
import ResCard, { withDiscountInfo } from "../Components/ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render Restaurant Card with props data", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Sweet Truth - Cake and Desserts");
  expect(restaurantName).toBeInTheDocument();
});

const WrappedResCard = withDiscountInfo(ResCard);

it("should render Restaurant Card with discount info", () => {
  const { container } = render(<WrappedResCard resData={MOCK_DATA} />);
//   console.log(container.innerHTML);

  // Optional: Test for specific content
  const discountInfo = screen.getByText("50% OFF UPTO ₹100");
  expect(discountInfo).toBeInTheDocument();
});
