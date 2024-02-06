import { makeScene2D, Rect } from "@motion-canvas/2d";
import {createRef, waitFor, Reference, sequence, range, chain, all} from "@motion-canvas/core";
import Board from "../components/Board";
import {Row, ClevelandZ, Hero, Teewee} from "../components/Tetris";

export default makeScene2D(function* (view) {

    const board = createRef<Board>();
    const lastRow = createRef<Rect>();
    const teewee = createRef<Rect>();
    const cleveland = createRef<Rect>();
    const hero = createRef<Rect>();

    view.add(
        <Rect height={610} width='100%' clip>
            <Board ref={board} cellColor="#ccc" />
            <Row ref={lastRow} y={289} opacity={0} zIndex={999} />
            <Teewee ref={teewee} y={-289 - 34} />
            <ClevelandZ ref={cleveland} y={-289 - 34} />
            <Hero ref={hero} y={-289 - 34} />
        </Rect>
    );

    yield board().show();

    let lowering: any = yield lower(teewee, 5);

    yield* waitFor(1.5);
    yield* sequence(0.2, left(teewee), left(teewee), left(teewee));
    yield* lower(teewee, 14, 0.1);
    yield* lowering;

    yield* chain(
        lower(cleveland, 2),
        left(cleveland),
        lower(cleveland, 16, 0.1)
    );

    lowering = yield lower(hero, 7);

    yield* chain(
        lower(hero, 2),
        right(hero),
        right(hero),
        lower(hero, 12, 0.1),
        right(hero),
        lowering,
    );

    yield* sequence(
        0.1,
        lastRow().opacity(1, 0.1),
        lastRow().opacity(0, 0.1),
        lastRow().opacity(1, 0.1),
        lastRow().opacity(0, 0.1),
        lastRow().opacity(1, 0.1),
        lastRow().opacity(0, 0.1),
        lastRow().opacity(1, 0.1),
        lastRow().opacity(0, 0.1),
        lastRow().opacity(1, 0.1),
        lastRow().opacity(0, 0.1),
        lastRow().opacity(1, 0.1),
        lastRow().opacity(0, 0.1)
    );

    yield* all(
        teewee().y(teewee().position().addY(34).y, 0),
        hero().y(hero().position().addY(34).y, 0),
        cleveland().y(cleveland().position().addY(34).y, 0),
    );

    yield* waitFor(1);

    yield* all(
        teewee().opacity(0, 0.5),
        hero().opacity(0, 0.5),
        cleveland().opacity(0, 0.5),
    );
});

function* down(shape: Reference<Rect>) {
    yield* shape().y(shape().y() + 34, 0);
}

function* left(shape: Reference<Rect>) {
    yield* shape().x(shape().x() - 34, 0);
}

function* right(shape: Reference<Rect>) {
    yield* shape().x(shape().x() + 34, 0);
}

function* rotate(shape: Reference<Rect>) {
    yield* shape().rotation(shape().rotation() + 90, 0);
}

function* lower(shape: Reference<Rect>, rows: number, speed: number = 1) {
    yield* sequence(
        speed,
        shape().opacity(1, 0),
        ...range(rows).map(() => down(shape))
    );
}
