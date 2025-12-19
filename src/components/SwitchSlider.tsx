import React from "react";
import { Switch } from "@/components/ui/switch";

const SwitchSlider = (props: any) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={props.isOn}
        onCheckedChange={() => props.handleEnabled(props.index)}
      />
    </div>
  );
};

export default SwitchSlider;
