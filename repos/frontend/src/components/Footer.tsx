import { Icon } from "@iconify/react";
import { DynamicYear } from "./dynamic/Year";

export function Footer() {
  return (
    <div className="w-screen bg-ctp-crust border-t border-ctp-surface0 p-24 pb-8 flex flex-col">
      <div className="flex flex-row">
        <div>
          <h1 className="text-2xl text-ctp-text/70 font-bold">Martin Petr</h1>
          <p className="text-ctp-text/50">Software engineer</p>
        </div>
      </div>
      <hr className="border border-ctp-surface0 mt-8" />
      <div>
        <p className="text-ctp-text/50 mb-1 mt-8 text-center">
          Made with{" "}
          <Icon icon={"mdi:heart"} className="inline-block text-ctp-red/50" />{" "}
          and{" "}
          <Icon icon="mdi:coffee" className="inline-block text-ctp-yellow/50" />{" "}
          by Martin Petr.
        </p>
        <p className="text-center opacity-50">
          <span className="inline-block translate-y-0.5">
            <Icon icon={"ph:copyright"} />
          </span>{" "}
          <DynamicYear /> Martin Petr. All rights reserved.
        </p>
      </div>
    </div>
  );
}
