import * as React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import "./styles.css";

export default function App({ callback }: any) {
  return (
    <div className="App">
      <Container
        onDrop={() => {
          callback?.();
        }}
      >
        <Draggable key="1" data-testid="1">
          <p>test</p>
        </Draggable>
        <Draggable key="2" data-testid="2">
          <p>test2</p>
        </Draggable>
      </Container>
    </div>
  );
}
