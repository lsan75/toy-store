import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'toy-component',
  templateUrl: './toy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ToyComponent {
  @Input() toy
  @Output() selectRequest = new EventEmitter()

  public select = toy => {
    this.selectRequest.emit(toy)
  }
}
