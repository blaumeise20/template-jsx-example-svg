import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import * as jsxt from "template-jsx";
import { paint } from "../paint";
import { debounceTime, distinctUntilChanged, map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
    selector: "app-client-side-renderer",
    templateUrl: "client-side-renderer.component.html",
    styles: [],
})
export class ClientSideRendererComponent {
    public seed = new FormControl('seed');
    public tree$: Observable<SafeHtml>;

    constructor(private domSanitizer: DomSanitizer) {
        this.tree$ = this.seed.valueChanges
            .pipe(
                startWith(this.seed.value),
                debounceTime(250),
                distinctUntilChanged(),
                map(v => this.getTree(v)),
            );
    }

    getTree(seed: string) {
        return this.domSanitizer.bypassSecurityTrustHtml(
            jsxt.render(paint(seed))
        );
    }
}
