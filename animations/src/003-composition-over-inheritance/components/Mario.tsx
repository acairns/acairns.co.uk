import {
    Txt,
    Icon,
    Rect,
    RectProps,
    Img,
} from "@motion-canvas/2d/lib/components";
import { colorSignal, initial, signal } from "@motion-canvas/2d/lib/decorators";
import {
    all,
    linear,
    loop,
    range,
    sequence,
    waitFor,
} from "@motion-canvas/core";
import {
    SignalValue,
    SimpleSignal,
    createSignal,
} from "@motion-canvas/core/lib/signals";
import { ColorSignal, PossibleColor } from "@motion-canvas/core/lib/types";

import mario from "/mario.png";

const marioSprite: any = {
    walking: {
        1: {
            x: 0,
            y: 0,
            width: 16,
            height: 27,
        },
        2: {
            x: 18,
            y: 0,
            width: 16,
            height: 27,
        },
        3: {
            x: 35,
            y: 0,
            width: 14,
            height: 27,
        },
    },
    running: {
        1: {
            x: 0,
            y: 29,
            width: 16,
            height: 27,
        },
        2: {
            x: 18,
            y: 29,
            width: 15,
            height: 27,
        },
        3: {
            x: 35,
            y: 29,
            width: 14,
            height: 27,
        },
    },
    jumping: {
        1: {
            x: 74,
            y: 29,
            width: 16,
            height: 26,
        },
    },
};

const i = createSignal(1);
const cycle = "walking";
const pixel = 8;

export interface MarioProps extends RectProps {
    cycle?: SignalValue<string>;
    frame?: SignalValue<number>;
}

export default class Mario extends Rect {
    @initial("walking")
    @signal()
    public declare readonly cycle: SimpleSignal<string, this>;

    @initial(1)
    @signal()
    public declare readonly frame: SimpleSignal<number, this>;

    public constructor(props?: MarioProps) {
        super({
            clip: true,
            width: () => marioSprite[this.cycle()][this.frame()].width * pixel,
            height: () => marioSprite[this.cycle()][this.frame()].height * pixel,
            ...props,
        });

        this.insert(
            <Img
                src={mario}
                offset={[-1, -1]}
                x={() =>
                    -(
                        (marioSprite[this.cycle()][this.frame()].width * pixel) / 2 +
                        marioSprite[this.cycle()][this.frame()].x * pixel
                    )
                }
                y={() =>
                    -(
                        (marioSprite[this.cycle()][this.frame()].height * pixel) / 2 +
                        marioSprite[this.cycle()][this.frame()].y * pixel
                    )
                }
            />
        );
    }

    public stop() {
        this.cycle("walking");
        this.frame(3);
    }

    public *walk(duration: number) {
        this.cycle("walking");
        const frameDuration = 0.1; // how long until the next frame of a cycle..

        // @todo ... get the number of frames in the cycle for the % mod, and use that over hard-coded 3

        yield* loop(duration / frameDuration, (ii) =>
            all(
                sequence(frameDuration, this.frame((ii % 3) + 1, 0)),
                this.position.x(this.position.x() - 35, frameDuration, linear)
            )
        );

        this.stop();
    }

    public *jump(duration: number) {
        this.cycle("jumping");
        this.frame(1);
        yield* waitFor(duration);
        this.stop();
    }

    public *pace(duration: number = 1.2) {
        this.cycle("walking");
        const frameDuration = 0.1; // how long until the next frame of a cycle..
        const stepSize = 20;

        // @todo ... get the number of frames in the cycle for the % mod, and use that over hard-coded 3

        yield* loop(duration / frameDuration, (ii) =>
            all(
                sequence(frameDuration, this.frame((ii % 3) + 1, 0)),
                this.position.x(this.position.x() - stepSize, frameDuration, linear)
            )
        );

        this.stop();

        yield* waitFor(1);

        yield this.scale([-0.4, 0.4], 0);

        yield* waitFor(1);

        yield* loop(duration / frameDuration, (ii) =>
            all(
                sequence(frameDuration, this.frame((ii % 3) + 1, 0)),
                this.position.x(this.position.x() + stepSize, frameDuration, linear)
            )
        );
        this.stop();

        yield* waitFor(1);

        yield this.scale([0.4, 0.4], 0);

        yield* waitFor(1);
    }
}
