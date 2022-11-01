"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: "select" },
        size: { control: "select" },
        fontColor: { control: "color" },
    },
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, { ...args }));
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: "h1",
    allCaps: false, // true: capitalizar toda la palabra
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: "normal",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "normal",
    color: "secondary", // primary | secondary | tertiary
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: "normal",
    color: "tertiary",
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: "h1",
    fontColor: "#b145ff",
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: "h1",
    fontColor: "#eeeeee",
    backgroundColor: "#000000",
};
