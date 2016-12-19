import { Component, ChangeDetectionStrategy, Input, forwardRef, OnChanges } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'toy-input',
  template: `
    <input type="text" [(ngModel)]="value" name="input" [required]="isRequired">
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToyInputComponent),
      multi: true
    }
  ]
})
export class ToyInputComponent  implements ControlValueAccessor, OnChanges {
  @Input('ngModel') _value: string
  @Input('required') isRequired
  @Input('attr.class') classe

  onChange: any = () => {}
  onTouched: any = () => {}

  get value() {
    return this._value
  }
  set value(val) {
    this._value = val
    this.onChange(val)
    this.onTouched(val)
  }

  constructor() { }

  ngOnChanges() {
    this.isRequired = this.isRequired !== undefined
  }

  registerOnChange(fn) { this.onChange = fn }
  registerOnTouched(fn) { this.onTouched = fn }

  writeValue(value) {
    if (value) {
      this.value = value
    }
  }

}
