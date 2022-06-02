var d=Object.defineProperty;var a=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var t=(o,r,e)=>r in o?d(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,s=(o,r)=>{for(var e in r||(r={}))y.call(r,e)&&t(o,e,r[e]);if(a)for(var e of a(r))m.call(r,e)&&t(o,e,r[e]);return o};import{j as c}from"./jsx-runtime.3b892326.js";import"./index.e152c204.js";const l=({allCaps:o=!1,color:r="primary",label:e="No label",size:i="normal",fontColor:p})=>c("span",{className:`label ${i} text-${r}`,style:{color:p},children:o?e.toLocaleUpperCase():e});try{l.displayName="MyLabel",l.__docgenInfo={description:"A simple label component",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Main text of the label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:{value:"false"},description:"If true, the label will be rendered in all caps",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:null,description:"Custom font color of the label",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:l.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}var _={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { MyLabel } from "../../components/MyLabel";\r
\r
export default {\r
  title: "UI/MyLabel",\r
  component: MyLabel,\r
  argTypes: {\r
    size: { control: "select" },\r
    color: { control: "select" },\r
    fontColor: { control: "color" },\r
  },\r
} as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => (\r
  <MyLabel {...args} />\r
);\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
  size: "normal",\r
  allCaps: false,\r
};\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
  size: "normal",\r
  allCaps: true,\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  size: "normal",\r
  color: "secondary",\r
};\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
  size: "normal",\r
  color: "tertiary",\r
};\r
\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
  size: "h1",\r
  fontColor: "#26c7b9",\r
};\r
`,locationsMap:{basic:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},"all-caps":{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},secondary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},tertiary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},"custom-font-color":{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}}}}},title:"UI/MyLabel",component:l,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}};const n=o=>c(l,s({},o)),u=n.bind({});u.args={size:"normal",allCaps:!1};const b=n.bind({});b.args={size:"normal",allCaps:!0};const f=n.bind({});f.args={size:"normal",color:"secondary"};const C=n.bind({});C.args={size:"normal",color:"tertiary"};const L=n.bind({});L.args={size:"h1",fontColor:"#26c7b9"};const B=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{b as AllCaps,u as Basic,L as CustomFontColor,f as Secondary,C as Tertiary,B as __namedExportsOrder,_ as default};
//# sourceMappingURL=MyLabel.stories.74f28ef4.js.map
