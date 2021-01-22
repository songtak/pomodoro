import TimerStore from "./TimerStore";

import { makeObservable, observable } from "mobx";
class RootStore {
  constructor(root) {
    makeObservable(this, {
      // response: observable,
      // beginRequest: action,
      // endRequest: action,
      // throw: action,
    });
  }
  timerStore = new TimerStore(this);
}

export default RootStore;
