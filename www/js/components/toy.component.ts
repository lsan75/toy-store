import { Component, ChangeDetectionStrategy, EventEmitter } from '@angular/core'

@Component({
  selector: 'toy-component',
  templateUrl: './toy.component.html',
  inputs: ['toy'],
  outputs: ['selectRequest'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ToyComponent {
  public selectRequest = new EventEmitter()
  public toy

  select = toy => {
    this.selectRequest.emit(toy)
  }
}
