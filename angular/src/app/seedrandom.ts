// Based on David Bau's work (see https://github.com/davidbau/seedrandom)

// @ts-ignore
(function(f,a,c){var s,l=256,p="random",d=c.pow(l,6),g=c.pow(2,52),y=2*g,h=l-1;function n(n,t,r){function e(){for(var n=u.g(6),t=d,r=0;n<g;)n=(n+r)*l,t*=l,r=u.g(1);for(;y<=n;)n/=2,t/=2,r>>>=1;return(n+r)/t}var o=[],i=j(function n(t,r){var e,o=[],i=typeof t;if(r&&"object"==i)for(e in t)try{o.push(n(t[e],r-1))}catch(n){}return o.length?o:"string"==i?t:t+"\0"}((t=1==t?{entropy:!0}:t||{}).entropy?[n,S(a)]:null==n?function(){try{var n;return s&&(n=s.randomBytes)?n=n(l):(n=new Uint8Array(l),(f.crypto||f.msCrypto).getRandomValues(n)),S(n)}catch(n){var t=f.navigator,r=t&&t.plugins;return[+new Date,f,r,f.screen,S(a)]}}():n,3),o),u=new m(o);return e.int32=function(){return 0|u.g(4)},e.quick=function(){return u.g(4)/4294967296},e.double=e,j(S(u.S),a),(t.pass||r||function(n,t,r,e){return e&&(e.S&&v(e,u),n.state=function(){return v(u,{})}),r?(c[p]=n,t):n})(e,i,"global"in t?t.global:this==c,t.state)}function m(n){var t,r=n.length,u=this,e=0,o=u.i=u.j=0,i=u.S=[];for(r||(n=[r++]);e<l;)i[e]=e++;for(e=0;e<l;e++)i[e]=i[o=h&o+n[e%r]+(t=i[e])],i[o]=t;(u.g=function(n){for(var t,r=0,e=u.i,o=u.j,i=u.S;n--;)t=i[e=h&e+1],r=r*l+i[h&(i[e]=i[o=h&o+t])+(i[o]=t)];return u.i=e,u.j=o,r})(l)}function v(n,t){return t.i=n.i,t.j=n.j,t.S=n.S.slice(),t}function j(n,t){for(var r,e=n+"",o=0;o<e.length;)t[h&o]=h&(r^=19*t[h&o])+e.charCodeAt(o++);return S(t)}function S(n){return String.fromCharCode.apply(0,n)}j(c.random(),a);c["seed"+p]=n}("undefined"!=typeof self?self:this,[],Math));

// For use with TypeScript
declare global {
    interface Math {
        seedrandom: {
            new (seed: any): () => number
        };
    }
}


// custom part

export function getPaintOptions(seed: string): PaintOptions {
    const random = new Math.seedrandom(seed);
    const layers = Math.floor(random() * 4) + 9;
    const angle = Math.round(random() * 20) + 20;
    let length = ((Math.round(random() * 100) / 100) * 0.25 + 0.6);
    const randomAngle = random() * 15 + 5;
    const randomLength = random() * 10 + 5;
    if (random() > .7) length += length * ((angle - 20) / 200);

    return { layers, angle, length, randomAngle, randomLength, random };
}

interface PaintOptions { layers: number, angle: number, length: number, randomAngle: number, randomLength: number, random: () => number }

export const colors = ["#001100", "#001600", "#001b00", "#002000", "#002500", "#002a00", "#003000", "#003500", "#003a00", "#003f00", "#004400", "#004900", "#004e00", "#005300", "#005800", "#005d00", "#006300", "#006800", "#006d00", "#007200", "#007700", "#007c00", "#008100", "#008600", "#008b00", "#009000", "#009600", "#009b00", "#00a000", "#00a500", "#00aa00", "#00af00", "#00b400", "#00b900", "#00be00", "#00c300", "#00c900", "#00ce00", "#00d300", "#00d800", "#00dd00", "#00e200", "#00e700", "#00ec00", "#00f100", "#00f600", "#00fc00", "#02ff02", "#07ff07", "#0cff0c"];
