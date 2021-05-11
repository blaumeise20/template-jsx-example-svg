import * as jsxt from "template-jsx";
import express from "express";
const app = express();

const render = jsxt.create({ indent: false, useSelfCloseTags: true });

const people = ['Foo', 'Bar'];

app.get("/", render.createHandler(() =>
    <div>
        <h1>People</h1>
        <ul>{people.map(p => <li>{p}</li>)}
        </ul>
    </div>));

app.listen(2004);
