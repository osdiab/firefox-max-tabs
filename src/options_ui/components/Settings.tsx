/**
 * Visual display of settings page
 */
import * as React from 'react';

type Props = {
  maxTabs: number
};

const settingsView: React.StatelessComponent<Props> = (
  props: Props
) => {
  return (
    <main>
      <form>
        <label>
          Maximum number of tabs per window:
          <input
            type='number' min={1} max={100} step={1}
            aria-valuemin={1} aria-valuemax={100}
            value={props.maxTabs}
            aria-valuenow={props.maxTabs}
          />
        </label>
      </form>
    </main>);
};

export default settingsView;
