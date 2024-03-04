import Player from "../components/Player";
import {useState} from "react";

export default function Testing() {
    const [variables, setVariables] = useState('{"circleFill":"green"}');

    return (
        <>
            <Player project='testing' variables={variables} />
            <button onClick={() => setVariables('{"circleFill":"orange"}')}>Click me!</button>
        </>
    );
}
