import { Img, Rect, RectProps } from "@motion-canvas/2d/lib/components";
import {
    SignalValue,
    createRef,
    createSignal,
    loop,
    loopFor,
    waitFor,
} from "@motion-canvas/core";

export interface SpriteProps extends RectProps {
    src?: SignalValue<string>;
    frames: SignalValue<[[number, number]]>;
}

export default class Sprite extends Rect {
    private readonly image = createRef<Img>();
    protected frames: any = [];

    private readonly current = createSignal(0);

    public constructor(props?: SpriteProps) {
        super({
            clip: true,
            ...props,
        });

        this.frames = props.frames;

        this.add(
            <Img
                ref={this.image}
                src={props.src}
                offset={[-1, -1]}
                x={-props.width / 2}
                y={-props.height / 2}
            />
        );

        this.frame(this.current());
    }

    public frame(i: number) {
        const frame = this.frames[i];

        this.image().x(-this.width() / 2 + frame[0]);
        this.image().y(-this.height() / 2 + frame[1]);
    }

    public *loopFor(seconds: number, framerate: number) {
        return yield* loopFor(seconds, () =>
            loop(
                this.frames.length,
                function* (i: number) {
                    this.frame(i);
                    yield* waitFor(framerate);
                }.bind(this)
            )
        );
    }

    protected setFrames(frames: any) {
        this.frames = frames;
    }
}
