import {Component, ChangeDetectionStrategy} from 'angular2/core'

@Component({
  selector: 'toy-component',
  templateUrl: './js/components/toy.component.html',
  inputs: ['toy'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ToyComponent {
  constructor() {}
}
