"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["384709"], {
291366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_overdraw_dfx_guidelines_overdraw_dfx_guidelines_md_45d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-overdraw-dfx-guidelines-overdraw-dfx-guidelines-md-45d.json
var site_docs_arkgraphics_2_d_overdraw_dfx_guidelines_overdraw_dfx_guidelines_md_45d_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/overdraw-dfx-guidelines/overdraw-dfx-guidelines","title":"过度绘制调试使用指导","description":"当应用页面布局的嵌套程度过深时，应用渲染阶段会存在一些组件的绘制指令被其他组件的绘制指令部分或完全覆盖遮挡的情况，造成冗余的CPU、GPU等计算资源的使用。这种一个屏幕上的像素点被重复绘制了多次的情况被称为过度绘制（Overdraw）。开发者可通过系统提供的过度绘制调试指令，查看引起过度绘制的组件位置及其层级，从而减轻应用渲染时的负载。","source":"@site/docs/arkgraphics-2d/overdraw-dfx-guidelines/overdraw-dfx-guidelines.md","sourceDirName":"arkgraphics-2d/overdraw-dfx-guidelines","slug":"/arkgraphics-2d/overdraw-dfx-guidelines/","permalink":"/harmonyos-docs-site/arkgraphics-2d/overdraw-dfx-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"过度绘制调试使用指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/overdraw-dfx-guidelines","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NativeDisplaySoloist开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysoloist-native-guidelines/"},"next":{"title":"图形绘制与显示开发概述","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/overdraw-dfx-guidelines/overdraw-dfx-guidelines.md


const frontMatter = {
	title: '过度绘制调试使用指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/overdraw-dfx-guidelines',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '过度绘制调试使用指导';

const assets = {

};



const toc = [{
  "value": "使用方式",
  "id": "使用方式",
  "level": 2
}, {
  "value": "过度绘制组件分析",
  "id": "过度绘制组件分析",
  "level": 2
}, {
  "value": "如何减少过度绘制现象",
  "id": "如何减少过度绘制现象",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "过度绘制调试使用指导",
        children: "过度绘制调试使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用页面布局的嵌套程度过深时，应用渲染阶段会存在一些组件的绘制指令被其他组件的绘制指令部分或完全覆盖遮挡的情况，造成冗余的CPU、GPU等计算资源的使用。这种一个屏幕上的像素点被重复绘制了多次的情况被称为过度绘制（Overdraw）。开发者可通过系统提供的过度绘制调试指令，查看引起过度绘制的组件位置及其层级，从而减轻应用渲染时的负载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将分别介绍过度绘制调试功能的使用方式，以及如何进行过度绘制的分析和优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方式",
      children: "使用方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供的过度绘制调试功能，可通过shell进行开启或者关闭。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用前提：需在系统设置中开启开发者模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启过度绘制调试功能："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param set debug.graphic.overdraw true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(306055)/* ["default"] */.A) + "",
            width: "462",
            height: "40"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭过度绘制调试功能："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param set debug.graphic.overdraw false\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(414935)/* ["default"] */.A) + "",
            width: "484",
            height: "39"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看是否开启了过度绘制调试功能："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "true表示开启了过度绘制功能，false则表示未开启。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "param get debug.graphic.overdraw\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(805605)/* ["default"] */.A) + "",
            width: "324",
            height: "37"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "过度绘制组件分析",
      children: "过度绘制组件分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启了过度绘制调试功能后，打开应用界面，存在过度绘制情况的像素会被代表着不同级别的颜色方框高亮出来，其颜色越深代表过度绘制情况越严重，对应关系如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "原色：无过度绘制情况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "蓝紫色：存在一次过度绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绿色：存在两次过度绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浅红色：存在三次过度绘制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "深红色：存在四次或更多次过度绘制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一个存在冗余的背景颜色嵌套问题的示例应用程序，及其对应的开启过度绘制调试功能的界面显示情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World'\n\n  build() {\n    Row() {\n      Column() {\n        Column() {\n          Column() {\n            Column() {\n              Column() {\n                Text(\"Hello World\")\n              }\n              .width('80%')\n              .height('80%')\n              .backgroundColor(Color.White)\n            }\n            .width('80%')\n            .height('80%')\n            .backgroundColor(Color.White)\n          }\n          .width('80%')\n          .height('80%')\n          .backgroundColor(Color.White)\n        }\n        .width('80%')\n        .height('80%')\n        .backgroundColor(Color.White)\n      }\n      .width('80%')\n    }\n    .height('80%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513526)/* ["default"] */.A) + "",
        width: "376",
        height: "811"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译安装后打开过度绘制调试功能，应用界面如上图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以发现，从Hello World文字组件开始，由内到外的这几个Column组件在界面上分别显示为深红色-浅红色-绿色-蓝紫色-原色。这种现象说明，随着嵌套程度的加深，每一个Column组件的背景颜色绘制都会带来一次过度绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，状态栏、侧边栏等系统界面也会在过度绘制调试功能中被统计到，此为正常现象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何减少过度绘制现象",
      children: "如何减少过度绘制现象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过上文所述的调试功能可以帮助我们发现应用界面里存在的过度绘制问题，通常我们建议采用如下方式减少过度绘制的现象："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过显隐控制或者if-else条件，减少页面上冗余的组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "减少被完全遮挡的组件上的绘制指令，如背景颜色、组件内容等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "采用扁平化布局，减少组件嵌套深度，比如将大小相近、功能类似的布局组件合并为一个组件等。"
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
805605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
306055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
414935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
513526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAMrCAIAAADMeh6BAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AABiJSURBVHic7dxpc1zXYefhc243ADZIghQpiYtBsmxSokd04rHl2PEmOS5Pqrx8AM/nynyFVE3GL5LxVGWSjKecsWx5LMtbJEoySS2kJIoSV3HD1n3PvGiKorVZE/NPQNTzVFcRbADdB923f7jn3NuorbUCbGytlJWVyYXz/crysJW63sP5/9at9wCAu5/QAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRA3LCt9wg+Vup6DwDWxXC9B/Bx0d76p5ZS6u3P+6033O5Uz2orpd740TZeQ9tGHNTH1bA1+zR3wI0tfvpg15p5AbT3+Cjs7R9kw7ysb/7sG2M4lFJKGU5WV9Z7DB8HtZZSS+lrLV0d9qmlsfGgtNq61k9fZvne1Drpbu7StPV+bdfSam21llotPm4sw+7FU+s9hrtfX7vSl1ZKnRvUzaPxYOb230dtk2FZnh+sDdpMa6XdiQlUa8NyfVDWhq3Vvq5zZmqrtZTBcLxly+xg2Epb7wFxi2F9RWiiaimldF3tS6ulzc91O+8Zzszd9rvpa7+6qSzNz17r+mFr5U6s1NRuMtvWRuXaTOtn+1q6fp1f2l3f5kb9/HwdFJXZWG5ZDG5tunZwc397Out+z+drutbQbk7M6/SJ/bDbdmulL6WU0k2/rdzYLlpr099DN26n1r5v9cY9fIibLaWU2lpfSqldV9o7xlP76adSayTvN6jaTfrWtdpKaa31rWvtts9qai2ttXGdtNJPaq0tseL8Dq3v1vo6aq3r+lJLa6Wu7+yp1dK66Z6NzGwsg//8pb988/Ll0Wh+ODvTlVpLbaVeuHDx5MlTrdTN85unV77jUmpdW1t7/oUXnj9xYnHfvtWV1Z8+9thgMNi+bfu7v/jdl+WVled+//ulpaUt85uHg2EpddL3169d+93vfrewsG1ubrYrtZQ6nkxOPP/85SuXR5tGM8OZP3qzpdSlpaWnn3r68uU3Fxa2DQfDWz/bSnn11VefP3FiNBqN5udrKR9mqLfjcuOAUC21DGfL/KgbDG7U9HZdSmm1rM6UpS3dpGu1dO/5rN3eSymllNovbyqrs7Xvai3v/4vpDqmlzMz0o/luMLgLQzOZtKWlNhl3H8WMdr/77W+fOXp0eXn5lj2ZdvHixSeffPLcG298wHdOJpOXT516+umnSymT8fjJJ598/cyZD3mv47W150+cePKJJ5aXl29e8+KLL/7zP/3T62fOjNfG0yvXxuPHf/az10+/1j70sbHV1dXnnnvupRdfWltdfeez0dobb7zx7DPPXLt2rdxlx9rWdTfi5pH7DaBtkHHwDt3169dXlpdb39/cYGqta6urS9evry4vv+8G3FprbTKZTMbjGx+Px33ff8h7HQ6Hu3ftevGFF5aWlvrWSimrKyvHjx27ePHis88+u7S0VEppfb+6vPzi88/v2rVrZjj8MC+l6exrMplMbvlx3v5srf14PJlMHNGHO+xDHQVsrY3H45WVlZWVldXV1b7vP/iVeuvXr62tvTtAs3NzBw8dunjx4oULF8Z9X2pdWVt7+eWXd+7cefLkySuXL5dS1tbWXnnllW3btm3ZunU4HE4mk9XV1eltjsfjaSymsRuPx2traysrK6t/eF/t3SORGFgPw/LW+WO11umrt++6Ut7eI560duXq1d/++tfPPfvsysrK7j17HnnkkXvvvff9brG1dn15+cknn3zm6adXV1f37d//uc99bt+BA8NbVmC7rtu6ZcveT3zihRde2LNnz8K2bUvXr589e/bb3/3u4z/72YWLFz+xuLiyuvrSSy/tP3Bgdm5uPB6fPHXqyV/+8sxrr83Pzz/8hS88cPjwli1bVlZWjh8//ualS6urq8+fOHHf/fd//uGH3x5JKW9eufLs0aO/+fWvx+PxQ0eOjMfjcicXgoFSyjQ0586ff/6FF86cOTONSyvl9KuvXr9+vZTSWltaWv7h3//9ysrKkc98ZtNo9Owzz/zgBz/4/ve/P79583ve4uUrV/75X/7l9TNnjhw5snl+/sSJE//jhz/89ve+96kDBwaDwfRraimD4fDwgw+ePHny8pUrs3NzZ8+e3bVr14MPPPD4T396/ty56b7Ty6dO/cUXvzgzM3P06NGf//zn27dvf+TRR8+fP/9//vVfL1+58vmHHx503dk33njiF7/YuXPnQ0eO7Nq9e9OmTTdHcuXy5SefeOKpf/u3z/zZn92zffux48dPnz69ae72H1oGPtiwlHLxwoVfPvHEaDSahqbWev78+ekcpO/7E8ePnb9w4Utf+tIDDzzQdd2WrVv/69/+7Qsvvnjo0KF33FYrZXVt7fUzZ5575pnvfu97Bw8enBkO773vvp8+9tj/ffzx/YuLN0NTSum67lMHDx49evTihQvz8/OnTp06eOjQ1oWFAwcOnDt37s0331xdW7tw4cK+/ftXlpePHj26sLDwzW9+c9u2bSurq4PB4MTx47t27dq/f3/f96urq1/96lf379+/aTS6evXqzX2x106ffunFFz/72c9+4QtfmJmZ2bu4+D//8R+vX7t2hx5a4C3DUsp99933+Ycf3rJ163RS0Up55dSpp556qpTS9/3JkyfX1tbOvvHGeG2t1Lo6Hs/Ozl68ePHmQsmtVlZWXjp5cmZm5vCnP715NKq17tmz5z889NB//4d/WFtbm52dvTlvGQwGe/burV13/vz56R7N1772teFg8ODhw7/+1a9Onz5dStm6sLB169bXz5y5evXqkSNHdu3aVUuZG40ePHz4+RMnXn3llQP793ddt2PHjt27dy8sLJTpNPCtydHp06dbawcfeGDbtm2llE2j0Sc/+cnjx47dgYcVuNWwlLJt27b9Bw7s2LFj+gLtWxuvrR0/fryU0lpbWVmZTCZvXr48Ho9LKa3Ww4cPL37iE8N3HQmqpUwmk5Xl5fn5+cH0TI5ShsPh5s2bl5eXp4d7bp4rV2vdMj+/f9++s2fPTsbj5aWlxX37usFg9+7dpdZjx47Nzc0dOnRo0HXLKyullM2bN998Y+Lc7GzXdcvLy9OZ3pYtW7ruPVa1V1dXSymzM2+f7z8ajYZDb1iHO+3Gq256YHhage7Gqbg3VogXtm7dvn37I488sn///lpr39p4PJ4ZDpeXl99xhm0rZTAcbl1YuHLlytp4PNtarXV5be3suXPbtm2bnZmZnq174x5bK7U++OlP/+ynP7106dI999yzefPmWuuOnTs3bdr0/IkT99xzzzf+6q+6rhuNRrXWi5cujfu+67rW2vVr1yaTyebNmz/4GNJoNOr7fml5uW+t1jpp7c0331xbW7vdjyHwR/yRw9uDweDBw4cvXbz4+9///uq1a5O+v3jp0v/+0Y8uXbr07nlTrXV+fv7gpz7V9/3jjz9+9erVyWRy6qWXfvub3/zHz31uODNT3nWce8/u3f1k8tprrz14+PD0nQGzMzOLi4vXrl27dOnS4r59g8Fg165dCwsLx5577pVXXml9f31p6Re/+MVgMDh48OAHH0A6cODAYDD45RNPTFtz6tSpY8eOTRe5gTtpWGuttU4XgW9e21qb7uDUrtu7d++jjz76q1/96umnnhrNz1+/fn1xcXEwnYDcMg9qrbXWBrXee++93/7Od37yk58cffrprtbJZLJ3cfErX/vaYDB493uMFrZv37Fz52Qy2bt3b621tlZKWVxc3LN377aFhc2jUVfr3Ozs17/+9ccee+y//d3fjTZtur60NBqNvvWtb+3ZvXs8Hpda2i3npt78uC9l1549f/HFL/74xz/+L3/zN9Ol7h333DM9r2fD/PEU+FgYfvkrXxnOzMzfXAEppbW2e8+eRx59dOd995VSZmdnP/Pnf75j585z586Nx+PR/Pzivn2bNm3qan3ooYf27dtXSpmdm/v2d76zd8+eUsrc3NyRI0e2bN167uzZyWSysLCwd3Fx2/bt3XudwDIzHH75K19ZWlrasXPnzSvv37XrP/31X08XYkoptevuu//+b3zjGy+/8srVq1dnZmb27t27e9euubm5bjD49EMPLe7bd/NY+2h+/i+//OXZ2dlNc3Mzs7MHDx2an59/7bXXWmv33nff/ObNk/H4nlvuC7gDav+/ftRaq11Xb+4XtFZuLtPccmXfWj+ZDGdm2q0zrlu+5u1UlVJKmUwmpZTaddPFnvecpLXW2s3dorduoX/rKPs7brDv+0nfd4NBV99+f+702+v7vOFmevpw3/eltW4wuLHw1HWl7+/kHk1rpe/62mobzZed9wxmZ2/7XfSlXRu1i/cPVwZ9V7ou/zbqVlop3eTiQruydTAe1tLW/W3TtfSj+bUdO2dmZ+62P3zVSllZmVw4368sD9f9D4z9Owzr9JDwLQsub7/A//DKrtby7oM773VS//T7h7ecNfN+3vMvNrx732f6/0HXDd41gPqHA3j3gbBSa/eOkXzo92QBt8XdFn5gAxIaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIC4YSltvcdw16vrPQBYZ8O+Cc0d0NXJoNTSaulqKaWpDx8rw7awsN5juOvVVruur6WUOjeo3UBl+LgZdtu3r/cY7np1UrvSSm2ldtWyGB9DwzKcWe8x3NVqKaXUWkt7ezGsln79BgTrYFiqjT6u60uppdS31maaqRMfL8NqveAOmD7GzWPNx5QFAyBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogblrbeQ+C2qKXUG//CRjOcdEpzN5h0/WTQBq1UqWHjGV7eut5D4HZoXV2bqX1XSqlKw0YzvLTDMs1HXi2la6XWulZLe3sWBRvFcGzq9NE3XZyp5UZlyi0fwEYw7Bx4ultM92taVRk2nKEdmrvDzbLUJjRsOENb5N3Hc8pGY94ExAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNECc0QJzQAHFCA8QJDRAnNECc0ABxQgPECQ0QJzRAnNAAcUIDxAkNf6q63gNg4xMa/kQ3OtP0hvc3nGgNf4LaWm2l1NrXUltVG97TsJbJeo+Bj6Zaun7Yl1Zq30opRWV4X8O6vGm9x8BHVW3DMplppVqn4YMNJxd3rPcY+EiqpfR13MYzpQ3eWqLRG97bsC7PrPcY+KhqdbbUWlqt1oL5QMNqMZh/r9pqa8W+DH/U0CbCn8LWw4dhdwaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmi4e9RSamulTC9sIMOuekq4SwxaqbW91ZpSSl3nAfGW4WjUr/cY4DaopdTSD2dK7fRlwxned79nhbtEbTOlztTu5uzJtr1RDDv55+7R39izKcUyzYYyVH3uRrbqjWW43gOA26i+z8esM4e3gTihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHihAaIExogTmiAOKEB4oQGiBMaIE5ogDihAeKEBogTGiBOaIA4oQHi/h+YsdvCtJMbSQAAAABJRU5ErkJggg==");

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