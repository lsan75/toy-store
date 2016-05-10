import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[fade]',
  host: {
    '(mouseenter)': 'onMouseenter()',
    '(mouseleave)': 'onMouseleave()'
  }
})
export default class FadeDirective {

  private el
  private transform

  constructor(private elem: ElementRef) {
    this.el = elem.nativeElement
  }

  onMouseenter = () => {
    this.el.style.opacity = 0.5
  }

  onMouseleave = () => {
    this.el.style.opacity = 1
  }

}