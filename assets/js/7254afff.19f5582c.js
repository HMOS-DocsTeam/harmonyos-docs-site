"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["950971"], {
108081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_harmonyos_act_ide_code_generation_ide_code_generation_md_725_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-harmonyos-act-ide-code-generation-ide-code-generation-md-725.json
var site_docs_ide_harmonyos_act_ide_code_generation_ide_code_generation_md_725_namespaceObject = JSON.parse('{"id":"ide-harmonyos-act/ide--code-generation/ide--code-generation","title":"代码生成","description":"CodeGenie具备自然语言代码生成能力，在*对话框内*输入代码需求描述，点击发送，将自动生成符合要求的代码段。","source":"@site/docs/ide-harmonyos-act/ide--code-generation/ide--code-generation.md","sourceDirName":"ide-harmonyos-act/ide--code-generation","slug":"/ide-harmonyos-act/ide--code-generation/","permalink":"/harmonyos-docs-site/ide-harmonyos-act/ide--code-generation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"代码生成","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide--code-generation","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码分析","permalink":"/harmonyos-docs-site/ide-harmonyos-ask/ide-code-analyse/"},"next":{"title":"代码修改","permalink":"/harmonyos-docs-site/ide-harmonyos-act/ide-code-modify/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-harmonyos-act/ide--code-generation/ide--code-generation.md


const frontMatter = {
	title: '代码生成',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide--code-generation',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '代码生成';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "代码生成",
        children: "代码生成"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CodeGenie具备自然语言代码生成能力，在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "对话框内"
        })
      }), "输入代码需求描述，点击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900881)/* ["default"] */.A) + "",
        width: "17",
        height: "16"
      }), "发送，将自动生成符合要求的代码段。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio 6.0.2 Beta1之前版本，生成的代码一键复制", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417266)/* ["default"] */.A) + "",
        width: "17",
        height: "19"
      }), "或一键插入", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(839678)/* ["default"] */.A) + "",
        width: "21",
        height: "20"
      }), "至编辑区当前光标位置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在DevEco Studio 6.0.2 Beta1版本，生成的代码直接应用到代码文件中；在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Changed Files"
        })
      }), "中可查看被修改的文件，修改前后内容对比，逐项接受或拒绝；代码还原；以及支持在问答区编译验证功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.2 Release版本开始，使用HarmonyOS Act智能体时，生成的代码直接应用到代码文件中；在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Changed Files"
        })
      }), "中可查看被修改的文件，修改前后内容对比，逐项接受或拒绝；代码还原，以及支持在问答区编译验证。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以DevEco Studio 6.0.2 Release和DevEco Studio 6.0.1 Release版本为例说明，如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.0.2 Release"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["选择HarmonyOS Act智能体，在对话框输入功能描述，点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(932386)/* ["default"] */.A) + "",
          width: "17",
          height: "16"
        }), "发送，等待生成。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在问答区域的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Changed Files"
          })
        }), "可以查看被修改的文件，点击文件对比修改前后差异；将鼠标悬浮在文件路径上，点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(524553)/* ["default"] */.A) + "",
          width: "30",
          height: "14"
        }), "可接受或拒绝该文件的修改；点击", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Accept All********/Reject All"
          })
        }), "按钮，接受或拒绝所有文件的修改；在编辑器右键", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Local History"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show History"
          })
        }), "，查看历史修改文件还原代码。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击问答区中", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run"
          })
        }), "，可以编译验证；开启", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto Run"
          })
        }), "开关，可以开启自动编译验证。Auto Run更多描述可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-agent/ide-agent-use#section2075893021715",
          children: "Agent配置"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在index页面中添加一个可以跳转至另外页面的按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(18030)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1910",
        height: "954"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.0.1 Release********版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在对话区域输入代码需求描述，点击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333662)/* ["default"] */.A) + "",
        width: "17",
        height: "16"
      }), "发送，将自动生成符合要求的代码段，将代码段一键复制", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(841832)/* ["default"] */.A) + "",
        width: "17",
        height: "19"
      }), "或一键插入", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998801)/* ["default"] */.A) + "",
        width: "21",
        height: "20"
      }), "至编辑区当前光标位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ArkTs语言写一段代码，在页面中间部分插入Swiper组件，其中有3个Image组件，其图片资源名分别为app.media.phone，app.media.watch，app.media.glasses。这些Image组件的宽度撑满父布局，高度为600，图片缩放类型为保持图片宽高比不变，将图片完全显示在边界内。 Swiper组件设置为自动播放，播放时间间隔为2秒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(274600)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1380",
        height: "979"
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
333662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAIAAAB/UwMIAAACW0lEQVR4AVxRS09aQRQ+c5Fbq4nKo8ZoYqOISnUlDxMpO01cyaaaENry04q7mhRowgaopUBNfAANtYRuikUjKU1NeYREipc7/eYSWTj5cuacb857JFXtqaqiCqn2evdQ1J7C1R4gXqDfA7wqEXEipoEYbtKOUMBTt3tXrVbPz78eHn44OvoMZ/hInDMNmiuRoii12q9i8Vvy08eDg7f7+8FYLFGpXA4PP76+rtZqv4mYxBhrNBqlUimVSodC4WDwTTKZRO7x8Qmny/Vid/fV65eL1oWlJaui3BmNRpSSEBCNRm9u/pjN5vX19UAg4Pf7t7e37Xb73Nxco1E/PT2xWC3HJ8cOp0N+JBMjqdvtMkbT09OrqyszMzOyLJN22u12IhGv/60/d3suyhfE2fKSDRKQJiefbGxs5PP5cDiCljgnbK9QKLyPRGzLtrU1e6fz7+ws53a7kZoxLIZjB3x+fn5vb9dmW06nU/F4LBR6V/5R9nq9s7NPOef5fM5isZhMZqTTOiCxA0RLkoQYn883MWFgJO3seMfGxokIc1YqP51OB4rA7AN1oOA7kJEYk5AS2tCQHiyQyWRcLtdgSDAA/pRQlHOEweRGg6HVamKhML6XSjrdkNW6yDEFbLBcOIsYmGgPDBSdTjcyMtpsNm9vO7n8F4/Hg64APEH2IWKg9SlIwGAwNputbDa7sIDR8YngRPpBNREzMMQjkclkKhaLV1eXDoejzzyQ2BtpdTAPIF5XVp7Jsn5zc1Ov1yMdAFbzwS0KijpChS4GZcRodHRka2trampK4x8Kxug/AAAA//9ZpphIAAAABklEQVQDAHIWIrbqT4wiAAAAAElFTkSuQmCC");

},
417266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAIAAAD5x3GmAAABuklEQVR4AVSScZOaQAzFE/Sq4rQnjnf28Pt/NBEE9Fqn/UOr218SsNOdR3h5STYsm6xuuubYhYUYmq6uu6Yx1HXvCO76sctUhRU2JTGYL4JuSKJJM3OxQETwPC/B5X6/d92pOtRgX9UAcqjrrj8TSsPyGkv3ZzrNNptiV74Hyo/3wHz+cv78IZKUnpqsD/n3x6Nt+33VsPG+OjrgDW0fj7TM8+v1SpojZRwAdj6d83zB9uXH9olduV3k877/VPaPPFJF7R+oyvV2Wy7nKHAQBJsvFoQiP3TETOz0/vhPa9uTf2HTtifCquoWM4D64TycL7TNZs0ngbe3NYqX8B5AAcxqgkWYQ9MH0Cd0koKEJc1qUAP4zz6QEMOqraD/7se+G+3ZB4L7xGw2C063zI5vc2IKPttzGAAxaXyK1VeoqoDh22YvXy6X3/gEqAQQ3J+XX4TgWWaZ6MAYsVXxyj1w/dXBrj8sf+J2+7MqvpFA2YhxdqbTyboofAK+74Z52+7K7bp4nUwmY3a8fQ6CulWWiIKUNPlZuTofaFzTCQ3zNobFl8UoVtuR4Qq4YEbwPW00FPuu/5lohXXIXwAAAP//XI8ljwAAAAZJREFUAwA41SfFOXTIoQAAAABJRU5ErkJggg==");

},
932386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAIAAAB/UwMIAAACW0lEQVR4AVxRS09aQRQ+c5Fbq4nKo8ZoYqOISnUlDxMpO01cyaaaENry04q7mhRowgaopUBNfAANtYRuikUjKU1NeYREipc7/eYSWTj5cuacb857JFXtqaqiCqn2evdQ1J7C1R4gXqDfA7wqEXEipoEYbtKOUMBTt3tXrVbPz78eHn44OvoMZ/hInDMNmiuRoii12q9i8Vvy08eDg7f7+8FYLFGpXA4PP76+rtZqv4mYxBhrNBqlUimVSodC4WDwTTKZRO7x8Qmny/Vid/fV65eL1oWlJaui3BmNRpSSEBCNRm9u/pjN5vX19UAg4Pf7t7e37Xb73Nxco1E/PT2xWC3HJ8cOp0N+JBMjqdvtMkbT09OrqyszMzOyLJN22u12IhGv/60/d3suyhfE2fKSDRKQJiefbGxs5PP5cDiCljgnbK9QKLyPRGzLtrU1e6fz7+ws53a7kZoxLIZjB3x+fn5vb9dmW06nU/F4LBR6V/5R9nq9s7NPOef5fM5isZhMZqTTOiCxA0RLkoQYn883MWFgJO3seMfGxokIc1YqP51OB4rA7AN1oOA7kJEYk5AS2tCQHiyQyWRcLtdgSDAA/pRQlHOEweRGg6HVamKhML6XSjrdkNW6yDEFbLBcOIsYmGgPDBSdTjcyMtpsNm9vO7n8F4/Hg64APEH2IWKg9SlIwGAwNputbDa7sIDR8YngRPpBNREzMMQjkclkKhaLV1eXDoejzzyQ2BtpdTAPIF5XVp7Jsn5zc1Ov1yMdAFbzwS0KijpChS4GZcRodHRka2trampK4x8Kxug/AAAA//9ZpphIAAAABklEQVQDAHIWIrbqT4wiAAAAAElFTkSuQmCC");

},
18030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912954-3ab9dd7b75ea473645ff0745184ca32f.gif");

},
524553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAIAAAC3hDtuAAACm0lEQVR4AayTXUhTYRjHz3m3s7PvtenYZvaNSJhYBrXKEAu78UK8SEQpsAJFCpEKg+yumyChm7oKL5LsYoRhgWkZpW4DXalDZ5N96GSmTrf2cfZxPB+d8V7MzonRhYcff9734fn/z8t53gP8827/yFfv2w9CfEOj/qkZvy/gXwnyWPT6xpz2N/b3/dZ3PF7bh4Znxxe8HoCO2+TzLtVyQIjS48W+WZFYHBE87ojvc3BygXD/THp4LBJL1s3p2ZALUI5ZTW21vqNVSMH1RrAdYROEIBlZjq4q5bLOqtbumjYeXRdvlJlKXFtLgE2ngUrJmQnbNLm6xi3oWCLldJGBIFDIEZpGaIYr8tihKTEQ4WIJr85tMREmw/A0lQHcBkJHY+G+gYzbk/gyER+bYCkK1v9fo6n4c9urxQ0PtOSi5WdOYSbDxtMXye9zCvNpbL8RduTXzcRWhiJZhE2Sqd7xlwSZKlIboCUXLdKoxfoC0h9g0hnuHQDHYUd+HZwffTbRtx4L9XzsLVRq280tGpkKWnLRSbvj99CI8WGX5FBxuN+yE1yHHfm1+WQ9d9Kblu6juoNtZ5vV0uzYoCUXTf7aMNzrUNZc0DY1cB+ECkdgR35VSRU9l28/qXvQfr4F/3uqAAUATkzbWC8tK+WCxIU6VW21rPw4S9EIiiIoV+ODoijDsjSTvTwSMVZuLOUuDGxiWIarZ3NFx44QDmdqbkEIYZti5XJUKoWe3apX6Ih00rrsmF518rCv/PBtBw6oTQC9UhMNBNcGBoWEJqeoijJEq9kdCtcnCkuNuGFw5lOfzcLD4hhmM6jZVAnY4iKkqUF0t0MIeusaU1mBSP7xX+jwfXWHL/WY7zyuus/j0bnOqyV1ellBbozwOHuofwAAAP//XkxhbAAAAAZJREFUAwAkO5WCvozFJQAAAABJRU5ErkJggg==");

},
841832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAIAAAD5x3GmAAABuklEQVR4AVSScZOaQAzFE/Sq4rQnjnf28Pt/NBEE9Fqn/UOr218SsNOdR3h5STYsm6xuuubYhYUYmq6uu6Yx1HXvCO76sctUhRU2JTGYL4JuSKJJM3OxQETwPC/B5X6/d92pOtRgX9UAcqjrrj8TSsPyGkv3ZzrNNptiV74Hyo/3wHz+cv78IZKUnpqsD/n3x6Nt+33VsPG+OjrgDW0fj7TM8+v1SpojZRwAdj6d83zB9uXH9olduV3k877/VPaPPFJF7R+oyvV2Wy7nKHAQBJsvFoQiP3TETOz0/vhPa9uTf2HTtifCquoWM4D64TycL7TNZs0ngbe3NYqX8B5AAcxqgkWYQ9MH0Cd0koKEJc1qUAP4zz6QEMOqraD/7se+G+3ZB4L7xGw2C063zI5vc2IKPttzGAAxaXyK1VeoqoDh22YvXy6X3/gEqAQQ3J+XX4TgWWaZ6MAYsVXxyj1w/dXBrj8sf+J2+7MqvpFA2YhxdqbTyboofAK+74Z52+7K7bp4nUwmY3a8fQ6CulWWiIKUNPlZuTofaFzTCQ3zNobFl8UoVtuR4Qq4YEbwPW00FPuu/5lohXXIXwAAAP//XI8ljwAAAAZJREFUAwA41SfFOXTIoQAAAABJRU5ErkJggg==");

},
274600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752958-7554be525481e23d979cdeeeaec05d2e.gif");

},
839678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAIAAADtKeFkAAAB/UlEQVR4AWyTwXLaQAyG9fuWPkHbGcghvTZPgM2zY7h32nNzAKYUE/oAHBL1k4QdJpOdD/mXtNKul3VzHE63DKdTMQafj8PzcDoXx+EMoYfzMJyPx3+NxmGmDyFvOdzzUUaWnjeWZe7X4klQlhjD3QBRTFqNNf5qtKIaa3RxESksl6garGQT5VIZ+zcTbNb9Zr1K1qn7dd+vV1DB1bpfGRW5Fx9HMwpbtEtou67t2rZbFkSCRaQQ486djdBKEuvT9D3MK2pSpN3ELg07FRuD8yMUXC4X/FsogGqRIqblBMfWAlGPwv/188ffwwEBzAZEpfId6cO/gCSMCMuP98cGZJ6efh/+RIvddpvs9rvdbovd7zHbLU2lWJyC1Bbr44z4y+tL6nzX+AOZPRGZ2lGo/L2dn6TPX77OZjPis/l8fn9/y2we7lSs7I8b+y/n++Pjw8M3QtQDokhdW0BClnIaxMze1r+7+ySJfIEs0pXIiPOXlAFDB7E+61gOcoAsiwB3Kjhc5BUifr2Fdj0//GsyH3Fze+4vd7Yudb/ZhJtJ2vGUlOtLMgRmfCV6Ldou4RZznbt22bVxr5eWQzFQ1MT36/mXxmmISPTSGKGVWQSNgVOklvOluhrSlCZeL2XcEBkZUjkV8x6pIszKUm4KEUDw8WMh3JxGY55VU7Zcyf8DAAD//3ILrUMAAAAGSURBVAMAPYlYyL0a9sMAAAAASUVORK5CYII=");

},
998801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAIAAADtKeFkAAAB/UlEQVR4AWyTwXLaQAyG9fuWPkHbGcghvTZPgM2zY7h32nNzAKYUE/oAHBL1k4QdJpOdD/mXtNKul3VzHE63DKdTMQafj8PzcDoXx+EMoYfzMJyPx3+NxmGmDyFvOdzzUUaWnjeWZe7X4klQlhjD3QBRTFqNNf5qtKIaa3RxESksl6garGQT5VIZ+zcTbNb9Zr1K1qn7dd+vV1DB1bpfGRW5Fx9HMwpbtEtou67t2rZbFkSCRaQQ486djdBKEuvT9D3MK2pSpN3ELg07FRuD8yMUXC4X/FsogGqRIqblBMfWAlGPwv/188ffwwEBzAZEpfId6cO/gCSMCMuP98cGZJ6efh/+RIvddpvs9rvdbovd7zHbLU2lWJyC1Bbr44z4y+tL6nzX+AOZPRGZ2lGo/L2dn6TPX77OZjPis/l8fn9/y2we7lSs7I8b+y/n++Pjw8M3QtQDokhdW0BClnIaxMze1r+7+ySJfIEs0pXIiPOXlAFDB7E+61gOcoAsiwB3Kjhc5BUifr2Fdj0//GsyH3Fze+4vd7Yudb/ZhJtJ2vGUlOtLMgRmfCV6Ldou4RZznbt22bVxr5eWQzFQ1MT36/mXxmmISPTSGKGVWQSNgVOklvOluhrSlCZeL2XcEBkZUjkV8x6pIszKUm4KEUDw8WMh3JxGY55VU7Zcyf8DAAD//3ILrUMAAAAGSURBVAMAPYlYyL0a9sMAAAAASUVORK5CYII=");

},
900881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAIAAAB/UwMIAAACW0lEQVR4AVxRS09aQRQ+c5Fbq4nKo8ZoYqOISnUlDxMpO01cyaaaENry04q7mhRowgaopUBNfAANtYRuikUjKU1NeYREipc7/eYSWTj5cuacb857JFXtqaqiCqn2evdQ1J7C1R4gXqDfA7wqEXEipoEYbtKOUMBTt3tXrVbPz78eHn44OvoMZ/hInDMNmiuRoii12q9i8Vvy08eDg7f7+8FYLFGpXA4PP76+rtZqv4mYxBhrNBqlUimVSodC4WDwTTKZRO7x8Qmny/Vid/fV65eL1oWlJaui3BmNRpSSEBCNRm9u/pjN5vX19UAg4Pf7t7e37Xb73Nxco1E/PT2xWC3HJ8cOp0N+JBMjqdvtMkbT09OrqyszMzOyLJN22u12IhGv/60/d3suyhfE2fKSDRKQJiefbGxs5PP5cDiCljgnbK9QKLyPRGzLtrU1e6fz7+ws53a7kZoxLIZjB3x+fn5vb9dmW06nU/F4LBR6V/5R9nq9s7NPOef5fM5isZhMZqTTOiCxA0RLkoQYn883MWFgJO3seMfGxokIc1YqP51OB4rA7AN1oOA7kJEYk5AS2tCQHiyQyWRcLtdgSDAA/pRQlHOEweRGg6HVamKhML6XSjrdkNW6yDEFbLBcOIsYmGgPDBSdTjcyMtpsNm9vO7n8F4/Hg64APEH2IWKg9SlIwGAwNputbDa7sIDR8YngRPpBNREzMMQjkclkKhaLV1eXDoejzzyQ2BtpdTAPIF5XVp7Jsn5zc1Ov1yMdAFbzwS0KijpChS4GZcRodHRka2trampK4x8Kxug/AAAA//9ZpphIAAAABklEQVQDAHIWIrbqT4wiAAAAAElFTkSuQmCC");

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