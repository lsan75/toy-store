import {Component, ChangeDetectionStrategy, EventEmitter, OnInit} from '@angular/core'

@Component({
  selector: 'toy-component',
  template: require('./toy.component.html'),
  inputs: ['toy'],
  outputs: ['selectRequest'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ToyComponent implements OnInit {
  public selectRequest
  public toto

  constructor() {
    this.selectRequest = new EventEmitter()
  }

  ngOnInit() {
    this.toto = 'init'
  }

  select(toy) {
    this.selectRequest.emit(toy)
  }
}
