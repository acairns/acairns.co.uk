import {makeScene2D, Rect} from "@motion-canvas/2d";
import {all, createRef, createRefArray, linear, sequence, waitFor} from "@motion-canvas/core";
import {
    BlueRicky,
    ClevelandZ,
    Hero,
    OrangeRicky,
    RhodeIslandZ,
    Smashboy,
    Teewee,
} from "../components/Tetris";

export default makeScene2D(function* (view) {

    const container = createRef<Rect>();
    const space = 34;
    const blocks = createRefArray<Rect>();

    view.add(
        <Rect ref={container} x={space / 2} y={space / 2}>
            <Hero ref={blocks} x={-space * 3} y={space * 4} />
            <Teewee ref={blocks} x={0} y={space * 4} />
            <OrangeRicky ref={blocks} x={space * 4} y={space * 4} />
            <BlueRicky ref={blocks} x={-space * 4} y={space * 3} />
            <RhodeIslandZ ref={blocks} x={-space} y={space * 3} />
            <Smashboy ref={blocks} x={space * 2} y={space * 3} />
            <ClevelandZ ref={blocks} x={space * 3} y={space * 2} rotation={90} />
            <RhodeIslandZ ref={blocks} x={-space * 5} y={space * 1} rotation={90} />
            <OrangeRicky ref={blocks} x={-space * 3} rotation={-90} />
            <Teewee ref={blocks} x={-space * 2} y={space} rotation={90} />
            <ClevelandZ ref={blocks} y={space} />
            <BlueRicky ref={blocks} x={space * 3} rotation={-90} />
            <OrangeRicky ref={blocks} x={space} rotation={90} />
            <Hero ref={blocks} x={space * 4} y={-space} rotation={90} />
            <Smashboy ref={blocks} x={-space * 4} y={-space} />
            <Hero ref={blocks} x={-space} y={-space} />
            <ClevelandZ ref={blocks} x={space * 2} y={-space * 2} rotation={90} />
            <ClevelandZ ref={blocks} x={-space * 3} y={-space * 2} />
            <RhodeIslandZ ref={blocks} x={-space * 2} y={-space * 3} rotation={90} />
            <RhodeIslandZ ref={blocks} x={space * 2} y={-space * 3} />
            <OrangeRicky ref={blocks} x={-space * 5} y={-space * 4} rotation={180} />
            <BlueRicky ref={blocks} x={0} y={-space * 3} rotation={90} />
            <Hero ref={blocks} y={-space * 5} x={-space * 3} />
            <OrangeRicky ref={blocks} x={-space} y={-space * 5} rotation={180} />
            <BlueRicky ref={blocks} x={space * 3} y={-space * 5} rotation={180} />
        </Rect>
    );

    const copy = container().clone();
    yield container().opacity(0);

    view.add(copy);

    const leftBlocks = [
        copy.children()[0].children()[1],
        copy.children()[0].children()[2],
        copy.children()[0].children()[3],
        copy.children()[3].children()[0],
        copy.children()[3].children()[1],
        copy.children()[3].children()[2],
        copy.children()[3].children()[3],
        copy.children()[7].children()[0],
        copy.children()[7].children()[1],
        copy.children()[7].children()[2],
        copy.children()[7].children()[3],
        copy.children()[8].children()[0],
        copy.children()[8].children()[1],
        copy.children()[8].children()[2],
        copy.children()[8].children()[3],
        copy.children()[14].children()[0],
        copy.children()[14].children()[1],
        copy.children()[14].children()[2],
        copy.children()[14].children()[3],
        copy.children()[15].children()[3],
        copy.children()[17].children()[0],
        copy.children()[17].children()[1],
        copy.children()[17].children()[2],
        copy.children()[20].children()[0],
        copy.children()[20].children()[1],
        copy.children()[20].children()[2],
        copy.children()[20].children()[3],
        copy.children()[22].children()[1],
        copy.children()[22].children()[2],
        copy.children()[22].children()[3],
    ];

    const rightBlocks = [
        copy.children()[2].children()[0],
        copy.children()[2].children()[1],
        copy.children()[2].children()[2],
        copy.children()[2].children()[3],
        copy.children()[5].children()[0],
        copy.children()[5].children()[1],
        copy.children()[6].children()[0],
        copy.children()[6].children()[1],
        copy.children()[6].children()[2],
        copy.children()[6].children()[3],
        copy.children()[11].children()[0],
        copy.children()[11].children()[1],
        copy.children()[11].children()[2],
        copy.children()[11].children()[3],
        copy.children()[12].children()[0],
        copy.children()[13].children()[0],
        copy.children()[13].children()[1],
        copy.children()[13].children()[2],
        copy.children()[13].children()[3],
        copy.children()[16].children()[0],
        copy.children()[16].children()[1],
        copy.children()[16].children()[2],
        copy.children()[16].children()[3],
        copy.children()[19].children()[0],
        copy.children()[19].children()[2],
        copy.children()[19].children()[3],
        copy.children()[24].children()[0],
        copy.children()[24].children()[1],
        copy.children()[24].children()[2],
        copy.children()[24].children()[3],
    ];

    const leftSide = createRef<Rect>();
    const rightSide = createRef<Rect>();
    view.add(<Rect ref={leftSide} />);
    view.add(<Rect ref={rightSide} />);

    leftBlocks.map((block) => block.reparent(leftSide()));
    rightBlocks.map((block) => block.reparent(rightSide()));

    yield all(
        ...leftBlocks.map(function* (block) {
            yield* block.position(block.position().addX(-50), 0.8);
        })
    );

    yield* all(
        ...rightBlocks.map(function* (block) {
            yield* block.position(block.position().addX(50), 0.8);
        })
    );

    yield* waitFor(2);

    yield all(
        ...leftBlocks.map(function* (block) {
            yield* block.position(block.position().addX(50), 0.8);
        })
    );

    yield* all(
        ...rightBlocks.map(function* (block) {
            yield* block.position(block.position().addX(-50), 0.8);
        })
    );

    yield* waitFor(1);
});
