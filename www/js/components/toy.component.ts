import {Component, ChangeDetectionStrategy, EventEmitter} from '@angular/core'

@Component({
  selector: 'toy-component',
  template: require('./toy.component.html'),
  inputs: ['toy'],
  outputs: ['selectRequest'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ToyComponent {
  public selectRequest

  constructor() {
    this.selectRequest = new EventEmitter()
  }

  select(toy) {
    this.selectRequest.emit(toy)
  }
}
