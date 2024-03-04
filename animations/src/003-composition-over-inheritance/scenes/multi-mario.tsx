import { Img, Rect, makeScene2D } from "@motion-canvas/2d";
import {createRef, linear, sequence, waitFor} from "@motion-canvas/core";
import Mario from "../components/Mario";

import pipe from "/mario-pipe.png";
import marios from "/mario-more.png";

export default makeScene2D(function* (view) {

    const mario1 = createRef<Mario>();
    const mario2 = createRef<Mario>();

    view.add(
        <>
            <Rect ref={mario1} clip width={128} height={224} x={150} y={50} scale={0.5}>
                <Img
                    src={marios}
                    offset={[-1, -1]}
                    x={-64 - 128 / 2}
                    y={-4128 - 224 / 2}
                />
            </Rect>
            <Rect ref={mario2} clip width={128} height={224} x={-150} y={50} scale={0.5}>
                <Img
                    src={marios}
                    offset={[-1, -1]}
                    x={-2624 - 128 / 2}
                    y={-928 - 224 / 2}
                />
            </Rect>
            <Img src={pipe} scale={0.5} y={65} x={-150} />
            <Img src={pipe} scale={0.5} y={65} x={150} />
        </>
    );

    yield* mario2().y(-65, 0.8, linear);
    yield* waitFor(1);

    yield* mario2().y(50, 0.8, linear);
    yield* waitFor(1);

    yield* mario1().y(-65, 0.8, linear);
    yield* waitFor(1);

    yield* mario1().y(50, 0.8, linear);
    yield* waitFor(1);
});
