function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function u(e,t){return new Promise(((r,n)=>{setTimeout((()=>{Math.random()>.3?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.currentTarget.step.value),r=Number(e.currentTarget.delay.value),n=Number(e.currentTarget.amount.value);for(let e=1;e<=n;e+=1)u(e,r+=t).then(l).catch(a)}));const l=({position:t,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)},a=({position:t,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)};
//# sourceMappingURL=03-promises.a4fa8b89.js.map