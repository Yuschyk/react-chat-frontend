import React from 'react';
import {withA11y } from '@storybook/addon-a11y';
import { addDecorator } from '@storybook/react';

import { GlobalStyleStorybook} from './GlobalStyle';

addDecorator(story => (
  <>
    {story()}
    <GlobalStyleStorybook />
  </>
))

addDecorator(withA11y)
