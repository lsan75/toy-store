import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'upper'
})
export default class UpperPipe implements PipeTransform {
  transform(value) {
    return value.toUpperCase()
  }
}
