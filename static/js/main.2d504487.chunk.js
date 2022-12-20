(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){"use strict";a.r(t),a.d(t,"converterFormats",function(){return u}),a.d(t,"converterName",function(){return d}),a.d(t,"converterExtension",function(){return h}),a.d(t,"convertTo",function(){return m}),a.d(t,"convertFrom",function(){return O}),a.d(t,"defaultValueEntryForField",function(){return w}),a.d(t,"fullMessageDescriptorName",function(){return F}),a.d(t,"messageToProto",function(){return b});var r=a(6),n=a(13),s=n.List,o=n.Map,l=a(16),i=a(39);function c(e){for(var t={},a=0;a<e.length;++a){var n=Object(r.a)(e[a],2),s=n[0],o=n[1];t[s]=o}return t}var p={binary:["Binary","pbdata",f,E],"binary-hex":["Binary (hex)","pbdata.hex",function(e,t){var a=f(e,t);return Array.from(a).map(function(e){return(e<16?"0":"")+e.toString(16)}).join("").toUpperCase()},function(e,t){for(var a=[],r=0;r<t.length;r+=2)a.push(parseInt(t.substring(r,r+2),16));return E(e,new Uint8Array(a))}],"binary-b64":["Binary (base64)","pbdata.b64",function(e,t){var a=f(e,t);return l.util.base64.encode(a,0,a.length)},function(e,t){for(var a=window.atob(t),r=new Uint8Array(new ArrayBuffer(a.length)),n=0;n<a.length;n++)r[n]=a.charCodeAt(n);return E(e,r)}],json:["Json","json",function(e,t){var a=b(e,t);return JSON.stringify(a)},function(e,t){var a=e.fromObject(JSON.parse(j(t)));return S(e,a)}],"json-camel":["Json (camelCase)","cc.json",function(e,t){var a=b(e,t),r=g(e,e.toObject(a,l.util.toJSONOptions),function(e){return l.util.camelCase(e)});return JSON.stringify(r)},function(e,t){var a=JSON.parse(j(t)),r=e.fromObject(M(e,a,function(e){return l.util.camelCase(e)}));return S(e,r)}],"json-id":["Json (field-IDs)","ids.json",function(e,t){var a=b(e,t),r=g(e,e.toObject(a,l.util.toJSONOptions),function(e,t){return t.fields[e].id});return JSON.stringify(r)},function(e,t){var a=JSON.parse(j(t)),r=e.fromObject(M(e,a,function(e,t){return t.fields[e].id}));return S(e,r)}]},u=Object.keys(p).sort();function d(e){return p[e][0]}function h(e){return p[e][1]}function m(e,t,a){return p[e][2](t,a)}function f(e,t){var a=b(e,t);return e.encode(a).finish()}function g(e,t,a){return c(Object.entries(t).map(function(t){var n=Object(r.a)(t,2),s=n[0],o=n[1],i=a(s,e),c=e.fields[s]||e.fields[i];return c.resolvedType&&c.resolvedType.constructor===l.Type?c.repeated?[i,o.map(function(e){return g(c.resolvedType,e,a)})]:[i,g(c.resolvedType,o,a)]:[i,o]}))}function b(e,t){var a=v(e,t);return e.fromObject(a)}function v(e,t){return t.mapEntries(function(t){var a=Object(r.a)(t,2),n=a[0],s=a[1],o=e.fieldsById[n];return[o.name,y(o,s)]}).toObject()}function y(e,t){return e.map?c(t.map(function(t){return[k(e.keyType,null,t.get("key")),k(e.type,e.resolvedType,t.get("value"))]}).toArray()):e.repeated?t.map(function(t){return k(e.type,e.resolvedType,t.get("value"))}).toArray():1===t.size?k(e.type,e.resolvedType,t.get(0).get("value")):null}function k(e,t,a){switch(e){case"string":case"bytes":case"int32":case"int64":case"sint32":case"sint64":case"uint32":case"uint64":case"fixed32":case"fixed64":case"float":case"double":case"bool":return a}return null===t?(console.error("Unhandled value type",e),""):t.constructor===l.Enum?a:t.constructor===l.Type?v(t,a):(console.error("Unhandled value type",e),"")}function O(e,t,a){return p[e][3](t,a)}function E(e,t){var a=e.decode(t);return S(e,a)}function j(e){return e instanceof Uint8Array?new TextDecoder("utf-8").decode(e):e}function M(e,t,a){return g(e,t,function(e,t){return function(e,t,a){for(var r in t.fields)if(a(r,t).toString()===e)return r;for(var n in console.error("Failed to match key"),t.fields)console.error("tried",a(n,t),"===",e);console.error("all false.")}(e,t,a)})}function S(e,t,a){return o(Object.entries(t).map(function(t){var n=Object(r.a)(t,2),s=n[0],o=n[1],l=e.fields[s];return[l.id,D(l,o,a)]}))}function D(e,t,a){if(e.map)return s(Object.entries(t).map(function(t){var a=Object(r.a)(t,2),n=a[0],s=a[1];return{id:i.generate(),key:C(e.keyType,null,n),value:C(e.type,e.resolvedType,s)}}));var n=e.repeated?t:[t];return s(n.map(function(t){return o({id:i.generate(),value:C(e,t,a)})}))}function C(e,t,a){switch(e.type){case"bytes":return l.util.base64.encode(t,0,t.length);case"string":case"int32":case"int64":case"sint32":case"sint64":case"uint32":case"uint64":case"fixed32":case"fixed64":case"float":case"double":case"bool":return t}var r=e.resolvedType;return null===r?(console.error("Unhandled value type",e),""):r.constructor===l.Enum?t:r.constructor===l.Type?S(r,t,a):(console.error("Unhandled value type",e),"")}function w(e){var t={id:i.generate(),value:T(e.type,e.resolvedType)};return e.map&&(t.key=T(e.keyType,null)),o(t)}function T(e,t){switch(e){case"string":case"bytes":return"";case"int32":case"int64":case"sint32":case"sint64":case"uint32":case"uint64":case"fixed32":case"fixed64":case"float":case"double":return"0";case"bool":return!1}return null===t?(console.error("Unhandled default type, expected resolved type",e),""):t.constructor===l.Enum?parseInt(s(Object.keys(t.valuesById)).sort().first(),10):t.constructor===l.Type?o():(console.error("Unhandled default type",e),"")}function F(e){if(!e)return"";for(var t=e.name;e.parent&&e.parent.name;)t=e.parent.name+"."+t,e=e.parent;return t}},41:function(e,t,a){e.exports=a(74)},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(40),o=a.n(s),l=a(1),i=a(2),c=a(4),p=a(3),u=a(5),d=a(6),h=a(13),m=h.fromJS,f=h.isKeyed,g=function(e){return/^[0-9]+$/.test(e)?parseInt(e):e},b=function(e,t){return f(t)?t.mapEntries(function(e){var t=Object(d.a)(e,2),a=t[0],r=t[1];return[g(a),r]}).toMap():t.toList()},v=function(e){var t=m(JSON.parse(window.localStorage.getItem(e)||"{}"),b);return console.log("Loaded",e,t),t},y=function(e,t){t.isEmpty()?(console.log("Removing",e,t),window.localStorage.removeItem(e)):(console.log("Saving",e,t),window.localStorage.setItem(e,JSON.stringify(t.toJSON())))},k={load:function(){return v("stored_protos")},save:function(e){return y("stored_protos",e)}},O={load:function(){return v("stored_messages")},save:function(e){return y("stored_messages",e)}},E={load:function(){return window.localStorage.getItem("format")||"binary"},save:function(e){"binary"===e?window.localStorage.removeItem("format"):window.localStorage.setItem("format",e)}},j={load:function(){return v("config")},save:function(e){return y("config",e)}},M=a(16),S=a(39),D=a(26),C=a(13),w=C.List,T=C.Map,F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleSelectMessage=function(e){a.props.callbacks.onSet(w(),e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(void 0===this.props.messageDescriptor)return null;var e=w();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"message-builder"},n.a.createElement("div",{className:"inner-message-builder"},n.a.createElement("h1",null,this.props.messageDescriptor.name," builder"),n.a.createElement(x,{path:e,messageDescriptor:this.props.messageDescriptor,callbacks:this.props.callbacks}),n.a.createElement(N,{path:e,storedMessages:this.props.storedMessages,messageDescriptor:this.props.messageDescriptor,shouldSet:!0,onSelectMessage:this.handleSelectMessage}),n.a.createElement(I,{path:e,storedMessages:this.props.storedMessages,messageDescriptor:this.props.messageDescriptor,values:this.props.message,callbacks:this.props.callbacks}))),n.a.createElement("div",{className:"output"},n.a.createElement(A,{messageDescriptor:this.props.messageDescriptor,format:this.props.format,builtMessage:this.props.builtMessage,buildMessageUpToDate:this.props.buildMessageUpToDate,callbacks:this.props.callbacks})))}}]),t}(n.a.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).fullMessageDescriptorName=function(){return D.fullMessageDescriptorName(a.props.messageDescriptor)},a.handleSelectMessage=function(e){var t=e.target.value;if(""!==t){var r=a.props.storedMessages.getIn([a.fullMessageDescriptorName(),t]);a.props.onSelectMessage(r),e.target.value=""}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.storedMessages.get(this.fullMessageDescriptorName())||T();return e.isEmpty()?null:n.a.createElement("select",{onChange:this.handleSelectMessage},n.a.createElement("option",{value:""},"Stored message"),e.keySeq().map(function(e){return n.a.createElement("option",{key:e,value:e},e)}))}}]),t}(n.a.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleExportToFile=function(){return a.props.callbacks.onExport("file")},a.handleChangeFormat=function(e){return a.props.callbacks.onSetFormat(e.target.value)},a.handleFileChange=function(e){var t=e.target.files[0],r=new FileReader;r.onload=function(){var e=new Uint8Array(r.result);a.props.callbacks.onImport(e)},r.onerror=function(e){return console.error("FileLoading of",t,"failed:",e)},r.readAsArrayBuffer(t)},a.handleImportFromFile=function(){return a.refs.fileuploader.click()},a.handleChangeBuiltMessage=function(e){var t="binary"===a.props.format?new Uint8Array(e.target.value.split(",")):e.target.value;a.props.callbacks.onImport(t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderControls",value:function(){return n.a.createElement("div",{className:"io-controls"},n.a.createElement("div",null,"Format:",n.a.createElement("select",{onChange:this.handleChangeFormat,defaultValue:this.props.format},D.converterFormats.map(function(e){return n.a.createElement("option",{key:e,value:e},D.converterName(e))}))),n.a.createElement("div",null,"import",n.a.createElement("button",{onClick:this.handleImportFromFile},"Load from file"),n.a.createElement("input",{type:"file",ref:"fileuploader",onChange:this.handleFileChange,hidden:!0})),n.a.createElement("div",null,"export",n.a.createElement("button",{onClick:this.handleExportToFile}," Save as file ")))}},{key:"render",value:function(){var e=this.props.builtMessage[0],t=null===e?this.props.builtMessage[1]:null;return n.a.createElement("div",{className:"inner-output"},this.renderControls(),n.a.createElement("textarea",{value:t||e,className:null===e?"invalid area":"area",disabled:!this.props.buildMessageUpToDate,onChange:this.handleChangeBuiltMessage}))}}]),t}(n.a.Component),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleStartStoring=function(){a.setState({isStoring:!0})},a.handleCommitStore=function(){var e=a.refs.storeName.value,t=D.fullMessageDescriptorName(a.props.messageDescriptor);a.props.callbacks.onStore(a.props.path,t,e),a.setState({isStoring:!1})},a.handleDiscardStore=function(){a.setState({isStoring:!1})},a.state={isStoring:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.messageDescriptor;return e&&e.constructor===M.Type?this.state.isStoring?n.a.createElement(n.a.Fragment,null,"Store as ",n.a.createElement("input",{type:"text",ref:"storeName"}),n.a.createElement("button",{onClick:this.handleDiscardStore},"cancel"),n.a.createElement("button",{onClick:this.handleCommitStore},"store")):n.a.createElement("button",{onClick:this.handleStartStoring},"store"):null}}]),t}(n.a.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).isRegularField=function(e){return null===e.partOf},a.fieldTypeName=function(e){var t=e.type;return e.map?"map<"+e.keyType+","+t+">":t+(e.repeated?"*":"")+(e.required?"!":"")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object.values(this.props.messageDescriptor.fields).filter(this.isRegularField),a=Object.values(this.props.messageDescriptor.oneofs||{}),r=t.map(function(t){return n.a.createElement("li",{key:t.name},n.a.createElement("b",null,e.fieldTypeName(t))," - ",t.name," = ",t.id,n.a.createElement(B,{path:e.props.path.concat([t.id]),storedMessages:e.props.storedMessages,fieldDescriptor:t,valueEntries:e.props.values.get(t.id)||w(),callbacks:e.props.callbacks}))}),s=a.map(function(t){return n.a.createElement("li",{key:t.name},n.a.createElement("b",null,"oneof")," ",t.name,n.a.createElement(U,{path:e.props.path,storedMessages:e.props.storedMessages,messageDescriptor:e.props.messageDescriptor,oneOfDescriptor:t,values:e.props.values,callbacks:e.props.callbacks}))});return n.a.createElement("ul",null,r,s)}}]),t}(n.a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.valueEntries.map(function(t,a){return n.a.createElement(P,{key:t.get("id"),path:e.props.path,storedMessages:e.props.storedMessages,index:a,numEntries:e.props.valueEntries.size,fieldDescriptor:e.props.fieldDescriptor,valueEntry:t,callbacks:e.props.callbacks})});return n.a.createElement("ul",null,t,n.a.createElement(R,{path:this.props.path,storedMessages:this.props.storedMessages,fieldDescriptor:this.props.fieldDescriptor,numValueEntries:this.props.valueEntries.size,callbacks:this.props.callbacks}))}}]),t}(n.a.Component),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleSet=function(){a.props.callbacks.onAdd(a.props.path,D.defaultValueEntryForField(a.props.fieldDescriptor))},a.handleSelectMessage=function(e){var t=T({id:S.generate(),value:e});a.props.callbacks.onAdd(a.props.path,t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0===this.props.numValueEntries,t=this.props.fieldDescriptor.repeated||this.props.fieldDescriptor.map;return e||t?n.a.createElement("li",null,n.a.createElement("button",{onClick:this.handleSet}," ",t?"add":"set"," "),n.a.createElement(N,{path:this.props.path,storedMessages:this.props.storedMessages,messageDescriptor:this.props.fieldDescriptor.resolvedType,onSelectMessage:this.handleSelectMessage})):null}}]),t}(n.a.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleDelete=function(){return a.props.callbacks.onDelete(a.props.path.concat([a.props.index]))},a.handleDuplicate=function(){a.props.callbacks.onAdd(a.props.path,a.props.valueEntry.set("id",S.generate()))},a.handleMoveUp=function(){a.props.callbacks.onMove(a.props.path,a.props.index,a.props.index-1)},a.handleMoveDown=function(){a.props.callbacks.onMove(a.props.path,a.props.index,a.props.index+1)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null===this.props.fieldDescriptor.partOf,t=this.props.fieldDescriptor.repeated||this.props.fieldDescriptor.map,a=this.props.fieldDescriptor.repeated,r=this.props.index!==this.props.numEntries-1,s=0!==this.props.index;return n.a.createElement("li",{key:this.props.valueEntry.get("id")},n.a.createElement("button",{onClick:this.handleDelete,hidden:!e,className:"tiny"},"-"),n.a.createElement("button",{onClick:this.handleDuplicate,hidden:!t,className:"tiny"},"*"),n.a.createElement("button",{onClick:this.handleMoveDown,hidden:!a,disabled:!r,className:"tiny"},"v"),n.a.createElement("button",{onClick:this.handleMoveUp,hidden:!a,disabled:!s,className:"tiny"},"^"),n.a.createElement(x,{path:this.props.path.concat([this.props.index,"value"]),messageDescriptor:this.props.fieldDescriptor.resolvedType,callbacks:this.props.callbacks}),this.props.fieldDescriptor.map?n.a.createElement(J,{path:this.props.path.concat([this.props.index,"key"]),storedMessages:this.props.storedMessages,fieldType:this.props.fieldDescriptor.keyType,resolvedType:null,value:this.props.valueEntry.get("key"),callbacks:this.props.callbacks}):n.a.createElement(n.a.Fragment,null),n.a.createElement(J,{path:this.props.path.concat([this.props.index,"value"]),storedMessages:this.props.storedMessages,fieldType:this.props.fieldDescriptor.type,resolvedType:this.props.fieldDescriptor.resolvedType,value:this.props.valueEntry.get("value"),callbacks:this.props.callbacks}))}}]),t}(n.a.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).currentFieldDescriptor=function(){var e=a.props.values.keySeq().find(function(e){return a.props.messageDescriptor.fieldsById[e].partOf===a.props.oneOfDescriptor});return void 0===e?null:a.props.messageDescriptor.fieldsById[e]},a.onChange=function(e){var t=a.currentFieldDescriptor();if(null!==t&&a.props.callbacks.onDelete(a.props.path.concat([t.id,0])),0!==e.target.value.length){var r=parseInt(e.target.value,10),n=a.props.messageDescriptor.fieldsById[r];a.props.callbacks.onAdd(a.props.path.concat([n.id]),D.defaultValueEntryForField(n))}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.currentFieldDescriptor();return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("select",{value:null!==e?e.id:"",onChange:this.onChange},n.a.createElement("option",{value:""}),this.props.oneOfDescriptor.fieldsArray.map(function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.type," - ",e.name," = ",e.id)})),null!==e?n.a.createElement(B,{path:this.props.path.concat([e.id]),storedMessages:this.props.storedMessages,fieldDescriptor:e,valueEntries:this.props.values.get(e.id)||w(),callbacks:this.props.callbacks}):n.a.createElement(n.a.Fragment,null))))}}]),t}(n.a.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){switch(this.props.fieldType){case"string":return n.a.createElement(V,{path:this.props.path,value:this.props.value,callbacks:this.props.callbacks});case"bytes":return n.a.createElement(L,{path:this.props.path,value:this.props.value,callbacks:this.props.callbacks});case"int32":case"int64":case"sint32":case"sint64":case"uint32":case"uint64":case"fixed32":case"fixed64":return n.a.createElement(q,{path:this.props.path,value:this.props.value,callbacks:this.props.callbacks});case"float":case"double":return n.a.createElement($,{path:this.props.path,value:this.props.value,callbacks:this.props.callbacks});case"bool":return n.a.createElement(_,{path:this.props.path,value:this.props.value,callbacks:this.props.callbacks})}var e=this.props.resolvedType;return e.constructor===M.Enum?n.a.createElement(z,{path:this.props.path,type:e,value:this.props.value,callbacks:this.props.callbacks}):e.constructor===M.Type?n.a.createElement(I,{path:this.props.path,storedMessages:this.props.storedMessages,messageDescriptor:e,values:this.props.value,callbacks:this.props.callbacks}):(console.error("Unhandled input type",this.props.fieldType),n.a.createElement("div",null))}}]),t}(n.a.Component),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){a.props.callbacks.onSet(a.props.path,e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("textarea",{onChange:this.handleChange,value:this.props.value})}}]),t}(n.a.Component),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).isValid=function(){return M.util.base64.test(a.props.value)},a.handleChange=function(e){a.props.callbacks.onSet(a.props.path,e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.isValid();return n.a.createElement("textarea",{onChange:this.handleChange,value:this.props.value,className:e?"":"invalid"})}}]),t}(n.a.Component),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).isValid=function(){return/^[0-9]+$/.test(a.props.value)},a.handleChange=function(e){a.props.callbacks.onSet(a.props.path,e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.isValid();return n.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.props.value,className:e?"":"invalid"})}}]),t}(n.a.Component),$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).isValid=function(){return/^[0-9]+$|^[0-9]+[.][0-9]*$|^[0-9]*[.][0-9]+$/.test(a.props.value)},a.handleChange=function(e){a.props.callbacks.onSet(a.props.path,e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.isValid();return n.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.props.value,className:e?"":"invalid"})}}]),t}(n.a.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){a.props.callbacks.onSet(a.props.path,e.target.checked)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("input",{type:"checkbox",checked:this.props.value,onChange:this.handleChange})}}]),t}(n.a.Component),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){var t=parseInt(e.target.value);a.props.callbacks.onSet(a.props.path,t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=w(Object.keys(this.props.type.valuesById)).sort();return n.a.createElement("select",{defaultValue:this.props.value,onChange:this.handleChange},t.map(function(t){return n.a.createElement("option",{value:t,key:t},e.props.type.valuesById[t]," = ",t)}))}}]),t}(n.a.Component),K=F,G=a(26),H=a(16),Q=a(13),W=Q.List,X=Q.Map,Y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"inner-proto-library"},n.a.createElement("h2",null,"Known messages"),n.a.createElement(Z,{protoRoot:this.props.protoRoot,storedMessages:this.props.storedMessages,callbacks:this.props.callbacks}),n.a.createElement("h2",null,"Known files"),n.a.createElement(ae,{filenames:this.props.filenames,fileDependencies:this.props.fileDependencies,callbacks:this.props.callbacks}),n.a.createElement(oe,{callbacks:this.props.callbacks}),n.a.createElement(le,{callbacks:this.props.callbacks}))}}]),t}(n.a.Component),Z=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.protoRoot?n.a.createElement(ee,{name:"",namespace:this.props.protoRoot,storedMessages:this.props.storedMessages,callbacks:this.props.callbacks}):n.a.createElement(n.a.Fragment,null)}}]),t}(n.a.Component),ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleBuild=function(){return a.props.callbacks.onSelectMessageDescriptor(a.props.namespace)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.namespace.nested||{},r=Object.entries(a),s=r.filter(function(e){var t=Object(d.a)(e,2);t[0];return t[1].constructor===H.Namespace}),o=r.filter(function(e){var t=Object(d.a)(e,2);t[0];return t[1].constructor===H.Type});if(this.props.namespace.constructor===H.Namespace){var l=this.props.name?this.props.name+".":"";if(1===s.length&&0===o.length){var i=Object(d.a)(s[0],2),c=i[0],p=i[1];return n.a.createElement(t,{name:l+c,namespace:p,storedMessages:this.props.storedMessages,callbacks:this.props.callbacks})}if(0===s.length&&1===o.length){var u=Object(d.a)(o[0],2),h=u[0],m=u[1];return n.a.createElement(te,{name:l+h,message:m,storedMessages:this.props.storedMessages,callbacks:this.props.callbacks})}}return n.a.createElement(n.a.Fragment,null,this.props.name,n.a.createElement("button",{onClick:this.handleBuild,hidden:!this.props.buildable},"build"),n.a.createElement("ul",null,s.map(function(a){var r=Object(d.a)(a,2),s=r[0],o=r[1];return n.a.createElement("li",{key:s},n.a.createElement(t,{name:s,namespace:o,storedMessages:e.props.storedMessages,callbacks:e.props.callbacks}))}),o.map(function(t){var a=Object(d.a)(t,2),r=a[0],s=a[1];return n.a.createElement("li",{key:r},n.a.createElement(te,{name:r,message:s,storedMessages:e.props.storedMessages,callbacks:e.props.callbacks}))})))}}]),t}(n.a.Component),te=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ee,{name:this.props.name,namespace:this.props.message,buildable:!0,storedMessages:this.props.storedMessages,callbacks:this.props.callbacks}),n.a.createElement(ne,{storedMessages:this.props.storedMessages,messageDescriptor:this.props.message,callbacks:this.props.callbacks}))}}]),t}(n.a.Component),ae=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("ul",null,this.props.filenames.sort().map(function(t){return n.a.createElement("li",{key:t},n.a.createElement(re,{filename:t,fileDependencies:e.props.fileDependencies,callbacks:e.props.callbacks}))}))}}]),t}(n.a.Component),re=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){a.props.callbacks.onRemoveProto(a.props.filename)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.fileDependencies.get(this.props.filename,W()),t=e.isEmpty()?n.a.createElement(n.a.Fragment,null):n.a.createElement(ae,{filenames:e,fileDependencies:this.props.fileDependencies,callbacks:this.props.callbacks});return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:this.handleClick,disabled:!e.isEmpty(),className:"tiny"},"-"),this.props.filename,t)}}]),t}(n.a.Component),ne=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=G.fullMessageDescriptorName(this.props.messageDescriptor),a=this.props.storedMessages.get(t);return a?n.a.createElement("ul",null,a.keySeq().map(function(t){return n.a.createElement(se,{key:t,name:t,messageDescriptor:e.props.messageDescriptor,callbacks:e.props.callbacks})})):null}}]),t}(n.a.Component),se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleRemove=function(e){a.props.callbacks.onRemoveStoredMessage(G.fullMessageDescriptorName(a.props.messageDescriptor),a.props.name)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("li",null,n.a.createElement("button",{onClick:this.handleRemove,className:"tiny"},"-"),this.props.name)}}]),t}(n.a.Component),oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleStartAdding=function(){return a.setState({isAdding:!0})},a.handleFilenameChanged=function(e){var t=e.target.value;a.setState({filename:t})},a.handleProtoContentChanged=function(e){var t=e.target.value;a.setState({protoContent:t})},a.handleSubmit=function(){var e=a.state.filename,t=a.state.protoContent,r=X([[e,t]]),n=a.props.callbacks.onValidateProto(r);n?(console.error("Adding proto failed due to error",n),a.setState({error:n})):(a.props.callbacks.onAddProto(r),a.setState({filename:"",isAdding:!1,protoContent:"",error:""}))},a.state={filename:"",isAdding:!1,protoContent:"",error:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderError",value:function(){return this.state.error?n.a.createElement(n.a.Fragment,null,n.a.createElement("textarea",{value:this.state.error,className:"invalid",readOnly:!0})):n.a.createElement(n.a.Fragment,null)}},{key:"render",value:function(){return this.state.isAdding?n.a.createElement(n.a.Fragment,null,"File name: ",n.a.createElement("input",{type:"text",value:this.state.filename,onChange:this.handleFilenameChanged})," ",n.a.createElement("br",null),"ProtoContent: ",n.a.createElement("br",null),n.a.createElement("textarea",{value:this.state.protoContent,onChange:this.handleProtoContentChanged})," ",n.a.createElement("br",null),this.renderError(),n.a.createElement("button",{onClick:this.handleSubmit}," Submit ")):n.a.createElement("button",{onClick:this.handleStartAdding}," Add ")}}]),t}(n.a.Component),le=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).readFile=function(e){return new Promise(function(t,a){var r=new FileReader;r.onload=function(){var a=r.result;t([e.name,a])},r.onerror=function(t){a({file:e,err:t})},r.readAsText(e)})},a.handleFileChange=function(e){Promise.all(W(e.target.files).map(a.readFile).toJS()).then(function(e){a.props.callbacks.onAddProto(X(e))},function(e){return console.error("FileLoading of",e,"failed:")})},a.handleClick=function(){return a.refs.fileuploader.click()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:this.handleClick},"From disk"),n.a.createElement("input",{type:"file",ref:"fileuploader",onChange:this.handleFileChange,hidden:!0,multiple:!0}))}}]),t}(n.a.Component),ie=Y,ce=a(26),pe=a(16),ue=a(71),de=a(13),he=de.List,me=de.Map;function fe(e){pe.util.isNode=!0,pe.util.fs={readFileSync:function(t){var a=e.get(t);if(void 0===a)throw new Error("Needed to load unknown file: "+t);return a.get("contents")}};var t=new pe.Root,a=e.keySeq().toList();t.loadSync(a.toJS(),{keepCase:!0});var r=he(a.flatMap(function(t){return(pe.parse(e.get(t).get("contents")).imports||[]).map(function(e){return[e,t]})})).groupBy(function(e){var t=Object(d.a)(e,2),a=t[0];t[1];return a}).map(function(e){return e.map(function(e){var t=Object(d.a)(e,2);t[0];return t[1]}).toSet()});return t.resolveAll(),{protoRoot:t,fileDependencies:r}}var ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).isNightModeEnabled=function(){return!a.state.config.get("day-mode")},a.handleToggleNightMode=function(){a.setState(function(e){return{config:e.config.set("day-mode",!e.config.get("day-mode"))}})},a.handleAddProto=function(e){a.setState(function(t){var a=e.mapEntries(function(e){var t=Object(d.a)(e,2),a=t[0],r=t[1];return[a,me({contents:r})]}),r=t.rawStoredProtos.mergeDeep(a);try{var n=fe(r);return{rawStoredProtos:r,protoRoot:n.protoRoot,fileDependencies:n.fileDependencies}}catch(s){return console.error("Failed to parse protobuf contents",s),{}}})},a.handleRemoveProto=function(e){a.setState(function(t){var a=t.rawStoredProtos.delete(e),r=fe(a);return{rawStoredProtos:a,protoRoot:r.protoRoot,fileDependencies:r.fileDependencies}})},a.handleValidateProto=function(e){var t=e.mapEntries(function(e){var t=Object(d.a)(e,2),a=t[0],r=t[1];return[a,me({contents:r})]}),r=a.state.rawStoredProtos.mergeDeep(t);try{return fe(r),null}catch(n){return n}},a.handleSelectMessageDescriptor=function(e){console.log("Setting descriptor to build:",e),a.setState({messageDescriptor:e,message:me(),builtMessage:["",null],messageBuildTimer:null})},a.handleSetFormat=function(e){a.setState({format:e,builtMessage:[ce.convertTo(e,a.state.messageDescriptor,a.state.message),null],messageBuildTimer:null})},a.handleExportMessage=function(e){console.log("Export",a.state.format,"to",e);var t=ce.convertTo(a.state.format,a.state.messageDescriptor,a.state.message);if(console.log("handleExportMessage",a.refs),"file"===e){var r=ce.converterExtension(a.state.format),n=new Blob([t],{type:"application/octet-stream"});ue.saveAs(n,a.state.messageDescriptor.name+"."+r)}else console.error("Unhandled export kind:",e)},a.handleImportMessage=function(e){console.log("Import",e.length,"bytes as",a.state.format);try{var t=ce.convertFrom(a.state.format,a.state.messageDescriptor,e);a.setState({message:t,builtMessage:[ce.convertTo(a.state.format,a.state.messageDescriptor,t),null],messageBuildTimer:null})}catch(r){a.setState({builtMessage:[null,r]})}},a.handleAddToMessage=function(e,t){console.log("handleAddToMessage",a.state.message,e.toString(),t),a.setState(function(r){return{message:r.message.updateIn(e,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:he()).push(t)}),messageBuildTimer:a.scheduleBuildMessage(r.messageBuildTimer)}})},a.handleDeleteFromMessage=function(e){a.setState(function(t){var r=e.pop(),n=r.last(),s=r.pop();return{message:t.message.deleteIn(e).updateIn(s,function(e){return e.get(n).isEmpty()?e.delete(n):e}),messageBuildTimer:a.scheduleBuildMessage(t.messageBuildTimer)}})},a.handleSetInMessage=function(e,t){a.setState(function(r){return{message:r.message.setIn(e,t),messageBuildTimer:a.scheduleBuildMessage(r.messageBuildTimer)}})},a.handleMoveInMessage=function(e,t,r){a.setState(function(n){return{message:n.message.updateIn(e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he(),a=e.get(t);return e.delete(t).insert(r,a)}),messageBuildTimer:a.scheduleBuildMessage(n.messageBuildTimer)}})},a.handleStoreMessage=function(e,t,r){a.setState(function(a){var n=a.message.getIn(e);return{rawStoredMessages:a.rawStoredMessages.updateIn([t],function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()).set(r,n)})}})},a.handleRemoveStoredMessage=function(e,t){a.setState(function(a){var r=a.rawStoredMessages.deleteIn([e,t]);return r=r.get(e).isEmpty()?r.delete(e):r,console.log("handleRemoveStoredMessage",e,t,r),{rawStoredMessages:r}})},a.scheduleBuildMessage=function(e){return clearTimeout(e),setTimeout(function(){return a.setState(function(e){try{return{builtMessage:[ce.convertTo(e.format,e.messageDescriptor,e.message),null],messageBuildTimer:null}}catch(t){return{builtMessage:[null,t],messageBuildTimer:null}}})},500)},a.state={config:me(),rawStoredProtos:me(),protoRoot:null,fileDependencies:me(),rawStoredMessages:me(),message:me(),format:"binary",builtMessage:["",null]},a.libraryCallbacks={onAddProto:a.handleAddProto,onRemoveProto:a.handleRemoveProto,onValidateProto:a.handleValidateProto,onSelectMessageDescriptor:a.handleSelectMessageDescriptor,onRemoveStoredMessage:a.handleRemoveStoredMessage},a.messageBuilderCallbacks={onAdd:a.handleAddToMessage,onDelete:a.handleDeleteFromMessage,onSet:a.handleSetInMessage,onMove:a.handleMoveInMessage,onStore:a.handleStoreMessage,onSetFormat:a.handleSetFormat,onExport:a.handleExportMessage,onImport:a.handleImportMessage},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=k.load(),t=fe(e),a=t.protoRoot,r=t.fileDependencies,n=O.load(),s=E.load(),o=j.load();this.setState({config:o,rawStoredProtos:e,protoRoot:a,fileDependencies:r,rawStoredMessages:n,format:s})}},{key:"componentDidUpdate",value:function(e,t){t.rawStoredProtos!==this.state.rawStoredProtos&&k.save(this.state.rawStoredProtos),t.format!==this.state.format&&E.save(this.state.format),t.rawStoredMessages!==this.state.rawStoredMessages&&O.save(this.state.rawStoredMessages),t.config!==this.state.config&&j.save(this.state.config)}},{key:"render",value:function(){return n.a.createElement("div",{className:"protool ".concat(this.isNightModeEnabled()?"night-mode":"")},n.a.createElement("div",{className:"proto-library"},n.a.createElement(ie,{filenames:this.state.rawStoredProtos.keySeq().toList(),fileDependencies:this.state.fileDependencies,protoRoot:this.state.protoRoot,storedMessages:this.state.rawStoredMessages,callbacks:this.libraryCallbacks}),n.a.createElement("div",{className:"config"},n.a.createElement("label",{className:"dark-mode-config"},"Dark mode:",n.a.createElement("input",{type:"checkbox",checked:this.isNightModeEnabled(),onChange:this.handleToggleNightMode})))),n.a.createElement("main",null,n.a.createElement(K,{key:ce.fullMessageDescriptorName(this.state.messageDescriptor),messageDescriptor:this.state.messageDescriptor,message:this.state.message,format:this.state.format,builtMessage:this.state.builtMessage,buildMessageUpToDate:null===this.state.messageBuildTimer,storedMessages:this.state.rawStoredMessages,callbacks:this.messageBuilderCallbacks})))}}]),t}(n.a.Component);a(72);o.a.render(n.a.createElement(ge,null),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.2d504487.chunk.js.map