import React from 'react';
import { fireEvent, queryByText, render } from '@testing-library/react';

import Email from "./Email";

describe('<Email />', function () {
  it('should renders show email button', () => {
    const value = 'danielgindi@gmail.com';
    const { debug, queryByTestId, queryByText } = render(<Email value={value} />);
debug();
    expect(queryByTestId('show-email-button')).toBeTruthy();
    expect(queryByText('danielgindi@gmail.com')).not.toBe(value);
  });
  /**
   * Check if the right button is displayed
   * Ensure that email text in NOT displayed
   *
   * Useful links:
   * https://jestjs.io/docs/en/expect#not
   */

  it('should renders value when button clicked', () => {
    const value = 'danielgindi@gmail.com';
    const { getByTestId, queryByTestId, queryByText } = render((
      <Email
        value={value}
        />
    ));

    fireEvent.click(getByTestId('show-email-button'));

    expect(
      queryByTestId(document.documentElement, 'show-email-button'),
    ).not.toBeInTheDocument();
    expect(queryByText('danielgindi@gmail.com')).toBeTruthy();

  });
  /**
   * After button was clicked
   * Check that button is NOT displayed (not exists in DOM)
   * Ensure that email text in displayed
   *
   * Useful links:
   * https://github.com/testing-library/jest-dom#tobeinthedocument
   */
});

