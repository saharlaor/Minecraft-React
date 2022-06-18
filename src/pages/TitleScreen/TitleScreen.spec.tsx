import React from 'react';
import {TitleScreen} from './TitleScreen';
import ReactDOM from "react-dom";

test('Spec TitleScreen', function () {
    const div = document.createElement('div');
    ReactDOM.render(<TitleScreen startHandler={() => {}} />, div);
});
