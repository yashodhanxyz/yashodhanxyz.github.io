import{c as o,j as e}from"./index-CJcBHVqg.js";import{D as c}from"./download-Curg4jwr.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=o("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function h({file:a,onWidthChange:r,onConvert:t,onRemove:s,converting:d,isDark:l}){return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("div",{className:"aspect-square rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700 mb-3 flex items-center justify-center",children:e.jsx("img",{src:a.dataUrl,alt:a.name,className:"max-w-full max-h-full object-contain"})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 truncate",title:a.name,children:a.name}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"number",placeholder:"Width (optional)",value:a.width||"",onChange:n=>r(a.id,parseInt(n.target.value)||0),className:"flex-1 px-3 py-1 border dark:border-gray-600 rounded text-sm bg-transparent dark:text-white",min:"1"}),e.jsx("button",{onClick:()=>t(a.id),disabled:d,className:"p-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50",title:"Download PNG",children:e.jsx(c,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>s(a.id),className:"p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors",title:"Remove",children:e.jsx(i,{className:"w-4 h-4"})})]})]})]})}export{h as ImagePreview};