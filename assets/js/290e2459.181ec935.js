"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["178546"], {
350938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_hds_tabs_ui_design_hds_tabs_fuzzy_style_ui_design_hds_tabs_fuzzy_style_md_290_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-hds-tabs-ui-design-hds-tabs-fuzzy-style-ui-design-hds-tabs-fuzzy-style-md-290.json
var site_docs_ui_design_kit_guide_ui_design_hds_tabs_ui_design_hds_tabs_fuzzy_style_ui_design_hds_tabs_fuzzy_style_md_290_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style/ui-design-hds-tabs-fuzzy-style","title":"设置页签栏的模糊样式","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style/ui-design-hds-tabs-fuzzy-style.md","sourceDirName":"ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style","slug":"/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置页签栏的模糊样式","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-tabs-fuzzy-style","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置页签栏的分割线","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line/"},"next":{"title":"设置页签的图标出血样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style/ui-design-hds-tabs-fuzzy-style.md


const frontMatter = {
	title: '设置页签栏的模糊样式',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-tabs-fuzzy-style',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置页签栏的模糊样式';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束条件",
  "id": "约束条件",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置页签栏的模糊样式",
        children: "设置页签栏的模糊样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置页签栏的模糊样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdstabs/ui-design-hdstabs",
        children: "HdsTabs"
      }), "容器组件扩展支持页签栏设置直接模糊和渐变模糊效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "直接模糊"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(578699)/* ["default"] */.A) + "",
            width: "328",
            height: "133"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "渐变模糊"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(484151)/* ["default"] */.A) + "",
            width: "325",
            height: "207"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖页签栏位于容器底部，barPosition设置为BarPosition.End，vertical设置为false。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabBar叠加在TabContent之上，barOverlap设置为true。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "去掉TabBar节点，barBackgroundBlurStyle默认设置的模糊的属性值为BlurStyle.NONE。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsTabsAttribute。具体请参考HdsTabs的导入模块说明。\nimport { HdsTabs, HdsTabsAttribute, HdsTabsController } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Hds一级容器组件，设置HdsTabs组件的barBackgroundStyle样式，可以自定义模糊的颜色和高度，实现渐变模糊。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(332716)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当开发者通过Tabs组件属性barBackgroundBlurStyle设置模糊时，HdsTabs的默认模糊效果失效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当开发者通过Tabs组件属性barBackgroundEffect设置模糊时，HdsTabs的默认模糊效果失效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当开发者通过Tabs组件属性barBackgroundColor设置背景色时，HdsTabs的默认模糊效果只有模糊半径生效，模糊半径为80vp。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  private controller: HdsTabsController = new HdsTabsController();\n\n  build() {\n    Column() {\n      HdsTabs({ controller: this.controller }) {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Pink)\n        }\n        .tabBar({ icon: $r('app.media.startIcon'), text: '页签1' })\n\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }\n        .tabBar({ icon: $r('app.media.startIcon'), text: '页签2' })\n      }\n      .barOverlap(true)\n      .barPosition(BarPosition.End)\n      .vertical(false)\n      .barBackgroundStyle({\n        maskColor: Color.Yellow,\n        maskHeight: 80\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
