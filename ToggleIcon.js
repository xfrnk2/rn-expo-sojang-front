import React from "react";
import { Transition, Transitioning } from "react-native-reanimated";

export const ToggleIcon = ({ First, Second }) => {
  const ref = React.useRef(null);
  const [toggled, setToggled] = React.useState(false);

  const toggle = () => setToggled(!toggled);

  const onPress = () => {
    toggle();
    ref.current?.animateNextTransition();
  };

  return (
    <Transitioning.View ref={ref} transition={transition}>
      {!toggled ? <First onPress={onPress} /> : <Second onPress={onPress} />}
    </Transitioning.View>
  );
};

const transition = (
  <Transition.Together>
    <Transition.Out type="scale" durationMs={100} />
    <Transition.Change interpolation="easeInOut" />
    <Transition.In type="scale" durationMs={100} delayMs={50} />
  </Transition.Together>
);
