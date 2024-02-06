import { makeScene2D, Circle, SVG, Img } from "@motion-canvas/2d";
import {createRef, all, loop, waitFor, sequence, Reference, chain} from "@motion-canvas/core";
import me1 from "/me1.png";
import me2 from "/me2.png";
import me3 from "/me3.png";
import srcHand from '/me/hand.svg';

export default makeScene2D(function* (view) {
    const image = createRef<Img>();
    const hand = createRef<Img>();

    view.add(
        <>
            <Img ref={image} src={me1} width="100%" />
            <Img ref={hand} src={srcHand} scale={0.5} x={-60} y={85} offset={[0, 1]} opacity={0} />
        </>
    );

    yield hand().opacity(1, 0.4);

    yield chain(
        hand().rotation(-10, 0.2),
        hand().rotation(5, 0.3),
        hand().rotation(-10, 0.2),
        hand().rotation(5, 0.3),
        hand().rotation(-10, 0.2),
        hand().rotation(5, 0.3),
        hand().rotation(-10, 0.2),
        hand().rotation(10, 0.5),
        all(
            hand().scale(0.4, 0.4),
            hand().rotation(-20, 0.4),
            hand().opacity(0, 0.4),
        )
    );

    yield* loop(10, function* (i){
        yield* waitFor(1);

        if (Math.random() < 0.7) {
            yield* blink(image);
        }

        yield* waitFor(2);

        // 50/50 chance of adding an extra pause
        if (Math.random() < 0.5) {
            yield* waitFor(1);
        }

        if (Math.random() < 0.3) {
            yield* wink(image);
            yield* waitFor(1);
        }
    });

});

function* wink(image: Reference<Img>) {
    yield* sequence(
        1,
        all(
            image().src(me2, 0),
            image().rotation(3, 0),
            image().x(3, 0)
        ),
        all(
            image().src(me1, 0),
            image().rotation(0, 0),
            image().x(0, 0)
        )
    );
}

function* blink(image: Reference<Img>) {
    yield* sequence(
        0.1,
        image().src(me3, 0),
        image().src(me1, 0),
    );
}