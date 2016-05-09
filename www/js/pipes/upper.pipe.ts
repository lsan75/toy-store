import { Pipe, PipeTransform, BaseException } from '@angular/core'

@Pipe({
  name: 'upper'
})
export default class UpperPipe implements PipeTransform {
  transform(value) {
    return value.toUpperCase()
  }
}