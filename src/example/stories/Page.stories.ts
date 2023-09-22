import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const loginButton = await canvas.getByRole('button', {
      name: /log in/i,
    });
    await userEvent.click(loginButton);
  },
};
