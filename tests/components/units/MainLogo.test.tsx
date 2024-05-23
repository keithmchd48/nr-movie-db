/* eslint-disable testing-library/no-debugging-utils */
// @ts-nocheck
import { it, expect, describe } from 'vitest';
import {render, screen} from '@testing-library/react';
import MainLogo from 'components/units/MainLogo';
import {MemoryRouter} from 'react-router-dom';
import React from 'react';

describe('MainLogo', () => {
  it('should', () => {
    render(
      <MemoryRouter>
        <MainLogo />
      </MemoryRouter>
    );
    screen.debug();
  })
})