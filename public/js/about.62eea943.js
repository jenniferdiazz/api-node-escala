(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a434:function(t,e,n){"use strict";var o=n("23e7"),a=n("23cb"),c=n("a691"),r=n("50c4"),i=n("7b0b"),s=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),b=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,h=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!b||!f},{splice:function(t,e){var n,o,u,d,b,f,j=i(this),O=r(j.length),v=a(t,O),w=arguments.length;if(0===w?n=o=0:1===w?(n=0,o=O-v):(n=w-2,o=h(g(c(e),0),O-v)),O+n-o>p)throw TypeError(m);for(u=s(j,o),d=0;d<o;d++)b=v+d,b in j&&l(u,d,j[b]);if(u.length=o,n<o){for(d=v;d<O-o;d++)b=d+o,f=d+n,b in j?j[f]=j[b]:delete j[f];for(d=O;d>O-o+n;d--)delete j[d-1]}else if(n>o)for(d=O-o;d>v;d--)b=d+o-1,f=d+n-1,b in j?j[f]=j[b]:delete j[f];for(d=0;d<n;d++)j[d+v]=arguments[d+2];return j.length=O-o+n,u}})},b0c0:function(t,e,n){var o=n("83ab"),a=n("9bf2").f,c=Function.prototype,r=c.toString,i=/^\s*function ([^ (]*)/,s="name";o&&!(s in c)&&a(c,s,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})},c740:function(t,e,n){"use strict";var o=n("23e7"),a=n("b727").findIndex,c=n("44d2"),r=n("ae40"),i="findIndex",s=!0,l=r(i);i in[]&&Array(1)[i]((function(){s=!1})),o({target:"Array",proto:!0,forced:s||!l},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),c(i)},c93e:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a"),n("b0c0");var o=n("7a23"),a={class:"container"},c=Object(o["g"])("h1",null,"Notas",-1),r=Object(o["g"])("h3",{class:"text-center"},"Editar nota",-1),i=Object(o["g"])("button",{type:"submit",class:"btn-warning btn-block btn-success"},"Confirmar",-1),s=Object(o["g"])("h3",{class:"text-center"},"Agregar Nueva nota",-1),l=Object(o["g"])("button",{type:"submit",class:"btn-sm btn-block btn-success"},"Agregar",-1),u={class:"table"},d=Object(o["g"])("thead",null,[Object(o["g"])("tr",null,[Object(o["g"])("th",{scope:"col"},"#"),Object(o["g"])("th",{scope:"col"},"Nombre"),Object(o["g"])("th",{scope:"col"},"Descripcion"),Object(o["g"])("th",{scope:"col"},"Fecha"),Object(o["g"])("th",{scope:"col"},"Accion")])],-1);function b(t,e,n,b,f,g){return Object(o["p"])(),Object(o["d"])("div",a,[c,Object(o["g"])("div",{class:"alert alert-primary",role:"alert",show:t.dismissCountDown,dismissible:"",variant:f.mensaje.color,onDismissed:e[1]||(e[1]=function(e){return t.dismissCountDown=0}),onDismissCountDown:e[2]||(e[2]=function(){return g.countDownChanged&&g.countDownChanged.apply(g,arguments)})},Object(o["w"])(f.mensaje.texto),41,["show","variant"]),f.agregar?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("form",{key:0,onSubmit:e[6]||(e[6]=Object(o["C"])((function(t){return g.editarNota(f.notaEditar)}),["prevent"]))},[r,Object(o["B"])(Object(o["g"])("input",{type:"text",class:"form-control my-2","onUpdate:modelValue":e[3]||(e[3]=function(t){return f.notaEditar.name=t})},null,512),[[o["y"],f.notaEditar.name]]),Object(o["B"])(Object(o["g"])("input",{type:"text",class:"form-control my-2","onUpdate:modelValue":e[4]||(e[4]=function(t){return f.notaEditar.description=t})},null,512),[[o["y"],f.notaEditar.description]]),i,Object(o["g"])("button",{type:"submit",class:"btn-sm btn-block btn-danger",onClick:e[5]||(e[5]=function(t){return f.agregar=!0})},"Cancelar")],32)),f.agregar?(Object(o["p"])(),Object(o["d"])("form",{key:1,onSubmit:e[9]||(e[9]=Object(o["C"])((function(t){return g.agregarNota()}),["prevent"]))},[s,Object(o["B"])(Object(o["g"])("input",{type:"text",placeholder:"Ingrese el Nombre",class:"form-control my-2","onUpdate:modelValue":e[7]||(e[7]=function(t){return f.nota.name=t})},null,512),[[o["y"],f.nota.name]]),Object(o["B"])(Object(o["g"])("input",{type:"text",placeholder:"Ingrese la descripcion",class:"form-control my-2","onUpdate:modelValue":e[8]||(e[8]=function(t){return f.nota.description=t})},null,512),[[o["y"],f.nota.description]]),l],32)):Object(o["e"])("",!0),Object(o["g"])("table",u,[d,Object(o["g"])("tbody",null,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(f.notas,(function(t,e){return Object(o["p"])(),Object(o["d"])("tr",{key:e},[Object(o["g"])("td",null,Object(o["w"])(t._id),1),Object(o["g"])("td",null,Object(o["w"])(t.name),1),Object(o["g"])("td",null,Object(o["w"])(t.description),1),Object(o["g"])("td",null,Object(o["w"])(t.date),1),Object(o["g"])("td",null,[Object(o["g"])("button",{type:"button",class:"btn btn-warning",onClick:function(e){return g.activarEdicion(t._id)}},"Actualizar",8,["onClick"])]),Object(o["g"])("td",null,[Object(o["g"])("button",{type:"button",class:"btn btn-danger",onClick:function(e){return g.eliminarNota(t._id)}},"Eliminar",8,["onClick"])])])})),128))])])])}n("c740"),n("a434");var f={data:function(){return{notas:[],mensaje:{color:"success",texto:""},dismessecs:3,dissmissCountDown:0,agregar:!0,nota:{},notaEditar:[]}},created:function(){this.listarNotas()},methods:{listarNotas:function(){var t=this;this.axios.get("/nota").then((function(e){t.notas=e.data})).catch((function(t){console.log("error"+t)}))},countDownChanged:function(t){this.dismissCountDown=dismissCountDown},showAlert:function(){this.dismissCountDown=this.dismisSecs},eliminarNota:function(t){var e=this;this.axios.delete("nota/".concat(t)).then((function(t){var n=e.notas.findIndex((function(e){return e._id==t.data._id}));e.notas.splice(n,1),e.mensaje.texto="Nota Eliminada",e.mensaje.color="success",e.showAlert()})).catch((function(t){console.log("error"+t),e.mensaje.texto="Error",e.mensaje.color="danger",e.showAlert()}))},editarNota:function(t){var e=this;this.axios.put("/nota/".concat(t._id),t).then((function(t){var n=e.notas.findIndex((function(e){return e._id===t.data._id}));e.notas[n].name=t.data.name,e.notas[n].description=t.data.description,e.mensaje.texto="Nota Actualizada",e.mensaje.color="success",e.showAlert()})).catch((function(t){console.log(t),e.mensaje.texto="Error",e.mensaje.color="danger",e.showAlert()})),this.agregar=!0},agregarNota:function(){var t=this;this.axios.post("/notanueva",this.nota).then((function(e){t.notas.push(e.data),t.nota.name="",t.nota.description="",t.mensaje.texto="Nota Agregada",t.mensaje.color="success",t.showAlert()})).catch((function(e){t.mensaje.texto="Error",t.mensaje.color="danger",t.showAlert()}))},activarEdicion:function(t){var e=this;this.agregar=!1,this.axios.get("/nota/".concat(t)).then((function(t){e.notaEditar=t.data})).catch((function(t){console.log(t)}))}}};f.render=b;e["default"]=f},e01a:function(t,e,n){"use strict";var o=n("23e7"),a=n("83ab"),c=n("da84"),r=n("5135"),i=n("861d"),s=n("9bf2").f,l=n("e893"),u=c.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(b,u);var f=b.prototype=u.prototype;f.constructor=b;var g=f.toString,h="Symbol(test)"==String(u("test")),p=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=g.call(t);if(r(d,t))return"";var n=h?e.slice(7,-1):e.replace(p,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:b})}},f820:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),a={class:"about"},c=Object(o["g"])("h1",null,"Ruta protegida",-1);function r(t,e,n,r,i,s){return Object(o["p"])(),Object(o["d"])("div",a,[c,Object(o["f"])(" "+Object(o["w"])(t.token),1)])}n("d3b7"),n("96cf");var i=n("1da1"),s=n("5530"),l=n("5502"),u={computed:Object(s["a"])({},Object(l["c"])(["token"])),methods:{datosProtegidos:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/api/admin",{headers:{"Content-Type":"application/json","auth-token":t.token}});case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,console.log(o),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},created:function(){this.datosProtegidos()}};u.render=r;e["default"]=u}}]);
//# sourceMappingURL=about.62eea943.js.map