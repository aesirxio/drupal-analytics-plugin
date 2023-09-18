"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[608],{60608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(70069),r=(a(23541),a(67294)),n=a(91072),m=a(23314),s=a(34051),i=a(31555),u=a(35005),c=a(41283),o=a.n(c),b=(0,a(38585).Pi)((()=>{const{biListViewModel:e}=(0,l.mQ)(),t="https://"+e?.activeDomain,[,a]=(0,r.useState)(),[c,b]=(0,r.useState)(),[p,N]=(0,r.useState)(!1),[d,E]=(0,r.useState)({eventName:"",eventType:"",buttonName:"",attributeNameA:"",attributeValueA:"",attributeNameB:"",attributeValueB:"",generatorType:"htmlButton",visitorUUID:"",referer:""}),f=e=>t=>{E({...d,[e]:t.target.value})},v=(0,r.useRef)(new(o())),{t:g}=(0,n.$G)();return r.createElement("div",{className:"py-4 px-3 h-100"},r.createElement("div",{className:"d-flex align-items-center justify-content-between mb-24 flex-wrap"},r.createElement("div",{className:"position-relative"},r.createElement("h2",{className:"text-blue-0 fw-bold mb-8px"},g("txt_events_generator"))),r.createElement("div",{className:"position-relative"})),r.createElement("div",{className:"row gx-24 mb-24"},r.createElement("div",{className:"col-lg-6 mx-auto bg-white p-24 shadow-sm rounded-3"},r.createElement(m.Z,null,r.createElement(m.Z.Group,{className:"mb-3",controlId:"formEventName"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Event Name ",r.createElement("span",{className:"text-danger"},"*")),r.createElement(m.Z.Control,{as:"input",placeholder:"Event Name",name:"eventName",defaultValue:d.eventName,onChange:f("eventName")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"example: signin"),v.current?.message("eventName",d.eventName,"required",{className:"text-danger"})),r.createElement(m.Z.Group,{className:"mb-3",controlId:"formEventType"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Event Type ",r.createElement("span",{className:"text-danger"},"*")),r.createElement(m.Z.Control,{as:"input",placeholder:"Event Type",name:"eventType",defaultValue:d.eventType,onChange:f("eventType")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"example: login"),v.current?.message("eventType",d.eventType,"required",{className:"text-danger"})),r.createElement(m.Z.Group,{className:"mb-3",controlId:"formButtonName"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Button Name"),r.createElement(m.Z.Control,{as:"input",placeholder:"Button Name",name:"buttonName",defaultValue:d.buttonName,onChange:f("buttonName")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"example: Sign In")),r.createElement(s.Z,null,r.createElement(i.Z,{lg:"6"},r.createElement(m.Z.Group,{className:"mb-3",controlId:"formAttributeNameA"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Attribute Name A"),r.createElement(m.Z.Control,{as:"input",placeholder:"Attribute Name",name:"attributeNameA",defaultValue:d.attributeNameA,onChange:f("attributeNameA")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"example: a"))),r.createElement(i.Z,{lg:"6"},r.createElement(m.Z.Group,{className:"mb-3",controlId:"formAttributeValueA"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Attribute Value A"),r.createElement(m.Z.Control,{as:"input",placeholder:"Attribute Value",name:"attributeValueA",defaultValue:d.attributeValueA,onChange:f("attributeValueA")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"example: value-a")))),r.createElement(s.Z,null,r.createElement(i.Z,{lg:"6"},r.createElement(m.Z.Group,{className:"mb-3",controlId:"formAttributeNameB"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Attribute Name B"),r.createElement(m.Z.Control,{as:"input",placeholder:"Attribute Name",name:"attributeNameB",defaultValue:d.attributeNameB,onChange:f("attributeNameB")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"example: b"))),r.createElement(i.Z,{lg:"6"},r.createElement(m.Z.Group,{className:"mb-3",controlId:"formAttributeValueB"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Attribute Value B"),r.createElement(m.Z.Control,{as:"input",placeholder:"Attribute Value",name:"attributeValueB",defaultValue:d.attributeValueB,onChange:f("attributeValueB")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"example: value-b")))),r.createElement(m.Z.Group,{className:"mb-3",controlId:"formGeneratorType"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Generator Type"),r.createElement("div",{className:"mb-3"},r.createElement(m.Z.Check,{inline:!0,label:"HTML button tag",defaultChecked:"htmlButton"===d.generatorType&&!0,onChange:f("generatorType"),value:"htmlButton",name:"group1",type:"radio",id:"inline-radio-1"}),r.createElement(m.Z.Check,{inline:!0,label:"HTML a tag",onChange:f("generatorType"),value:"htmlA",name:"group1",type:"radio",id:"inline-radio-2"}),r.createElement(m.Z.Check,{inline:!0,label:"Event",onChange:f("generatorType"),value:"event",name:"group1",type:"radio",id:"inline-radio-3"}))),"event"===d.generatorType&&r.createElement(r.Fragment,null,r.createElement(m.Z.Group,{className:"mb-3",controlId:"formvisitorUUID"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Visitor UUID"),r.createElement(m.Z.Control,{as:"input",placeholder:"Visitor UUID",name:"visitorUUID",defaultValue:d.visitorUUID,onChange:f("visitorUUID")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"(visitor_uuid is the params get from url - it will auto generated)")),r.createElement(m.Z.Group,{className:"mb-3",controlId:"formreferer"},r.createElement(m.Z.Label,{className:"fw-semibold"},"Referer"),r.createElement(m.Z.Control,{as:"input",placeholder:"Referer",name:"referer",defaultValue:d.referer,onChange:f("referer")}),r.createElement("p",{className:"fs-sm ps-1 fst-italic"},"(referer is the referer domain)"))),r.createElement(u.Z,{variant:"primary",onClick:()=>{if(v.current.allValid()){let e="htmlButton"===d.generatorType?"button":"htmlA"===d.generatorType?"a":"",a=e?`<${e}\n              data-aesirx-event-name="${d.eventName}"\n              data-aesirx-event-type="${d.eventType}"\n              ${d.attributeNameA&&d.attributeValueA&&"data-aesirx-event-attribute-"+d.attributeNameA+'="'+d.attributeValueA+'"'}\n              ${d.attributeNameB&&d.attributeValueB&&"data-aesirx-event-attribute-"+d.attributeNameB+'="'+d.attributeValueB+'"'}\n          >${d.buttonName}</${e}>`:`trackEvent(\n            "${t}",\n            "${d.visitorUUID}",\n            "${d.referer}",\n            {\n              event_name: "${d.eventName}",\n              event_type: "${d.eventType}",\n              attributes: [\n                ${d.attributeNameA&&d.attributeValueA&&'{ name: "'+d.attributeNameA+'", value: "'+d.attributeValueA+'"}'}\n                ${d.attributeNameA&&d.attributeValueA&&d.attributeNameB&&d.attributeValueB&&","}\n                ${d.attributeNameB&&d.attributeValueB&&'{ name: "'+d.attributeNameB+'", value: "'+d.attributeValueB+'"}'}\n              ]\n            }\n          )`;b(a),N(!0)}else v.current.showMessages(),a(1)},className:"py-2 px-3"},"Generate Button")),p&&r.createElement("div",{className:"mt-4 p-4 bg-white border rounded-2 text-center"},r.createElement("h3",null,"Generated Event Button"),r.createElement("div",{className:"bg-dark text-white p-24"},c)))))}))}}]);