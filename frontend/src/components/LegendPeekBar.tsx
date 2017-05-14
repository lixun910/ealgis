import * as React from "react";
import LegendPeekBarSwatch from "./LegendPeekBarSwatchContainer";

const styles = {
    peekBarContainer: {
        "position": "relative",
    },
    flexContainer: {
        "display": "-ms-flex",
        "display": "-webkit-flex",
        "display": "flex",
        "WebkitFlexDirection": "row",
        "flexDirection": "row",
    },
    labelText: {
        "paddingTop": "4px",
        "fontSize": "12px",
        "color": "rgba(0, 0, 0, 0.3)",
        "position": "absolute",
        "top": "15px",
    },
}

export interface LegendPeekBarNavProps {
    layerId: number,
    olStyleDef: object,
    handleMouseEnter: Function,
    handleMouseLeave: Function,
    labelText: string,
}

export class LegendPeekBarNav extends React.Component<LegendPeekBarNavProps, undefined> {
    render() {
        const { layerId, olStyleDef, handleMouseEnter, handleMouseLeave, labelText } = this.props

        return <div style={styles.peekBarContainer}>
            <div style={styles.flexContainer}>
                {olStyleDef.map((styleDef: object, key: number) => {
                    return <LegendPeekBarSwatch 
                                key={key}
                                styleDef={styleDef}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                })}
            </div>
            <div style={styles.labelText}>{labelText}</div>
        </div>
    }
}

export default LegendPeekBarNav