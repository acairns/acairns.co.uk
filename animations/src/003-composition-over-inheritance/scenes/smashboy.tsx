import { makeScene2D, Node } from "@motion-canvas/2d";
import { Smashboy } from "../components/Tetris";
import {all, createRef, sequence, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {

    const smashboy = createRef<Node>();
    view.add(<Smashboy ref={smashboy} x={17} y={17} />);

    yield* waitFor(1);

    smashboy().children().map((block: any) => block.save());

    yield* all(
        smashboy().children()[0].position([17, -51], 0.8),
        smashboy().children()[1].position([17, 17], 0.8),
        smashboy().children()[2].position([-51, 17], 0.8),
        smashboy().children()[3].position([-51, -51], 0.8)
    );

    yield* waitFor(1);

    yield* all(
        ...smashboy().children().map((block: any) => block.restore(1))
    );

    yield* waitFor(1);
});