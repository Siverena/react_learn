import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { ChatsList } from "./ChatsList";

describe("ChatsList", () => {
  it("render component", () => {
    render(<ChatsList />);
  });
});
