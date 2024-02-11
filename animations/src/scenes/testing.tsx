import { makeScene2D, Circle } from "@motion-canvas/2d";
import {createRef, useScene, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const color = useScene().variables.get('circleFill', 'blue');

    const circle = createRef<Circle>();
    view.add(
        <Circle ref={circle} size={256} fill={color} />
    );

    yield* circle().scale(2, 1);
    yield* waitFor(1);
    yield* circle().scale(1, 1);
    yield* waitFor(1);
});
