/**
 * Script for the options UI page
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Settings from 'options_ui/components/Settings';
import store from 'options_ui/store';

ReactDOM.render(
  (
    <Provider store = {store} >
      <Settings maxTabs={5} />
    </Provider>
  ),
  document.getElementById('TabLimit--options_ui')
);
