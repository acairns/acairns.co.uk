import { makeScene2D } from "@motion-canvas/2d";
import {createRef, waitFor} from "@motion-canvas/core";
import Mario from "../components/Mario";

export default makeScene2D(function* (view) {

    const mario = createRef<Mario>();

    view.add(
        <Mario ref={mario} x={120} scale={0.4} />
    );

    yield mario().stop();

    yield* mario().pace();
});
