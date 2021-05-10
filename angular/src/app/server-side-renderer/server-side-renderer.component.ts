import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from "rxjs/operators";

@Component({
    selector: "app-server-side-renderer",
    templateUrl: "server-side-renderer.component.html",
    styles: [],
})
export class ServerSideRendererComponent {
    public seed = new FormControl("seed");
    public tree$: Observable<SafeHtml>;

    constructor(private domSanitizer: DomSanitizer, private client: HttpClient) {
        this.tree$ = this.seed.valueChanges
        .pipe(
            startWith(this.seed.value),
            debounceTime(250),
            distinctUntilChanged(),
            switchMap(v => this.getTree(v))
        );
    }

    getTree(seed: string): Observable<SafeHtml> {
        return this.client.get(`http://localhost:2004/f/${seed}`, { responseType: 'text' })
            .pipe(map(res => this.domSanitizer.bypassSecurityTrustHtml(res)));
    }
}
