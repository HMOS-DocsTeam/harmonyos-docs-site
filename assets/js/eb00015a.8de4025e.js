"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["110222"], {
576950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_actionbar_ui_design_actionbar_without_master_button_ui_design_actionbar_without_master_button_md_eb0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-actionbar-ui-design-actionbar-without-master-button-ui-design-actionbar-without-master-button-md-eb0.json
var site_docs_ui_design_kit_guide_ui_design_actionbar_ui_design_actionbar_without_master_button_ui_design_actionbar_without_master_button_md_eb0_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button/ui-design-actionbar-without-master-button","title":"设置无主按钮的组件","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button/ui-design-actionbar-without-master-button.md","sourceDirName":"ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button","slug":"/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置无主按钮的组件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-actionbar-without-master-button","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置有主按钮的组件","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons/"},"next":{"title":"设置附带横滑的列表样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button/ui-design-actionbar-without-master-button.md


const frontMatter = {
	title: '设置无主按钮的组件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-actionbar-without-master-button',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置无主按钮的组件';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置无主按钮的组件",
        children: "设置无主按钮的组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置无主按钮的组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsactionbar/ui-design-hdsactionbar",
        children: "HdsActionBar"
      }), "组件支持多个按钮的样式。当应用开发者需要多个按钮并且没有主按钮，没有展开和收缩的动效时，可以通过设置左按钮和右按钮配置样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(189910)/* ["default"] */.A) + "",
        width: "246",
        height: "113"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { HdsActionBar, ActionBarButton } from '@kit.UIDesignKit'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建左边的按钮数组startButtons，创建右边的按钮数组endButtons，无主按钮，不支持切换展开和收缩状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct TestNoPrimaryButton {\n\n  build() {\n    Column() {\n      HdsActionBar({\n        startButtons: [new ActionBarButton({\n          baseIcon: $r('sys.symbol.stopwatch_fill')\n        }), new ActionBarButton({\n          baseIcon: $r('sys.symbol.stopwatch_fill')\n        })],\n        endButtons: [new ActionBarButton({\n          baseIcon: $r('sys.symbol.mic_fill')\n        })]\n      })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n    .justifyContent(FlexAlign.Center)\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
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
189910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAABxCAIAAABpxcn/AAAZJklEQVR4Ae1diW8VVRf//lLe0oWCQig2oCIxKmDVgEtEo9FoopFNaQSFQAhBEpugEFNABYGylCKlLX2z79PPeb/2eLizdN68hcd4X17ac+/c5Sy/OffcZeb9T9UM+ZUaKLEG/ldi2aRoUgOqZkiIy0Gs5BqQEC+5gaUjlxCXEC+5BiTES25g6cUlxCXES64BCfGSG1h6cQlxCfGSa0BCvOQGll5cQlxCvOQakBAvuYGlF5cQlxAvuQYkxEtuYOnFJcQlxEuuAQnxkhtYenEJcQnxkmtAQrzkBpZeXEJcQrzkGpAQL7mBpReXEJcQL7kGJMRLbmDpxSXEJcRLrgEJ8ZIbWHpxCXEJ8ZJrQEK85AaWXrx/Ia6ouvz2jwae3VulfyHeUDR8odz+MfZ/kxMJ8bzDvaKoqqqpmhb9bX6Ro+mGYZiGaZqWZTuu47iu57me73q+50df3w9yflG+pSo5W/4PFltRpud7za/req7r2Y5j29HXME3DMDVdJ2uuGFdrmjj6qz/1e6PnXlxVlSao9ebHsizPi9AYBEG4+gmanzAMlwt9VpspWL1Qn/+tSqThMAxhLN/3HcexLMswDF3XtdVP5Mue9nthnwLEDcNwXZerCTRQ7vs+FCch3rf3DdmLHBN5JdjOtm2A/D8BcUXVEVIrqm5aNoG7mP3oxsionqdMRvWnfqlV/oXyQvJpiRMEgeu6hmkp6lOOVXrhxRuKphuW43pBM3bArV9M9Xnsl6dMsd57U6tV/oXyQrI3PMd7CYKgOYEKbMd7uijvIsSx8qBpum3bQRDEtbC8vEz5FNURgbGPhsLl5WUYL7EdnpnHxnnK8Dbz0JxzTvNBHPnUezt3ex6WhDLUr5CfmEwUgYzCCTRLYqI1oS/TNFVVVVQNo3ovA/TuQlzTTddbmUpm6NF1Xdu2zWh6bmjRYkv0QTCn67ppmo7jCBpMbC1RuYklBQMklmk1k9r0PM9xHNM09WipYeWzOgHTDMOwbbv9KUer7JGPyDnJobsRU0lBHEilaVpzDSxaMyDxwVg86TiOqhm99+hdgfiK/9aNCN7NhRFSK0mOWM2yLI4DIHsVFSsoB+ihTWCdGkk0c+JVIVNIJraTJxNyoTXf9/+dZpEMqwRBnAhdj8Y3z/OEkSpPv8XKZEvNr4ZhCHHIOmB7VZqE/3BGuHWpKcHuruermtFQomWWnmG98xAHvlXN8IMwCJeFpT8I77qupmmNRoPsnZNQmh/Lslod4knpxcCRWIva9H0fAzG3fE6JVFXVdR1Ab1WoRK4yMonhxDIUe0AcYTjNEIekbjQaiqIYhiHct9RdEC47bhSaE0h6ELF0BeKqBv+9HITRl3+CIDAMA0vjiqJkKC7xEiCOe8NxHN5yNp1t3ey6aVfRpmVZGHzAG0SjQCtRCsoEOFDFsizsD6R1135+thLIc6eNpcS2QHApqK5hGPE71g+WgzB0Pb+XEXknIU58Y2UQJiG1hmEYH8ehLHIDXHeJmbyApkVxLWAR12ZXAYHuPM/DOC5wVSwJcEB13RAnQyHozvd9iglJhDxWoMKcwOiUuEYchqHrulHLPdkV6iTEEWBZ9sq2jgBx0zTJbQuKE5LQVGImVyLRNCxmWLHAJbo543XpdiWJiJnCBMlr2za6jvfbpRxgLjEyIa5alQsVNU2DOJxzTGSj0e9ZhLhuWLQRD6kw/GFTF46KVJmWhDbzK1dVVT5ucG22RAuYFpJoCg4PwUlLMUkGREhSggVNNmhRtSVBchamNRPHceJGadUKgoAkFKJz6osv7Gi62QOUd9iLN5dQntAwBd+CCjqYxK3ied4THbeeSMS00Az5b4Jj+4IQGtAUknB+3Yb4vzEDMbG6XNu+XFwc0zTj0ZfnR0F5t1HeGYgr0eFB3XbcMJpfPvGBwyOHnUdxpO08hcn9aJpGK1YCLnMmie+08mEYRou77CRZTg6FYoKA8SSEchyHFiXTWCqWD0mXl5c9z6PeiRC4bTNJzVqWRRoGEYShZTlqhHJ8855Xbemu6AzEMbeAy+Fi0GpDS2oipbRUS9M0XdfjrqIYCIRagBoHRKu88fJ5BEQZbKl03JfT/BK9gLc8XHEpWqKx3ESzzxWINzf5V5feu3UmsTMQVxSFomGCeOIMPY9eCutaURS4CgGg7ScBcb74nUeQtDJ5BKQy3VhJxHBHe8ngk3pMY7udfMxbMNLiBqPo3LKslVlNd2afnYG4pmmYRuAvZKD1b66aDD1SAIAyPALhLWTQFJTTplr74EYLYRjChSf2zoUiGszwJBeQt0NleCZoVVWxodspQUgc7L7Fe6ScDK6IN5ShKmsS8EHCoBQEwYqt+xniiBopcMTmfKKOEjNJZffv3799+/bd5uf27dszMzMFgvjETYc2IRIEQYY5uVCcnpubu3PnDsTB34WFBZiTo4FX4fl0k7c/kxbED4JgzRX9DK7IXigj8JyRRHlBnDCKyKPts5Yi7PyFO+DFFVWn4IRiLMMwEnWUkfnw4cPnnnuuUqnUmp9KpTIwMHD16lU4vwzF0SVaxUMIK9i1cJIvO1BfnOBCEd1oNL744otqtVqv1yFRrVbbu3cvDdmEYKoCAi1TJi0t08gujFGkfAgoJLnUWMDlq+BcCoHmDGiatrS0pKpqo9GYmpo6cuTI+fPnsV2f0wdRa6qqmqYpcNXVnaC2II6TBrphceXChQv6yk4SNG/cuPHbb7+dOXPm1KlTk5OT165dazQa+SFOeuxgRA5gmaaZLULi1bm5uampqZ9++unUqVPnzp2bmpp69OiRoih0OIcY5nBHU7iEWRotFlEUK0AEsOZWEG4DuoSDKOSAEtmOZwLHCwsL7777bq1WW7duXbVa3b59+/T0dLxwYg6XVNM0Hqvgxos00IeBCiBu2S5pELrGBCKPqCT533//fe7cuddee61Wq1Wbn0qlMjo6OjExMT09jWKPHz++cuUKQI/GqTpPYscx0cYcGTlpGKBVX7W0tHT58uWPP/54ZGSEXPjw8PCHH344NTUFj6iq6rVr1+7du4fGE2XBJZrNCx6akvkhTpOKNSUS+NE0bWJiAqapVquVSmXdunXj4+PxdlBRsD5vTdiqgxOJ7ro+hDh4ctwn9lzCMIRPEoTkKCS9wH//9ddfmzZtohCFMAG4Dw4OTkxMKIry+uuv12q1mzdvUnWuOOoObQoBX05Ax4thr4d6pF7iBJhpNBoLCwt79+6t1+vr1q3jsoAeGBjYtWuXoijnzp2r1Wr79++PNxV36okTDII4ZzsxEwUAJjoplNgvZXLdqqpqGMbu3bu5OID7w4cPqQoIVEzMhBoRq5AjB8M4Td4NlHcgUPH8J57oCcMwUUguPyFGVdXTp08PDQ0BzVyDoKvVKogdO3bU6/VTp04tLS2R+rgZKBMQt6yV8ImbvwAdhiHWCqn9NALMzMzMbN++vVKpkMMThEL+Cy+8MDw8vG/fvsXFRdIGbzkuGqIULkIimhMzOcRzBl2cAdACxGGymZkZzjbdnImZBHGEXsRVNLb40VHybnw7AHF/9bwslLvmahT5eEVRfvnll7jz3rJlCxw2B0e1Wt2zZw+mOIL6EpOGYcBpcUwUoLGkldhFPPPhw4djY2MC20NDQ2+++ebIyAiXFJPpW7duAT3xpoQcVVVp71aIwTIwTfJSGVpLWbNfDnFN0xRFSYT4/fv3BVbXTALowjAbBCEeleg4ytuFuKabqwiPHsSEz8sjpNH8bN++nfw0IePgwYOLi4vr16+nHExxBgYGLl68CCe9Zhe6Hq3z0GhIxm6VwAbWmt0BBN9//z3nGX5u27Zti4uLCF1wlRz8p59+Oj8/n6dxil8BVi4FwZdnCjSVof24pwhx+DjhuH8U3+pdeRSoXYiblkNxCvTI3xSTZjzo99ixYwIgkDx8+PCjR4/4RA1YqVar4+PjWA1Ia5nn85GdbMxtL2QKSZR0XXfNmwriPHjwQOAZbI+Njc3Pz+/bt4+EJYivX79+dnY2MVDhguD+oUO27XjxleW5VRct9MKTq0Wixwt1Xc/w4o1GgybQeWRBy0Ik2YS42Y1TWW1BXNUMDnFsbXI1pdEAzUsvvURW58Thw4fn5ubicKnVagMDA3fv3s15Spu78ET4CplCsiWIK4py4sSJ+IhUrVbHxsYwAeUygq5UKl9//XUeWHTkbAIdI+PwTbMR8qenp3/99Ves28YDlVqtdv/+fVVVsdq7pi9Am5A3vjquG1156UpbEG++/edfL54NcaiVhJybm3v++efjVq/VaolenEr++OOPtK6cbZ5EiAPHgC9hOpFoCeK6rn/wwQe1Wo0H3OTFEagk3gBbt27Nc8d2EOIAIjdHhhq//PLLsbExrOXv3r2bxh+Yo1qtzs7Oapo2Pj6+Y8cO7A1ltEbWx8Pm0DDZon8hTrF4SxCfnZ0dHh4m4HLiyJEjc3NzGzZs4JlEf/7553kwIewvkB5bhTidns2wHNzS+Pg4McmJ0dHRxcXFffv2CehHmU2bNuUJxzsL8QxZhEvHjx8fHBx8/Pixoijvvfdepfmhe3VwcBAhyujo6DvvvEMbVUIjQvLZ8+LFIH7v3j2sFXI0gN6/f/+lS5cGBwfjl6rV6ieffCKoLC3JvXhXIQ6/uGfPnjjDlUpl8+bNV69e3blzZxzi1Wr1ueeee/ToUZoIlP+0ID4zM1Ov10+cOKFp2h9//IHoERCv1+snT55UVXVmZmZwcPDYsWOYMxDPacQzBnE8ycYBlGe6qWna3bt30/x0HCg855tvvsnZBZ9ugsO0v4muHYUdx4mP7EIsiw3XvXv3xkHMOU+kt27duri4mIYGylcUJf4QZJo4afk4nZJzDETXqqqOj49v27YNyUuXLo2NjW3evHnr1q3ffvstJppHjx4dGhq6ceNGzuAHkX3SdLMv18U13eTr4kEQWJZFhkkjVFWdn58fHR1NtHpGZrVavXDhQh4jYdFQWHzIsD2VpLgchfljEHA/tLvBk4qifPXVV/V6nQbxDCn4pV27dlE7aepCj3QiP02KPPm+7+fpjnPy559/ViqVnTt3/mMyBOX/zKMWFhaWlpZM0zx69Gi9Xj9z5oxw2/MWBBoQFxYNgyDsxnKKqhntTjfxyhRSLk50rDmzhjref/99YfrCbS/QKLlly5Y116fQuGEYmBsQbxlEhhen8wjcRQnmRPL333/H4Q2B84xktVqdnJzMgzlVVds/Pgkxc46BhEtVVScnJ+v1+iuvvHL8+PFbt241Go3Z2dmff/757bffHhwc/OyzzzCOcRWhuqAoylQUhbZ+sH0RBAG9pKSzuz/tQlxRddcTN/DzQFxRlJs3b65fvz6n5wPEDx06BB8Q1yY3CSLXDExnXBK8eBiGeDqG2o97cbr01ltvtRSrvPzyy2ue26bG41OLDCkSL0G0nBv41C/kvXXr1htvvEF7tDgk/OKLL549e1bXdX42TqgYtxRySBxAHI8qd2ODswMQb+kYFsmPrfgDBw7w49QZDq9Wq42MjMzNzWUgjDfuuivnHxONnZEZh3j8CdQ053T9+vVsEYSrk5OT/MgN8R8nWoq7MqQLggCvlIh3kZEDt6Lr+uPHj6empoaGhg4cOLCwsNBofjAKJY5FiYrCO56EyDCa83Tnafy2IE7vBuI6pXNLaeJxVc7Pz+MIMpaQBQQgE25+w4YN169fp7poHEmhI+ianATnrQCN4+95on/g4OzZswMDA9kROVzgxMTE0tJSvGUuDtH0YG8BEagK7l5hdiFAk3okVXNCVdWFhYWNGzeePHmS56fRia2pqsqnzuBK17sy12w3FkfMRI9EQJU4kZzH12KNaX5+/qOPPvpn2zKOb+RUq9UdO3ZcuXKF6xG6Q46gR0GDZOBiBJ4hyBO/YlUYZyc3b96cJk6tVtu4ceORI0cofuVyxfWmKAreLJB/gShNUoQECL3iy0SJyozz1j7EdV3HkTICzMrjm3140pCmBXQIDjM8vB5I0E6iBgmp/5yvGh0dHRoaIv8HVzcyMnLgwIH4diZVjPfSkZmZgBLyfPHu4jmqqj548GB8fHx4eBhTCBwcr9frAwMDr7766r179xK1kZZp27bAD0VTIAgrPClU4UmcBhX8d1yQeI6iKEtLS7t27bpy5YoQYgmOJl6XcoSt++Xl5eYR9m69M6jdQAUoN02TlAtXkRbwCYogpCqKMj8/f/369fPnz3/33XcHDx48ffr05cuX8YRySxDv1DFajgl6SpzslEZAIkwi79y5c/HixR9++OHQoUPHjh27cOHC9PQ0n5kJ2kCbPBMvqPF9nzMDP8JRjquUIxSOJ3GkNk2EjHzwk7iLydnOaAFvmuYs0elU8pidJToDcZxmJr6B8sS1AkERSCIexQkHKsCJuMpwVciHW+JDCkcDsVeAaPXZHwpaSEBaZeKck4xcEJ6pqqrwEikwT2gmz9KSpHQeC3ER7z2bxnyD7MULc7Z5PqdJHC7F6vnevnx289+77ckJBARoaXDniihMJ+5yExoKIJuqoJH46mFhVtesSHcCQvA8UuQpw7FFbz5ak5lOFVAUhY9IYHh1r7C/A5XERYwgCGzbLhDwFVZo4gvf8hueAB0nMC619ARQYSlQkUIU4h9EnDfKoZKUk0agpO/7+Q/ftykOqsdfk01PnES3dD9PN8GcZTtBGP34CT5Yi+iBq8DoqWkavQFwTTQIts9fHgcPO2LvtEYoGOArawLDiUkOcU4nFkZg43kexVRp/KTl54lMqC5CFBqRwFIQhl06QMvvlg7F4s37r7nTSSdWVn5DkB4WJGk7TmCgwMox7qv8kIWu85enly93XApqEOLgFeMtre5zWHM6DeJAedrCAPGTRrQE8cQZheNGL1/u0o4PobzDEMfBQ7pZoWjf9/FkVHybI019OfNJy7QzQqYVNs8on2NaKJMBBbqEdroRgEEW7BXQChVxSAxkEFxGTmdUwSW8doKU2aryUT6tOl5QQfyAwA/PAoXPGMTxHBAiV9IskniLZ0715SyGe0Y4gkfaBAOUBCFkEpMtEViRyMlkzmKIT4Q1h5a4KlyYDtnSbZaTZ14sEeIUn3DegIcogu1O8C0020kvvtq07rr4LcnoFwkJYXTOFgNxMW0KdbHISl1Aj2nJzkIcsOALo+CNWz2+VSlcRZKE0jSNXoDakv/mAMqgBc1QSWCO7wclykLMp6E5no8fziZZoo6aXzv6JYJurRKu4nDlREDnIY7oCj947wfLPvvVCATK0FTi9gEpMY3A6jKART8z21LASnbtCIF9XI5RgfO41YUCiEzwgzh8Qa0j7AmNpEEcxRA84FfH4nttnO1soXCVXiXOecCPVFq2q+ldedheADeSnYc4/Tyu40bwbr5bJdIt7chgMTHnQ1Bcs6Ax9vHWyElwbfaAhvPzfd913bQTqtlogESGYbiuiwlMV2/XbIjTVc/z0sQhExCO4wYyDMNxHLz5XzBNEC5bdrdOFCbiuzPHsNKaVjXDiZz5yodjDognZHB90fEgjPK0kQY/R78ez1vrEr3K+Ooi6FrdeJ6HXQxa9SNZONCJ1nUdPycr4GCtfjp2PVtA+r1zmiQQ55zga46madK8X+ASA7hluz1YQhEA2RUvzvuwLBviCTLDBeKv53m2beM0XzwKhOJolQaE0Fo3ktkIiPdIbtjzPNd1035mBE6ONkHQS7y1HuRkC4irQRB4nuc4TtqLHXVdh9+BlWl0FfgPgsA0zW488cDBlkh3HeKqZuiG6XkB/Vg4dEH6jROJBaAyujG4BqkFntk+ndFs2iXKJwKy0F/KJ6J9Pgu3sCYPVIAIEoTbSDgewws31xuWfT/QdCP6ZbbuPPSQiGzK7AXEsfDZfG9W9JJBgmmBAZrUx+2amMkLdJzufY8dF6HbDSIW9/3AtHodfBO4QXQd4oi9GoqGQcrzPBrLCCgCkaF9KsnLJGbyAh2nqUcQHW+/Nw2SFMW6I9nhqqg1EAjlsTLY7c0dAdNCsusQF/rD9BHhNW50CrJJR8U03vtazxzDgora5J+qY1gmO9I8pDnb7tHitwAznnwKEKf5OB5TtW2brzEViF4Ey/UsSTbuWY+d7ahN/oFs3/cxvbYsi8+wV9dh/nsQ57dXGm2YtmHalu1Ytktfx/XiX9fz++3ruD747DfGWuUHUtiO1/ySIRzLdkzL0Q1L03u0A5+Gk5z5vfbiGWwhaud/MwoLlzTdjGscmcKlxCQvSXRiF3SVd7dmJi+MZhOrCD3yknSJVwQtXEpLUn6cENoRCsSZFwr0ebIfIc5VRojnmUTT1b4iwF5fsVSAGVIyXiWCFrhovEA/030E8X5Wk+Tt2dWAhHi33lDz7GKiZJxLiEuIl1wDEuIlN3DJXHIBcSTEJcRLrgEJ8ZIbuIDbK1kVCXEJ8ZJrQEK85AYumUsuII6EuIR4yTUgIV5yAxdweyWrIiEuIV5yDUiIl9zAJXPJBcSREJcQL7kGJMRLbuACbq9kVSTEJcRLrgEJ8ZIbuGQuuYA4EuIS4iXXgIR4yQ1cwO2VrIqEuIR4yTUgIV5yA5fMJRcQR0JcQrzkGpAQL7mBC7i9klWREJcQL7kGJMRLbuCSueQC4kiIS4iXXAP/BwvI7ZoBNifoAAAAAElFTkSuQmCC");

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