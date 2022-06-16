import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "./Form";

describe("Form", () => {
  it("render component", () => {
    render(<Form />);
  });
});
