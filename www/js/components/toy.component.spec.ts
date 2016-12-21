
import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import ToyComponent from './toy.component'

let comp: ToyComponent
let fixture: ComponentFixture<ToyComponent>
let el: DebugElement

@Component({
  template: `
    <toy-component
      [toy]="toy"
      (selectRequest)="onSelect($event)">
    </toy-component>
  `
})
class TestHost {
  public toy = {
    icon: 'toto',
    selected: true
  }
  public selectedToy
  public onSelect(toy) {
    this.selectedToy = toy
  }
}

describe('ToyComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToyComponent, TestHost]
    })

    fixture = TestBed.createComponent(ToyComponent)
    comp = fixture.componentInstance
  })

  it('Should have a root article', () => {
    el = fixture.debugElement.query(By.css('i'))
    comp.toy = { icon: 'toto' }
    fixture.detectChanges()
    expect(el.nativeElement.className).toBe('mdi mdi-toto')
  })

  it('Should be selected', () => {
    el = fixture.debugElement.query(By.css('article'))
    comp.toy = { selected: true }
    fixture.detectChanges()
    expect(el.nativeElement.className).toBe('toy selected')
  })

  it('Should select a toy', () => {
    const hostFixture = TestBed.createComponent(TestHost)
    const hostComp = hostFixture.componentInstance
    const hostEl = hostFixture.debugElement.query(By.css('article'))
    hostFixture.detectChanges()

    hostEl.triggerEventHandler('click', null)
    expect(hostComp.selectedToy).toEqual(hostComp.toy)
  })
})
