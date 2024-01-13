// PartitionComponent.js
import React, { useState, useRef } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PartitionComponent = ({
  direction,
  totalPartitionnum,
  display = "flex",
}) => {
  const buttonStyle = {
    padding: "5px 10px",
    backgroundColor: "#fff", // Change this to your desired background color
    color: "#000", // Change this to your desired text color
    borderRadius: "5px",
    marginLeft: "5px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow here
  };

  const [color, setColor] = useState(getRandomColor());
  const [newScreen, setNewScreen] = useState(false);
  const [partition, setPartition] = useState(direction);
  const [totalPartition, setTotalPartition] = useState(totalPartitionnum);
  const [divDisplay, setDivDisplay] = useState(display);

  const partitionRef = useRef(null);
  const resizingRef = useRef(null);
  const initialResizeState = useRef({
    width: 0,
    height: 0,
    startX: 0,
    startY: 0,
  });

  const handlePartition = (newDirection) => {
    setNewScreen(true);
    setColor(getRandomColor());
    direction = newDirection;
    setPartition(direction);
    setTotalPartition(totalPartition + 1);
  };

  const handleRemovePartition = () => {
    setNewScreen(false);
    setTotalPartition(totalPartition - 1);
    setDivDisplay("none");
    if (totalPartition - 1 === 0) {
      setDivDisplay("none");
    }
  };

  const handleMouseDown = (event, resizeDirection) => {
    resizingRef.current = true;

    initialResizeState.current = {
      width: partitionRef.current.clientWidth,
      height: partitionRef.current.clientHeight,
      startX: event.clientX,
      startY: event.clientY,
    };

    document.addEventListener("mousemove", (e) =>
      handleMouseMove(e, resizeDirection)
    );
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event, resizeDirection) => {
    if (resizingRef.current) {
      const deltaX = event.clientX - initialResizeState.current.startX;
      const deltaY = event.clientY - initialResizeState.current.startY;

      switch (resizeDirection) {
        case "right":
          partitionRef.current.style.width = `${
            initialResizeState.current.width + deltaX
          }px`;
          break;
        case "left":
          partitionRef.current.style.width = `${
            initialResizeState.current.width - deltaX
          }px`;
          break;
        case "bottom":
          partitionRef.current.style.height = `${
            initialResizeState.current.height + deltaY
          }px`;
          break;
        case "top":
          partitionRef.current.style.height = `${
            initialResizeState.current.height - deltaY
          }px`;
          break;
        default:
          break;
      }
    }
  };

  const handleMouseUp = () => {
    resizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div
        ref={partitionRef}
        style={{
          width: "100%",
          height: "100%",
          display: divDisplay,
          backgroundColor: color,
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: partition,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {newScreen ? (
          Array.from({ length: 2 }).map((_, index) => (
            <PartitionComponent
              key={index}
              direction={partition}
              totalPartitionnum={totalPartition}
            />
          ))
        ) : (
          <div>
            <button
              style={buttonStyle}
              onClick={() => handlePartition("column")}
            >
              {" "}
              (v)
            </button>
            <button style={buttonStyle} onClick={() => handlePartition("row")}>
              {" "}
              (h)
            </button>
            {totalPartition > 1 && (
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#fff",
                  color: "red",
                  borderRadius: "5px",
                  marginLeft: "5px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                onClick={handleRemovePartition}
              >
                (r)
              </button>
            )}
          </div>
        )}

        {totalPartition > 1 && (
          <>
            <div
              style={{
                position: "absolute",
                width: "10px",
                height: "100%",
                cursor: "ew-resize",
                top: 0,
                left: 0,
              }}
              onMouseDown={(e) => handleMouseDown(e, "left")}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "10px",
                height: "100%",
                cursor: "ew-resize",
                top: 0,
                right: 0,
              }}
              onMouseDown={(e) => handleMouseDown(e, "right")}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "10px",
                cursor: "ns-resize",
                bottom: 0,
                left: 0,
              }}
              onMouseDown={(e) => handleMouseDown(e, "bottom")}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "10px",
                cursor: "ns-resize",
                top: 0,
                left: 0,
              }}
              onMouseDown={(e) => handleMouseDown(e, "top")}
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default PartitionComponent;
