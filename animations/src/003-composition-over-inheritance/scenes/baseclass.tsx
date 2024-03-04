import {Circle, Line, Rect, makeScene2D} from "@motion-canvas/2d";
import {
    all,
    createRef,
    createRefArray,
    delay,
    sequence,
    waitFor,
} from "@motion-canvas/core";
import Ghost from "../components/Ghost";

export default makeScene2D(function* (view) {

    const ghosts = createRefArray<Ghost>();
    const circles = createRefArray<Circle>();
    const lines = createRefArray<Line>();
    const container = createRef<Rect>();

    view.add(
        <>
        <Rect scale={0.5} y={-25}>
            <Rect ref={container}>
                <Line
                    ref={lines}
                    lineWidth={4}
                    stroke="white"
                    points={[
                        [0, 0],
                        [0, 50],
                        [-300, 50],
                        [-300, 100],
                    ]}
                />

                <Line
                    ref={lines}
                    lineWidth={4}
                    stroke="white"
                    points={[
                        [0, 0],
                        [0, 50],
                        [-100, 50],
                        [-100, 100],
                    ]}
                />

                <Line
                    ref={lines}
                    lineWidth={4}
                    stroke="white"
                    points={[
                        [0, 0],
                        [0, 50],
                        [100, 50],
                        [100, 100],
                    ]}
                />

                <Line
                    ref={lines}
                    lineWidth={4}
                    stroke="white"
                    points={[
                        [0, 0],
                        [0, 50],
                        [300, 50],
                        [300, 100],
                    ]}
                />

                <Circle
                    ref={circles}
                    opacity={0}
                    size={24}
                    y={-50}
                    fill="blue"
                    lineWidth={3}
                />
                <Circle
                    ref={circles}
                    opacity={0}
                    size={24}
                    y={-50}
                    fill="blue"
                    lineWidth={3}
                />
                <Circle
                    ref={circles}
                    opacity={0}
                    size={24}
                    y={-50}
                    fill="blue"
                    lineWidth={3}
                />
                <Circle
                    ref={circles}
                    opacity={0}
                    size={24}
                    y={-50}
                    fill="blue"
                    lineWidth={3}
                />

                <Ghost ref={ghosts} zIndex={999} color="blue" x={-300} y={160} />
                <Ghost ref={ghosts} zIndex={999} color="pink" x={-100} y={160} />
                <Ghost ref={ghosts} zIndex={999} color="yellow" x={100} y={160} />
                <Ghost ref={ghosts} zIndex={999} color="red" x={300} y={160} />
                <Ghost ref={ghosts} zIndex={999} color="white" y={-50} />
            </Rect>
        </Rect>
        </>
    );

    const whiteGhost = ghosts[4];

    const tasks = [];

    tasks.push(yield ghosts[0].loopFor(Infinity, 0.2));
    tasks.push(yield ghosts[1].loopFor(Infinity, 0.2));
    tasks.push(yield ghosts[2].loopFor(Infinity, 0.2));
    tasks.push(yield ghosts[3].loopFor(Infinity, 0.2));
    tasks.push(yield ghosts[4].loopFor(Infinity, 0.2));

    whiteGhost.scare();

    yield all(...circles.map((circle) => circle.opacity(1, 0)));

    yield* sequence(
        0.6,
        sequence(
            0.5,
            circles[0].y(50, 0.7),
            circles[0].x(-300, 0.7),
            circles[0].y(136, 0.7),
            delay(0, () => ghosts[0].scare())
        ),
        sequence(
            0.5,
            circles[1].y(50, 0.7),
            circles[1].x(-100, 0.7),
            circles[1].y(136, 0.7),
            delay(0, () => ghosts[1].scare())
        ),
        sequence(
            0.5,
            circles[2].y(50, 0.7),
            circles[2].x(100, 0.7),
            circles[2].y(136, 0.7),
            delay(0, () => ghosts[2].scare())
        ),
        sequence(
            0.5,
            circles[3].y(50, 0.7),
            circles[3].x(300, 0.7),
            circles[3].y(136, 0.7),
            delay(0, () => ghosts[3].scare())
        )
    );

    yield all(...circles.map((circle) => circle.x(0, 0)));
    yield all(...circles.map((circle) => circle.y(-50, 0)));

    yield circles[0].fill('#64FAFE', 0);
    yield circles[1].fill('#F6B3FC', 0);
    yield circles[2].fill('#F3B352', 0);
    yield circles[3].fill('#DD3016', 0);

    yield* waitFor(1);
    yield whiteGhost.white();

    yield* sequence(
        0.6,
        sequence(
            0.5,
            circles[0].y(50, 0.7),
            circles[0].x(-300, 0.7),
            circles[0].y(136, 0.7),
            delay(0, () => ghosts[0].blue())
        ),
        sequence(
            0.5,
            circles[1].y(50, 0.7),
            circles[1].x(-100, 0.7),
            circles[1].y(136, 0.7),
            delay(0, () => ghosts[1].pink())
        ),
        sequence(
            0.5,
            circles[2].y(50, 0.7),
            circles[2].x(100, 0.7),
            circles[2].y(136, 0.7),
            delay(0, () => ghosts[2].yellow())
        ),
        sequence(
            0.5,
            circles[3].y(50, 0.7),
            circles[3].x(300, 0.7),
            circles[3].y(136, 0.7),
            delay(0, () => ghosts[3].red())
        )
    );

    yield* waitFor(1);
});
