import { makeAutoObservable } from "mobx";
// import * as CustomerService from 'Services/CustomerService';

class TimerStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }
}
export default TimerStore;
