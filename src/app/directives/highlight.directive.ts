import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    selector: '[highlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {}

    onMouseEnter() { 
        this._highlight('#009688');
    }

    onMouseLeave() { 
        this._highlight(null);
    }

    _highlight(color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color ? '#fff' : null);
    }
}