578699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958342-c6273f85cbe161362c398e2207dfb24c.png");

},
484151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCADPAUUDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAMEAQIFBggHCf/EADkQAAIBAQUGBAMJAAICAwAAAAABAgMEBRESEwYHUVJhkQgUIaEYMWIJIkFUVnGVpNIVQjI0IySB/8QAHQEBAAEEAwEAAAAAAAAAAAAAAAEEBgcIAgMJBf/EAC8RAAIBAgQFAwQCAwEBAAAAAAABAgMRBAUSEwYVIVFSBxYxCBQiQTJhYoGRI4L/2gAMAwEAAhEDEQA/AP1QAB88zwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASYLghguCJMi5PYZFyFpc6j5HXrI8FwQwXBEmRcgyLkHOo+Q1keC4IYLgiTIuQZFyDnUfIayPBcEMFwRJkXIMi5BzqPkNZHguCGC4IkyLkGT6PYc6j5DWR4LghguCJMi5PYZFyew51HyGsjwXBDBcESZFyewyLk9hzqPkNZHguCGC4IkyL8IDJ9HsOdQ8hrI8FwQwXBEmT6fYZPo9hzqPkNZHguCGC4IkyfR7DJ9HsOdR8hrI8FwQwXBEmRfjD2GRcnsOdR8hrI8FwQwXBEmRcnsMi5BzqPkNZHguCGC4IkyLkGRfhD2HOo+Q1keC4IYLgiTIuQZFyDnUfIayPBcEMFwRJk+j2GRfhAc6j5DWR4LghguCJMi/CHsMn0ew51HyGsjwXBDBcESZFyDJ9PsOdQ8hrI8FwQwXBEmRcnsMn0+w51HyGsjwXBDBcESZPo9hkXJ7DnUfIayPBcEMFwRJk+j2GT6fYc6j5DWR4LggSZF+MAOdR8hrLPl31Hl31Lel9KDo4r5djWj33/kUu4VPLvqPLvqW3Sb/AOvYyqb5UT77XkNwp+XfUeXfUuKm380hp9EPfa8huFPy76jy76lvTx9cqM6XRD32vIbhS8uzPl31Lmn9KGl0Q99LyG4U/LvqPLvqXNP0+SGl0Q99LyG4U/LvqPLvqXNP6UNPoguOl5DcKfl31Hl31Lmn0Q0/T5Ie+l5DcKfl31Hl31Lml0Q0uiJ99LyG4U/LvqPLvqXNLohp9EPfS8huFPy76jy76lzS6IafREe+15DcKfl31Hl31LipdENN8EFx2vIbjKfl31Hl31Lmnj/1Q0uiHvteQ3GU/LvqPLvqXNLohpvlQ99ryG4yl5dmfLvqXNN8qGl0RPvpeQ3GU/LvqPLvqXNN8qCpdER77XkNxlPy76jy76lzS6IaXRD30vIbhT8u+o8u+pc0uiMaeH/Ue+1f+Q3Cp5d9R5d9S3pvlM6fr/4oe+15DcKfl31Hl31Lml0Q0uiHvpeQ3Cn5d9QXNLogPfa8huFjS6IaXREuV8r7jK+V9zWfnFXuUeoi0uiGl0RJlfL7mcr5X3HOKvcaiLS6IaXREuV8r7mMr5fcc4q9xqI9LohpdES5XyvuYyvl9xzir3Goj0sWkksW8EeWdpvH/vJ2q2yvnZ/wu+GS+NvLvuC2Oy2++rPCvOlKqm192NGnLLFuMsrlLGSWOCR6mtqlGyVZJfKlJ449GeI/skt/l4bE7q9udmrNuh252g1NqaVrlb9lrjja6NNys+TTqN1IZZ/czJeuMXj6fjuj9I/p1wn6h4TPc3z7CfefYrDRp0pVJ04XryqKU5OnKEm4qmlFarfk20+lsW+ovEWaZZisFgsHXdFVtxymoqUvwUbJXTSvfq7fo5O5vH/4wdorfeV17PeBu3260XNbPK3tQstK3ylY6+VS0qi0vuTytPK/XBp/Jo+u+E3xi3R4k7Zfexl+bEWvZfa7ZyS/5i4LbNycYOeRzi5RjJZZ/dlCUVKLa+aeJ03d943roufeFvSuu/dzG8ezV6+3itHl47OxnUox/wCOslHJWjrLTqf/AA58uMvuzg8T5P4Dd4UN5n2me9LbCz3Vb7BTvO57wrqw3pTVO0UkrVZIpVIpvLL0xwxeGPzZsp6zegXptg/SfO83y/JFga+Cw8a9OpTrVp3d6eqElUqTjKMoyl8JNWTuWHw1xrn8eIsHQq4514VqjhKMoRVl+VmnGKad0v3/AKPe2l0Q0uiJMr5fczlfK+55Nc4q9zY5SItLohpdESZXy+5nK+V9xzir3Goi0uiGl0RLlfK+4yvlfcc4q9xqItLohpdESZXy+5nK+V9xzir3Goi0uiGl0RLlfK+4yvlfcc4q9xqItLohpdES5XyvuYyvh7jnFXuNRHpdENLoiTK+X3M5XyvuOcVe41EWl0Q0uiJMr5fczlfK+45xV7jURaXRHS9/++7ZDw67sLdvQ20jVqWeyyhSs9ks2Graq821ClDN6JvBtt+kYxk/wwO8ZXy+55L+2QtM7J4YrownlU9saEZYv0/9S0/Myr6H5FgvUX1cyXhvMZPYxVeEKml2bh8ySf61JNX+Ve66lt8YZvicj4YxeOw9tynBuN/i/wAL/hxm0f2gHixuLZarvEtPgfvKx7NwsytX/L2+NtVGFnlg41ZVNFRytNfewS9cTFt+0N8Tuxd0x233n+B6+bv2bpqnO13nFWuioUptKM1OtRyLHMsM2CbaWKxPoXiI8Vt63r4Kr/qS8Om9Cxwtu72NF2q37NQp2WhGdmhDVnV1m1SWObNl/wDHD0WPp8/8Z3jc2c2/8Km1dxXduu2/sdW+rip2dV71uCNGz2fPKljKpUVWWEVh88PV4fLE9Vst+n/0izNUqL4VpKM6jpylHEYm8V+Cvff/AJfk3f46LoYAxXGHEuF1zWbTbjDWk6dOzf5dP4fHRf31PUm7LeDsvvb2BuneTsXbHXuu+bFG02OpOGWWV+jjKP8A1lGSlGS/BxZz2l0R8E+y9rytngh2MtDk5YyvFLF/JK31z7/lfL7nkZ6m4GlwX6j5xw/hZuVLB4qvRg5fycaVWUIuVrK9oq9kuv6Ni+HsyrZrkOFxtVWlVpwm7fF5RTdv+kel0Q0uiJcr5X3MZXy+5Y/OKvc+xqI9LohpdES5XyvuMr5X3HOKvcaiLS6IaXREuV8r7jK+V9xzir3Goi0uiBJkf4L3A5xV7jUbg30v37DS6Mt+7OGpGgN9L9+w0v3F2Lo0Bvpfv2Gl0YuxqRoDfS6MaXRi7GpEValGtTlRnLCM4uMnh8k1hifmX4ZPGHs/9nItu/D14hd3u0NO9J7V+cs9Ww06WSdNUtJSWrOGaElGM4zjmUlL8Gj9OHQnP7lLBTl6Qclik36LHoecrFvb263j7cWG59td3GyttuOvbLFZrDfFv2VhXlJ2i12qzp6c7fOdGnKdlmoSyybeLlCKj97cP6T/AFWxPpvTzunXy+OMwNeNCVWLr/b1IzpSqOk6ctuopt6pp09Op9GukWYz9Qskjm1XCVaVd0q0HNRejXFqSSlqV1a1l1vb9fs8XVvtLd0Ns3kba7X23Zi+Kdl2h2ghbbuhCrZ51IUo2WhQwqJ1Eoyxo5sE2sJYY+h9P+yXunabep4ot43ilsWzVssey1uu+rYrBarXH0r161ejPThJek3CFHGbi2oucVjiz6xfm+zZ+79sbZcth3KbpoWOhf0aNG3Wq7G1Ss0s0VCq6dncnVTwqOrShOgl9xzUnivQexO2tvtW8e892M9jbJd133ZcNivC6rZY7bGcbXSrVa1NuNKMEqMFKk8qxbaeLUfkbIevf1MZlmvpVjeH8u4b+z++w8Yyq1MZCtpoRlR1KNNU4N1Hqpp/k3FSc9LSuWNwlwXCnxBRxeKx27szbUY0nG83qteV30+X8dbWudyBvpfuNLozysuzYW6NAb6X79hp/uLsXRoDfS/fsNLoxdi6NAb6XRjS6MXY1I0BvpdGNLoxdjUjQG+l0Y0v37C7F0aA30v37DS6MXYujQG+l0Y0v3F2NSNDy/8Aa57r9s95XhJrV9h7mr3haNn79oXna7LZabnUdlVKtSqTjBessmqptL1yqT/A9R6X7nU98G1e1Gxeztkt+x9no2i3Wu9rPYbPZatidZ16lZuMIR/+xQjB5li5Sngkn6N4F/elnGmY+nfqLlfEuBpxqVcJWhUUJtqM7PrFtXaUo3Wqzte9uh8biHK6GeZJiMBVk4xqxcbr5V/h/wCmeC99X2vm5PeF4dr53YXVsRtDZ77vTZL/AIpeaqWZWelWdCNKUnNVXJwWDa+7i/RYI+P73vHru03obpb03b7NbMXy71vmwwslGMtGcVNyhjhpzcp/+LSSji20e6rDt3G9d1177fbZ7o93dC+6Vgu6vSheGzUPLKVspyqxqurSnaKtppuEZ4KEI1JNJ5Un6XtyO8ZbYbUXlR2X3L7urBetmsFO03NYrDBWe1SnJRTzV4UZUtOP3qjlCTqRi8jgpp4+mGD+ubg/JsHOpheEqt6ctXXHx067Qtd/b9YfHW3xe7MJYj0sz3G1LVsyjZrT0o9dPX/P56s577Pbdltduh8HuxOw+3d1VbDe9Kw1rVbrDXWFSzStFoqV40pr8JxjUipL8HivwPs513dJtvad5Ow9Dau13fQoSqWq00IzsVolWs9pjRrzpK0UJyjFzo1FDPCTSbjJfNYN9l0ujPLnjjiLMuLeM8yzzHxUa+Kr1a04x/ip1KkpyUer6JtpdX0M7ZTgqGWZXQwdJtxpwjBN/LUUkr/30NAb6X79hpdGWvdn0Lo0Bvpfv2Gl0YuxdGgN9P8AcaXRi7GpGgN9LowLsakW9DrEeXa/GJf0VyrsNFcq7HXdlDvFDy/1R7DQ/DNEv6K5Y9hpdELsjeKGh1iNDrEv6K5V2GiuVdhdk7xQ8u38pR7Dy/1R7F/RXLHsNFcsewuyN44Lae0XjdOztvvW6bnr3ja7LYa1WzXfY5whWtNSMHKFKEpvKpyklFOX3U2sfTE8i3Te+9e57dZNorN9ndvjd92e2Ua9S/J7b3Nr2iNObnGhUpqsqGinKeFONKMYOpOUMk5Ob9r6K5V2MeXhyR7GRuB/UCjwZhcRRnl1PE7zjdzq4mm9MU1of29eipQd7uM1JNpdj4mbZZPNKkJKs4ae0YPr06/nGVn/AGrHiG+ry38X5tFPae0+CXftTtNS9Hb2qG2GzihqalGrkytPNT1LPQnkeMXKkpPFuTl9f3Qb1t6+2++SFu2y8FG2+x3n7mVitu09+X9d1ezUqVCVWvThKlZ60pOU6lWazRj85rH0Xp9/8vDkj2CoQXqoRX/4XHxB6u5bxBlUsHPIcPTapypwnGtjb01K3VKWKcJWcYySnGUW4q8WuhQ4PIK2DxCqLFzfVNpxp9bf/F18tXTT6lFUJYeuX1Hl3jhjEv6K5Y9horlXYwtdl07xQ0Pqj+w0PriX9Fcq7B0k/mkRcneKGh1iNDrEvukn80g6SfzSJuxvFDy/1R7DQb+WUv6K5V2GiuWPYXZG8UPLtfjHsNDrEv6K5Y9hpLghdjeKGg38nEaH1R7F/ST+aQ0Vyx7C7G8UND6o9h5d80exf0Vyx7DRXKuwuxvFDQfGI0PxzRL+kuCGil8kuwuxvFDQ+qJwe3m72w7wbro3Nel93jZLNStUa1WN12lUJ1sE0oOrlc6a9cc1OUJ8JJY49r0k/mkNFcq7HOnWqUZqcHZr4YdVSVmfNLP4cNiLr2cvXY/ZW9L2ua6r2s1ChO77uty07JCljljZ9WE5UY4NLLF5Y4JwUHi3Usfhf2VoWDaC6rXt3tVabLtLYJWO87PK9qdHClKrUqyVKVCjCVHNOrWclBpS1p4p4rD6torlj2GiuWPYrVm+ZJNbr6tN97q1nf5v0XX+jr/8ux17ZLZCybHXDQ2esF42y00bOmqNS8LTq1Ix/CCeCwjFekYpYJLBHJaDXzcS/orlj2GiuWPYoalSdWbnJ3b6nNVUlZFDQ+qI0Pqj2L+l0Q0VyrscbsneKGh9URofVHsX9Fcq7DRXKuwuxvFDQfyzRGh1iX9JcENFcq7C7G8UNDrEF/RXLHsBdk7xNkXFjIuLMg67so7sxkXFjIuLMgXYuzGRcWMi4syBdi7MZFxYyLizIF2LsxkXFjIuLMgXYuzGRcWMi4syBdi7MZFxYyLizIF2Ls6vvI3s7EbqqNmq7W2+rTlbJSVnpULPKpKSjhmeC+SWK9XxOp/F9ua/O3n/ABczu23O7LYfeRQs9DbO4YWxWWTlZ5OpOEoN4Y4Si08HgvT5eiOufC1uM/RX9+v/ALO+MqCj+V7i7OM+L7c1+dvP+LmPi+3Nfnbz/i5nJ/C1uM/RX9+v/sfC1uM/RX9+v/s5asL2ZF2cZ8X25r87ef8AFzHxfbmvzt5/xczk/ha3Gfor+/X/ANj4Wtxn6K/v1/8AY1YXsxeRxnxfbmvzt5/xcx8X25r87ef8XM5P4Wtxn6K/v1/9j4Wtxn6K/v1/9jVhezF5HGfF9ua/O3n/ABcx8X25r87ef8XM5P4Wtxn6K/v1/wDY+FrcZ+iv79f/AGNWF7MXZxnxfbmsP/dvP+LmPi+3Nfnbz/i5nJ/C1uM/RX9+v/sfC1uM/RX9+v8A7GrC9mLyJNh/ETuw2/2gpbMXFeVqVrrxk6ELTYpU1UcU20m/THBN4dDvahFrH1Op7Jbid1ew99Q2h2Z2VhZ7ZSjKNOvK0VKjgmsHgpyaTa9Mfn6nbjpqShf8Pgm7MZFxYyLizIOF2LsxkXFjIuLMgXYuzGRcWMi4syBdi7MZFxYyLizIF2LsxkXFjIuLMgXYuzGRcWMi4syBdi7MZFxYMgXYuz//2Q==");

},
332716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);