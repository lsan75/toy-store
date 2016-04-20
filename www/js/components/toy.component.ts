import {Component} from 'angular2/core'

@Component({
  selector: 'toy-component',
  templateUrl: './js/components/toy.component.html',
  inputs: ['toy']
})
export default class ToyComponent {
  constructor() {}
}
