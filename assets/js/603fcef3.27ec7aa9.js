"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["455908"], {
832092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_render_layout_web_render_mode_web_render_mode_md_603_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-render-layout-web-render-mode-web-render-mode-md-603.json
var site_docs_arkweb_web_render_layout_web_render_mode_web_render_mode_md_603_namespaceObject = JSON.parse('{"id":"arkweb/web-render-layout/web-render-mode/web-render-mode","title":"Web组件渲染模式","description":"Web组件提供了两种可配置的渲染模式，能够根据不同的容器大小进行适配，从而满足使用场景中对容器尺寸的需求。","source":"@site/docs/arkweb/web-render-layout/web-render-mode/web-render-mode.md","sourceDirName":"arkweb/web-render-layout/web-render-mode","slug":"/arkweb/web-render-layout/web-render-mode/","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-render-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Web组件渲染模式","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-render-mode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用运动和方向传感器监测设备状态","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-sensor/"},"next":{"title":"Web组件大小自适应页面内容布局","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-fit-content/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-render-layout/web-render-mode/web-render-mode.md


const frontMatter = {
	title: 'Web组件渲染模式',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-render-mode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件渲染模式';

const assets = {

};



const toc = [{
  "value": "异步渲染模式（默认）",
  "id": "异步渲染模式默认",
  "level": 2
}, {
  "value": "同步渲染模式",
  "id": "同步渲染模式",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "web组件渲染模式",
        children: "Web组件渲染模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件提供了两种可配置的渲染模式，能够根据不同的容器大小进行适配，从而满足使用场景中对容器尺寸的需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异步渲染模式默认",
      children: "异步渲染模式（默认）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["异步渲染模式下（renderMode: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#rendermode12",
        children: "RenderMode"
      }), ".ASYNC_RENDER），Web组件作为图形surface节点，独立送显。建议在仅由Web组件构成的应用页面中使用此模式，以提高性能并降低功耗。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web组件的宽高不能超过7,680px（物理像素），超过会导致白屏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持动态切换模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者预期Web组件作为主体显示应用页面，如图一所示，在此场景下，Web组件高度正好为一屏或接近一屏（内嵌在navigation中）。加载的H5页面高度大于Web组件高度，Web内部将产生滚动条，用户可以通过在Web内部滑动来浏览H5页面的信息。只需使用Web组件即可实现应用业务主体内容，建议采用异步渲染模式以提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图一 异步渲染模式场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458695)/* ["default"] */.A) + "",
        width: "364",
        height: "601"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "同步渲染模式",
      children: "同步渲染模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同步渲染模式下（renderMode: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#rendermode12",
        children: "RenderMode"
      }), ".SYNC_RENDER），Web组件作为图形canvas节点，Web渲染跟随系统组件一起送显，可以渲染更长Web组件内容，但会增加性能消耗。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持DSS（显示子系统）合成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持动态切换模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者预期Web组件作为富文本显示的载体，成为应用页面的一部分，与其他ArkUI组件共同滑动交互。如图二所示，H5页面与Web组件高度一致，Web内部不生成滚动条，作为一个超长组件展示，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "组件实现应用内部的滚动，确保用户能够平滑浏览Web内容及其他ArkUI组件的内容。需要Web作为业务内容的一部分渲染超长组件，不允许Web内部生成滚动条，与其余ArkUI组件协同完成页面布局，建议采用同步渲染模式，支持超长页面的渲染。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图二 同步渲染模式场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555636)/* ["default"] */.A) + "",
        width: "608",
        height: "613"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebHeightPage {\n  private webviewController: WebviewController = new webview.WebviewController()\n\n  build() {\n    Column() {\n      Web({\n        src: 'www.example.com',\n        controller: this.webviewController,\n        renderMode: RenderMode.ASYNC_RENDER // 设置渲染模式\n      })\n    }\n  }\n}\n"
      })
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
458695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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VxCqsOdnhG/l6oWOaUobU582ZiHtOkWrN3lrx0yrw+3znnoTsjbnWm0+2DLL6fDw8PD0311t/7aYxjodXzcT+Lqc5pfSdG7EX7X3d+pcuLpSf4ng8FsHx0SrA4fpEQGocDgDQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQOWxsAdwcDmO8/HHH//2t79dW1s7ceLE3bt3wx7RQBgZGfn888+HhoZOnjx55swZ0zTDHhE2cWh9fT3sMRw4d+7cuXXr1vr6+vPPP//0008PDQ0NDQ2FPagBsra2tra2du/evQ8//PDQoUPnzp07depU2INCT0Sk30ql0mefffbaa689/vjjYY9lH3j48OH169efeuqpWCwW9ljQHRHpn6+++uratWvRaPSFF14Ieyz7zO3bt8vl8qVLl44fPx72WNCOiPTJV199tbi4+Oqrr3LksjNra2vvvPNOPB6nI4OGqzN9cu3aNQqiMTQ09Oqrr167di3sgaAdEemHUqkUjUYpiNLQ0FA0Gi2VSmEPBC2IyJ67c+fOZ599xnmQXfHCCy989tlnd+7cCXsgaCIie+7WrVuvvfZa2KN4dLz22mu3bt0KexRo4sNme8txnPX19b5dzS2XyysrK0eOHDl79uyzzz7bn4322eOPP76+vu44Dp9DGxBEZG/VarXnn3++P9sql8u/+93vLl68uLKy8v7773/99ddnz57tw3bX1tYWFhaOHj36rW9965VXXunDFp977rlPPvmEiAwIIrK3Pv3000gk0p9traysXLx4UUROnz59+vTphYWFrhFZWFgQkR18yn5kZMR7/TbvvPPOpUuXnnjiiV/+8pfbfc2defrppz/44IP+bAub4pzI3lpbW+vbRZkjR46srKx4P6+urvZabWJi4o9//OMubvf06dM3btx48ODB73//+1182Q0cO3Zsg38g+ow9kb114sSJvkXk7Nmz77///unTp1dXV5eWll588cWuqz355JM///nPd3G70Wi0XC6/9dZbXfdT9sLQ0NCJEyf6sy1siojsrX7em/vss89+/fXX3tHKiy++eObMmb5tOhqNRqPRvm1O+vuHxcaIyCPl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nslUk6FdyCEigJqTn21eVQmypjLSmC6xOTGimZpJVLJztr94Mive7kqv5SLSY4JFOx3NjhdyqdRM/eRI/zEpEbAr2mds96YeM1OlQs2oP9Kcw8ybRtEw6ovr/em1XLpNsGinjWQxUXAtEbFyhYSRNCSESZuJCKC24ayEVs5tTrW6+XN6v9Zo+yOtr9xjO3uPwxkAKkQEgAqHM8Dgq88XP5DYEwGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIAKEQGgQkQAqBARACpEBIDKY2EP4EC6ciXsEew3O/qLra/L+vr6ro8FbYhIn4yMjFy5ckX+1Q/ljR+GPZZ96I03vP8dGRnZ+pP+7n98Wnj70+1u6tt/8Y3tPuWAIyJ9cvHixbCHcOAkf/JM8ifPhD2KRx/nRACoEBEAKkQEgAoRAaDCidUD51e/+lWtVhORu3fvbrqydzVkbGzse9/73h6PC/sVETlY3n777ZMnT/7gBz/Y+rXSu3fv3rt37+233/7JT36yl0PDfkVEDpD33ntveHj4u9/97raeNTIyMjIy8qc//em99977/ve/v0djw/7FOZGD4tNPP/3444/PnTu3s6efO3fu448//vTTbX92C488InJQVCqVl19+WfMKL7/8cqVS2aXh4NFBRA6Ku3fvHj9+XPMKx48f38q5WBw0RGRvbetejz119OjRJ598UvMKTz755NGjR3drPEqD84fFzk+sOvlYNLvJzm0kU56pRZPFTV4qkimXUuaORzLIPv/887W1taGhobAH8khZXV394osvwh4FfF5EnHwsuhhveSc7+Vi0NuPmLBERO20ESuC9581UyU0FXslOG7Nj3WLgurnmL04+Ninzj2oyOg0NDQ1IRB48eHD//v1vfvObO36F+/fvP3jwYBeHtGOrq6vHjh0LexTwbXlPZLO9BXupmJhxN2uDPZcd33ytR8jJkyfv3btnGEbYA5HTp09/+eWXmoh8+eWXo6OjuzikHbt3794zz3B77qDY0jkRZ7kq46Nd3vpOPmb4kkUpJo2AWN7xVrLTzYUdawVXfBSdOXPmww8/DHsUIiJ/9Vd/9dZbb2le4a233vrRj360W+PR+Oijj86cORP2KOBTn1iNZMpup3ImElwpUfAXej+4rltI+AsLicB6Tj5mGGlbO6YBYprmoUOHHj58GPZA5MiRI9PT02+++WatVrt///7Wn3j//v1arfbmm29OT08fOXJk70a4RQ8fPjx8+PCpU6fCHgh8zcOZSjZqZFsfrL+/nVpFiknDOyuSKPgnStrZaWNposdjdY1XEZHExI5GvO+cO3fu+vXryWQy7IHI0aNHX3/99Xfffffdd9994okntnjvzIMHD06fPv36668PQkFE5Pr16y+99FLYo0BTMyJtJz2cfCxa83+2co2To3baSBrSqyObahTIThtLnQ+3n6x9JJw6dapard6+ffuFF14Ieyxy5MiRV1555ZVXXgl7IDt0+/btp556it2QgbLdwxkrV0hIcan7EUdkbLNTpo0TIpte9n2kxGKxcrm8trYW9kD2t7W1tXK5HIvFwh4IWuzonEjXWNhLW+hC8JzIwXLp0qV33nmHjuzY2traO2//t0uXLoU9ELTbSkQc225cP7HTyWIkft6PiJkqeYdATj6WrGZmZNK/3NJ4YHsevROrDcePH4/H43/7X+dv374d9lj2n9u3b/9tPhf/d58pP7mPvbCVz4mY5nLMSPofTu34vIj3QbREwS1ZIik35V/TbVkxcD61eWJVit7PkcyU/t+xHxw/fvxvfvx16dZ/L/z6w9f+/c8ef/zxsEe0Dzx8+PD69etPHf3nv3nhshy9HPZw0MWhHX+7T/1TrL2u1thpIykFN2dtfNXGTseWp/r+CdYf/fU/vvv3L/Z3myIicvcN+c2VO/8ye2v51Pr6+nPPPff0008fO3ZsED7SOjhWV1dXV1fv3bv30UcfHT58+Ny5c6cOLchvrsi/uSwjb4Q9OrTb+b0zgUs2PR+v/7DBpRwrV9rZhZ597NS//r+nvvczx3E++eSTDz74YHV19cSJE9wg6xkZGfniiy+OHTv2zDPPvPTSS/6FmLshjwobYGaz0JimaZoH6A4APKqYCgCAChEBoEJEAKgQEQAqRASAChEBoNIzIs2phFonDdqt5QAeDd0jYqeNZNWfbagwno3W3/+B5eWMZKP121y2uxzAI6NrRJzlqiRm/I+iW1OZSKXmiIjYS8VIZt5bbqbmMxF/ToDtLgfw6OgaEfN8PFKcre99zGUriQlLvJv9A1OtmqPj3swi210udtow0nbzQMfbQWm9hfcRvqEXeKR0P5wxU6VyfDHqTR8UnMes17RD210uUkwuTdSnFikmY3lHzFSpkCgm07aIOPnJrGTKO5w/DUD/9DwnEq3N+HMuj832OCdqjkW6LN3i8kShXojA8ZKVK2eqyXQ+P5kdLxycL6cB9rNuEXHys8Xme9xMzSQq2TnvwMJ/s/vr1Sr1PY3tLu9QXXb8rc1nqtnseIGdEGB/6BqRWvdvxzTHIo03uwS+jWa7y7ttr/6Ak5/Mjmcy1SSnQ4B9Yr2Lm9PDwxeurni/rFy9MDw8fbPxgP/jytULzXW2ufzm9HBzA11fP/DEPfHDn/6vvXvxjdy5vP4Psn7ncjhb37/4uw2wrvOJWDm3kDYaX0PTnLvMypUzsaj/nZCJgls/a7Hd5SKSiMukYVQCr2+njWQxUXAt8SaVV303BYA+2fn0iAqNmRP7vuW6cKdHZJq/bePvNsC4dwaAChEBoBLKHKuNOZwB7HvsiQBQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIjTxxMmAAABsklEQVQIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkCFiABQISIAVIgIABUiAkDlsbAHcCD95krYI9hv+IsNsAMakciz3/jRX//jdp918acnL/70GdWGHxvyf+BdsQONvx4GyaH19fWwx3CQ/OkLca/K//s/YY9jHzr8L8T4j/LYn4U9DrQjIgBUOLEKQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAFSICQIWIAFAhIgBUiAgAlf8PQ8PKSuVkOPkAAAAASUVORK5CYII=");

},
555636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438255-cea2084c7574305f54695cc483d1d6b6.png");

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