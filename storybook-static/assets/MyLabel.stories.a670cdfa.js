var i=Object.defineProperty;var l=(e,a)=>i(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime.fdca0c34.js";import"./iframe.4233e95c.js";const o=l(({allCaps:e=!1,color:a="primary",label:n="No Label",size:s="normal",fontColor:c})=>t("span",{className:`label ${s} text-${a}`,style:{color:c},children:e?n.toUpperCase():n}),"MyLabel");try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{fontColor:{defaultValue:null,description:"Color personalizado del color de la fuente",name:"fontColor",required:!1,type:{name:"string"}},label:{defaultValue:{value:"No Label"},description:"Este es el mensaje a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tama\xF1o de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Transforma el texto en may\xFAsculas",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Cambia el color del texto",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:o.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { MyLabel } from "../../components/MyLabel";\r
\r
export default {\r
  title: "UI/MyLabel",\r
  component: MyLabel,\r
  argTypes: {\r
    color: { control: "select" },\r
    size: { control: "select" },\r
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
  size: "h1",\r
  allCaps: false, // true: capitalizar toda la palabra\r
};\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
  size: "normal",\r
  allCaps: true,\r
};\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  size: "normal",\r
  color: "secondary", // primary | secondary | tertiary\r
};\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
  size: "normal",\r
  color: "tertiary",\r
};\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
  size: "h1",\r
  fontColor: "#b145ff",\r
};\r
`,locationsMap:{basic:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},"all-caps":{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},secondary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},tertiary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},"custom-font-color":{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}}}}},title:"UI/MyLabel",component:o,argTypes:{color:{control:"select"},size:{control:"select"},fontColor:{control:"color"}}},r=l(e=>t(o,{...e}),"Template"),d=r.bind({});d.args={size:"h1",allCaps:!1};const p=r.bind({});p.args={size:"normal",allCaps:!0};const y=r.bind({});y.args={size:"normal",color:"secondary"};const m=r.bind({});m.args={size:"normal",color:"tertiary"};const u=r.bind({});u.args={size:"h1",fontColor:"#b145ff"};const g=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{p as AllCaps,d as Basic,u as CustomFontColor,y as Secondary,m as Tertiary,g as __namedExportsOrder,L as default};
//# sourceMappingURL=MyLabel.stories.a670cdfa.js.map
