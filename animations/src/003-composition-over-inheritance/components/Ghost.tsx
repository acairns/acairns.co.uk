import { NodeProps, initial, signal } from "@motion-canvas/2d";
import Sprite, { SpriteProps } from "./Sprite";
import { SignalValue, SimpleSignal } from "@motion-canvas/core";

import ghost from "/pacman-ghost-sprite.png";

export interface GhostProps extends NodeProps {
    color?: SignalValue<string>;
}

const redFrames = [
    [0, 0],
    [-150, 0],
];

const yellowFrames = [
    [0, -150],
    [-150, -150],
];

const pinkFrames = [
    [0, -300],
    [-150, -300],
];

const blueFrames = [
    [0, -450],
    [-150, -450],
];

const vulerableFrames = [
    [0, -600],
    [-150, -600],
];

const whiteFrames = [
    [0, -750],
    [-150, -750],
];

export default class Ghost extends Sprite {
    @initial("red")
    @signal()
    public declare readonly initialState: SimpleSignal<string, this>;

    public constructor(props?: GhostProps) {
        let frames = [];

        switch (props.color) {
            case "pink":
                frames = pinkFrames;
                break;
            case "blue":
                frames = blueFrames;
                break;
            case "yellow":
                frames = yellowFrames;
                break;
            case "red":
                frames = redFrames;
                break;
            case "white":
                frames = whiteFrames;
                break;
            default:
                frames = vulerableFrames;
                break;
        }

        super({
            y: 120,
            scale: 0.5,
            size: 140,
            src: ghost,
            frames: frames as any,
            ...props,
        });
    }

    public scare() {
        this.setFrames(vulerableFrames);
    }

    public red() {
        // meh... need to do this quickly...
        // may need a way to quickly reset when scared to the original..
        this.setFrames(redFrames);
    }

    public pink() {
        this.setFrames(pinkFrames);
    }

    public blue() {
        this.setFrames(blueFrames);
    }

    public yellow() {
        this.setFrames(yellowFrames);
    }

    public white() {
        this.setFrames(whiteFrames);
    }
}
