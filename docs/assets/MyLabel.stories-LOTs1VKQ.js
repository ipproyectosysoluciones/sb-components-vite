import{j as q}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const v=({label:s,size:k="normal",allcaps:B=!1,color:S,fontColor:T,backgroundColor:L="transparent"})=>q.jsx("span",{className:`${k} ${S} label`,style:{color:T,backgroundColor:L},children:B?s.toUpperCase():s});v.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allcaps:{required:!1,tsType:{name:"boolean"},description:"Make text all caps",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Label font color"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Label Backgrond Color",defaultValue:{value:"'transparent'",computed:!1}}}};const M={title:"UI/labels/MyLabel",component:v,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps label",allcaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},o={args:{label:"Custom Color label",fontColor:"#5517ac"}},l={args:{label:"Custom Background Color label",size:"h1",fontColor:"#eeeeee",backgroundColor:"#000000"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,u,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    allcaps: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,d,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var C,g,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    fontColor: '#5517ac'
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Custom Background Color label',
    size: 'h1',
    fontColor: '#eeeeee',
    backgroundColor: '#000000'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const _=["Basic","AllCaps","Secondary","CustomColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,l as CustomBackgroundColor,o as CustomColor,r as Secondary,_ as __namedExportsOrder,M as default};
