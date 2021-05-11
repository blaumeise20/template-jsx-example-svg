# Storyboard

## Vorstellung

## TSX Basics

1. `const content = <h1>People</h1>`
   * Hinweis: *tsx* ist Erweiterung für JSX in TypeScript

2. `tsc` -> JS zeigen -> React wird angenommen

3. *tsconfig.json* -> *jsxFactory* Kommentar entfernen

4. `tsc` -> JS zeigen -> React durch `jsxt` ersetzt
   * Hurra, React ist weg

5. `import * as jsxt from "template-jsx";` -> Code kompiliert

6. Rendering in *string*

   ```tsx
   console.log(content);
   console.log(jsxt.render(content));
   ```

## More advanced template

1. HTML for people list

   ```tsx
   const people = ['Foo', 'Bar'];
   content = <div>
    <h1>People</h1>
    <ul>{people.map(p => <li>{p}</li>)}</ul>
   </div>;
   ```

## Webserver

1. Express hinzufügen

   ```ts
   import express from "express";
   const app = express();
   ```

1. `const render = jsxt.create({ indent: false, useSelfCloseTags: true });`

1. Get implementieren

   ```tsx
   app.get("/", render.createHandler(() =>
   <div>
       <h1>People</h1>
       <ul>{people.map(p => <li>{p}</li>)}
       </ul>
   </div>));
   ```

1. `app.listen(2004);`

## Größeres Beispiel

1. Ergebnis zeigen
   * [http://localhost:2004/Alvin](http://localhost:2004/Alvin)
   * [http://localhost:2004/Graz](http://localhost:2004/Graz)
   * [http://localhost:2004/Rainer](http://localhost:2004/Rainer)
   * [http://localhost:2004/Manfred](http://localhost:2004/Manfred)

1. *express/src/index.tsx* öffnen
   * *jsxt* in Express kurz zeigen
   * Auf rekursive Funktion `paintBranch` hinweisen
   * Ergebnistyp `jsxt.Element`
   * Fragment-Logik

## Einbindung in Angular

1. Ergebnis zeigen
   * Alvin
   * Graz

1. *angular\src\app\server-side-renderer\server-side-renderer.component.html* öffnen
   * Hinweis auf `innerHTML`

1. *angular\src\app\server-side-renderer\server-side-renderer.component.ts* öffnen
   * RxJS Pipe, die Eingaben durch Roundtrip zum Server in Baum-SVG umwandeln

## *template-jsx* in Angular am Client

1. *client-side-renderer*, *app-routing.module.ts*, *app.module.ts*, *paint.tsx*, *seedrandom.ts* reinkopieren

1. Zeigen, dass *paint.tsx* genau der gleich Code wie am Server ist.

1. *angular\src\app\client-side-renderer\client-side-renderer.component.ts* öffnen
   * RxJS Pipe, die Eingaben durch client-seitiges tsx-Rendering das Baum-SVG erzeugt

## Fazit

Takeaways?
