import React from 'react';
import PageTitle from "./PageTitle";
import { render } from "@testing-library/react";

describe('<PageTitle />', function () {
  it('should match the snapshot', () => {
    const { container: { firstChild } } = render(<PageTitle label={'Github user details'} />);
    expect(firstChild).toMatchSnapshot();
  });
  /**
   * Write a snapshot test for PageTitle component
   * Don't forget to add snapshot file to the git
   */
});
