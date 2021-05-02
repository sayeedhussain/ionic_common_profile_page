import { r as registerInstance, h } from './index-8b6ad0a1.js';

const profilePageCss = ".hero{background-color:rgb(240, 240, 230);padding-bottom:20px;padding-top:20px;text-align:center}.left{font-size:18px;float:left;padding-left:20px}.right{float:right;padding-right:20px}";

const ProfilePage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("div", { class: "hero" }, h("img", { src: "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png" }), h("h1", null, "Marco"), h("span", { class: "title" }, "Contact"), " ", h("span", null, "+9199889988")), h("div", null, h("br", null), h("br", null), h("br", null), h("span", { class: "left" }, "Completed Claims"), h("span", { class: "right numberCircle" }, "10"), h("br", null), h("br", null), h("span", { class: "left" }, "Pending Claims"), h("span", { class: "right numberCircle" }, "2"))));
  }
};
ProfilePage.style = profilePageCss;

export { ProfilePage as profile_page };
