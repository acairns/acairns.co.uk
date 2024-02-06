import { Rect } from "@motion-canvas/2d";
import { range } from "@motion-canvas/core";

export const colourMap = {
    Teewee: "crimson",
    Hero: "mediumseagreen",
    Smashboy: "gold",
    OrangeRicky: "orange",
    BlueRicky: "dodgerblue",
    ClevelandZ: "blueviolet",
    RhodeIslandZ: "#AFDBF5",
};

export const Block = (props: any) => (
    <Rect
        radius={4}
        smoothCorners
        cornerSharpness={0.65}
        gap={20}
        fill="white"
        width={32}
        height={32}
        {...props}
    />
);

export const Row = (props: any) => (
    <Rect
        layout
        gap={2}
        direction="row"
        wrap="wrap"
        spawner={() => range(9).map(() => <Block fill='#aaa' />)}
        {...props}
    />
);

export const Teewee = (props: any) => (
    <Rect {...props}>
        <Block y={-34} fill={colourMap.Teewee} />
        <Block fill={colourMap.Teewee} />
        <Block x={-34} fill={colourMap.Teewee} />
        <Block x={34} fill={colourMap.Teewee} />
    </Rect>
);

export const Smashboy = (props: any) => (
    <Rect {...props}>
        <Block y={-34} fill={colourMap.Smashboy} />
        <Block fill={colourMap.Smashboy} />
        <Block x={-34} fill={colourMap.Smashboy} />
        <Block x={-34} y={-34} fill={colourMap.Smashboy} />
    </Rect>
);

export const OrangeRicky = (props: any) => (
    <Rect {...props}>
        <Block y={-34} fill={colourMap.OrangeRicky} />
        <Block fill={colourMap.OrangeRicky} />
        <Block x={-34} fill={colourMap.OrangeRicky} />
        <Block x={-68} fill={colourMap.OrangeRicky} />
    </Rect>
);

export const BlueRicky = (props: any) => (
    <Rect {...props}>
        <Block y={-34} x={-34} fill={colourMap.BlueRicky} />
        <Block fill={colourMap.BlueRicky} />
        <Block x={34} fill={colourMap.BlueRicky} />
        <Block x={-34} fill={colourMap.BlueRicky} />
    </Rect>
);

export const Hero = (props: any) => (
    <Rect {...props}>
        <Block x={34} fill={colourMap.Hero} />
        <Block fill={colourMap.Hero} />
        <Block x={-34} fill={colourMap.Hero} />
        <Block x={-68} fill={colourMap.Hero} />
    </Rect>
);

export const ClevelandZ = (props: any) => (
    <Rect {...props}>
        <Block y={-34} fill={colourMap.ClevelandZ} />
        <Block x={-34} y={-34} fill={colourMap.ClevelandZ} />
        <Block fill={colourMap.ClevelandZ} />
        <Block x={34} fill={colourMap.ClevelandZ} />
    </Rect>
);

export const RhodeIslandZ = (props: any) => (
    <Rect {...props}>
        <Block y={-34} fill={colourMap.RhodeIslandZ} />
        <Block x={-34} fill={colourMap.RhodeIslandZ} />
        <Block fill={colourMap.RhodeIslandZ} />
        <Block x={34} y={-34} fill={colourMap.RhodeIslandZ} />
    </Rect>
);
