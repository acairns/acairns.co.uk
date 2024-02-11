import {makeProject} from '@motion-canvas/core';

import testing from './scenes/testing?scene';

export default makeProject({
    scenes: [testing],
    variables: {circleFill: 'orange'}
});
