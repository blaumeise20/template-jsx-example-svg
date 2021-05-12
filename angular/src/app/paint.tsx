import * as jsxt from "template-jsx";
import { getPaintOptions, colors } from "./seedrandom";

export function paint(seed: string): jsxt.Element {
    const { layers, angle, length, randomAngle, randomLength, random } = getPaintOptions(seed);

    function paintBranch(x1: number, y1: number, currentAngle: number, currentLength: number, currentLayer: number): jsxt.Element {
        if (currentLayer < layers) {
            // Calculate branch end
            const x2 = x1 + (Math.cos(currentAngle * Math.PI / 180) * currentLength);
            const y2 = y1 + (Math.sin(currentAngle * Math.PI / 180) * currentLength);

            return <>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors[currentLayer * 3]} stroke-width={layers - currentLayer} />
                {paintBranch(
                    x2,
                    y2,
                    currentAngle - angle + (random() - 0.5) * randomAngle,
                    currentLength * length + (random() - 0.5) * randomLength, currentLayer + 1
                )}
                {paintBranch(
                    x2,
                    y2,
                    currentAngle + angle + (random() - 0.5) * randomAngle,
                    currentLength * length + (random() - 0.5) * randomLength, currentLayer + 1
                )}
            </>;
        }

        // Reached leaves, return empty fragment
        else return <></>;
    }

    // Return trunk
    return paintBranch(300, 500, -90, 100, 0);
}
