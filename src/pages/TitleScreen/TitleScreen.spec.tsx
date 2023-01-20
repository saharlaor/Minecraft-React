import React from 'react';
import ReactDOM from "react-dom";

import { TitleScreen } from './TitleScreen';

test('Spec TitleScreen', function () {
    const div = document.createElement('div');
    ReactDOM.render(<TitleScreen startHandler={() => {}} />, div);
});
