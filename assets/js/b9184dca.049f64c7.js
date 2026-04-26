"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["806664"], {
571715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_touchpad_arkts_interaction_development_guide_touchpad_md_b91_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-raw-input-event-arkts-interaction-development-guide-touchpad-arkts-interaction-development-guide-touchpad-md-b91.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_raw_input_event_arkts_interaction_development_guide_touchpad_arkts_interaction_development_guide_touchpad_md_b91_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad/arkts-interaction-development-guide-touchpad","title":"支持触控板输入事件","description":"当用户使用触控板时，会根据不同的操作方式生成相应的事件。单指点触会产生鼠标左键点击事件，单指轻触移动会产生不按键的鼠标移动事件；双指点触会产生鼠标右键点击事件，双指轻触移动会产生轴事件。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad/arkts-interaction-development-guide-touchpad.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"支持触控板输入事件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-touchpad","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持鼠标输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse/"},"next":{"title":"支持键盘输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad/arkts-interaction-development-guide-touchpad.md


const frontMatter = {
	title: '支持触控板输入事件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-touchpad',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持触控板输入事件';

const assets = {

};



const toc = [{
  "value": "单指操作",
  "id": "单指操作",
  "level": 2
}, {
  "value": "双指滑动",
  "id": "双指滑动",
  "level": 2
}, {
  "value": "双指捏合",
  "id": "双指捏合",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "支持触控板输入事件",
        children: "支持触控板输入事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(400602)/* ["default"] */.A) + "",
        width: "1118",
        height: "591"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户使用触控板时，会根据不同的操作方式生成相应的事件。单指点触会产生鼠标左键点击事件，单指轻触移动会产生不按键的鼠标移动事件；双指点触会产生鼠标右键点击事件，双指轻触移动会产生轴事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(707809)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，与触屏不同，触控板上的多指操作并不会体现在上报的事件中，应用无法获取手指信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单指操作",
      children: "单指操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558889)/* ["default"] */.A) + "",
        width: "421",
        height: "256"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单指操作触控板与操作鼠标的方式相同。例如，轻触后滑动会产生鼠标移动事件，而重按则会产生鼠标左键按下事件。若需判断鼠标事件是来自触控板还是鼠标设备，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E8",
        children: "sourceType"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#sourcetool%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E9",
        children: "sourceTool"
      }), "信息进行区分。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对该种操作产生的事件的处理，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse#%E5%A4%84%E7%90%86%E9%BC%A0%E6%A0%87%E7%A7%BB%E5%8A%A8",
        children: "处理鼠标移动"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "双指滑动",
      children: "双指滑动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(9430)/* ["default"] */.A) + "",
        width: "734",
        height: "264"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与鼠标滚轮不同，触控板上双指滑动产生的轴事件上报的数值单位并非角度，而是位移像素，为了区分该点，在处理轴值之前，可以通过sourceType及sourceTool来区分。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户使用双指横滑时，可从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#%E5%B1%9E%E6%80%A7",
        children: "axisHorizontal"
      }), "中获取横向轴值（位移像素），向右滑动时，上报数值为负，向左滑动时，上报数值为正。使用双指竖滑时，可从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-customize-judge/ts-gesture-customize-judge#%E5%B1%9E%E6%80%A7",
        children: "axisVertical"
      }), "获取到纵向轴值（位移像素），向上滑动时，上报数值为正，向下滑动时，上报数值为负。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同滚轮一样，产生的轴事件可以驱动滑动手势的触发。向右滑动时，上报offsetX数值为正，向左滑动时，上报offsetX数值为负。向上滑动时，上报offsetY数值为负，向下滑动时，上报offsetY数值为正。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(434818)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只有在开始滚动操作的那一刻光标所在位置下的组件上的手势会被收集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "双指捏合",
      children: "双指捏合"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92491)/* ["default"] */.A) + "",
        width: "417",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在触控板上通过双指捏合，可以产生捏合缩放值上报。该值表示一个相对缩放比例，可用于实现UI缩放效果。系统上报的数值为一个scale比例，其以双指开始捏合的那一刻（此时为1.0）为基准参考。当双指往外扩张时，scale逐渐从1.0增大；当双指往内合并时，scale逐渐减小。"
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
434818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
9430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477949-2965c4c8480219ee691bbcd7f6d0964e.png");

},
92491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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SwBLLsobjYvScDjGjHOARdLCCWDJhcjRuBCF2wFmnBsvUhdLAEsu5I3GhSjcDjDj3HiRulgCWHIhbzQuROFwgBnnAIukZRDAkgupo3EhCocDzDgHWCQtiQCWXAAejeukAmLGdUKNa4olgCUX8EbjOql3mHGdUOOaYglgyQW80TjneocZ54yMC8oggCUXUEfjnGsfZpwzMi4oiQCWnMCjcc61DzPOGRkXlEQAS07g+5QEv8a3xYzr+OW9+OKLzz777F577eWaw7///e8//elPL7/88ieffNK3b9811ljjq1/9ap8+1N4WIENLbvnll2+R1N/T1BK3dxuYccOGDXO7jNSfEpDGjR071knjZsyYcd11191xxx2zZs2KUlxsscUGDx685557LrTQQtF4jqMEQktOrKLxjTqmr+r2ujHj3Hh1l/r222/fddddx40bZwiccn3//fcvu+yyIUOGTJ06tbubeH41lhwa51bFMePceHWReuTIkSNGjPjvf/+bksdbb711yCGHPPLIIylpGn4KSw6Nc/sJYMa58eo09dVXX3399de3c7UcuuOPP37ixIntJG5gmtCSa+CzB4+Mxjm8embGOcDqIqmGFy6++OL2M5g9e/bJJ5/83nvvtX9Jc1KGllxzHtl4UjTOAJIWxIxLo5PdufPOO2/OnDl2fr1791566aX1o7VPzZw586yzzrLjiRGBhltyaJzDrwAzzgFWp0nViHv++eftqw8++OD777//zjvvfOCBB7beems7waOPPjpp0iQ7npiGW3JonMNPADPOAVanSSVh9qVHHHGENG6RRRbRKf37y1/+cscdd7STqQGofqsd3/CYhltyaFy79R8zrl1S3aX74x//aGTw5S9/2Z5Sp3GGFVdc0Ug5ffr0G264wYgk2HBLjjnA7f4EMOPaJdVdOjlrRgYbb7zx5z73OSNywQUXPO644w4//HAj/vLLL992220XXXRRI9412NPToyUZr7zyyptvvvnxxx9rTYUkdYMNNvja174Wawi65l9wenVXL730UrmcdSx8l6zQuHYBYsa1S6q7dF/4wheMDJK6n9K+LbbYQjZcNP1HH310ySWX/PznP49Gtn+se8n1u/XWW6dMmfK///3PvnDAgAGHHXbYNttsY5+qcow0TkPPb7zxRgMXddFXbbdmYsa1S6q7dKuttpqRgVaAGTFh8Cc/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");

},
558889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
400602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437993-94ab30852caebdce4ca91a6375d472a6.png");

},
707809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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