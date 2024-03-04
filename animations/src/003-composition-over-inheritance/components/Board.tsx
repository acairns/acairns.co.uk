import { Txt, Icon, Rect, RectProps } from "@motion-canvas/2d/lib/components";
import { colorSignal, initial, signal } from "@motion-canvas/2d/lib/decorators";
import { range, sequence } from "@motion-canvas/core";
import { SignalValue, SimpleSignal } from "@motion-canvas/core/lib/signals";
import { ColorSignal, PossibleColor } from "@motion-canvas/core/lib/types";

export interface BoardProps extends RectProps {
    rows?: SignalValue<number>;
    columns?: SignalValue<number>;
    cellColor?: SignalValue<PossibleColor>;
}

export default class Board extends Rect {
    @initial(18)
    @signal()
    public declare readonly rows: SimpleSignal<number, this>;

    @initial(9)
    @signal()
    public declare readonly columns: SimpleSignal<number, this>;

    @initial("#222")
    @colorSignal()
    public declare readonly cellColor: ColorSignal<this>;

    public constructor(props?: BoardProps) {
        super({
            layout: true,
            gap: 2,
            direction: "row",
            wrap: "wrap",
            height: () => {
                return 32 * this.rows() + this.gap().x * (this.rows() - 1);
            },
            width: () => {
                return 32 * this.columns() + this.gap().x * (this.columns() - 1);
            },
            spawner: () =>
                range(this.rows() * this.columns()).map(() => (
                    <Rect
                        radius={4}
                        smoothCorners
                        cornerSharpness={0.65}
                        gap={20}
                        fill={() => this.cellColor()}
                        width={32}
                        height={32}
                        opacity={0}
                    />
                )),
            ...props,
        });
    }

    public *show() {
        yield* this.children()
            .map(function* (cell) {
                yield* cell.opacity(1, 0);
            });
    }

    public *begin(duration: number = 1) {
        yield* sequence(
            duration / this.children().length,
            ...this.children()
                .slice()
                .reverse()
                .map(function* (cell) {
                    yield* cell.opacity(1, 0.1);
                })
        );
    }

    public *finish(duration: number = 1) {
        yield* sequence(
            duration / this.children().length,
            ...this.children().map(function* (cell) {
                yield* cell.opacity(0, 0.1);
            })
        );
    }
}
