import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import * as jsxt from "template-jsx";
import { paint } from "../paint";
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-client-side-renderer",
    templateUrl: "tsx-renderer.component.html",
    styles: [],
})
export class TsxRendererComponent {
    public seed = new FormControl('seed');
    public tree$: Observable<SafeHtml>;

    constructor(private domSanitizer: DomSanitizer, private client: HttpClient) {
        this.tree$ = this.seed.valueChanges
            .pipe(
                startWith(this.seed.value),
                debounceTime(250),
                distinctUntilChanged(),
                switchMap(v => this.getTree(v)),
                // map(v => this.getTree(v)),
            );
    }

    getTree(seed: string) {
        return this.client.get(`http://localhost:2004/f/${seed}`, { responseType: 'text' })
          .pipe(map(res => this.domSanitizer.bypassSecurityTrustHtml(res)));

        // return this.domSanitizer.bypassSecurityTrustHtml(
        //     jsxt.render(paint(seed))
        // );
    }
}
