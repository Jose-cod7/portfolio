import React from "react";
import Particles from "react-particles-js";

export const ParticlesMode = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 1400,
              },
            },
            shape: {
              type: "square",
              stroke: {
                width: 5,
                color: "#2029de",
              },
            },
          },
        }}
      />
    </div>
  );
};
