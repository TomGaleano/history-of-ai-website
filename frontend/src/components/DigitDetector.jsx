import React from "react";
import { Stage, Layer, Line, Rect } from "react-konva";
import { predictDigit } from "../services/api";

const DigitDetector = () => {
  const [lines, setLines] = React.useState([]);
  const [prediction, setPrediction] = React.useState(null);
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef(null);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleClear = () => {
    setLines([]);
    setPrediction(null);
  };

  const handlePredict = async () => {
    const uri = stageRef.current.toDataURL();
    try {
      const response = await predictDigit(uri);
      setPrediction(response.digit);
    } catch (error) {
      console.error("Error predicting digit:", error);
    }
  };

  return (
    <div>
      <Stage
        ref={stageRef}
        width={280}
        height={280}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        style={{ border: "1px solid black" }}
        role="graphics-document"
      >
        <Layer>
          <Rect x={0} y={0} width={280} height={280} fill="white" />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={20}
              tension={0.5}
              lineCap="round"
            />
          ))}
        </Layer>
      </Stage>
      <button onClick={handlePredict}>Predict</button>
      <button onClick={handleClear}>Clear</button>
      {prediction !== null && <h3>The AI predicts you drew a {prediction}</h3>}
    </div>
  );
};

export default DigitDetector;
