"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["669476"], {
60980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_navigation_tabs_arkts_navigation_tabs_md_840_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-layout-development-arkts-build-layout-arkts-navigation-tabs-arkts-navigation-tabs-md-840.json
var site_docs_arkui_arkts_ui_development_arkts_layout_development_arkts_build_layout_arkts_navigation_tabs_arkts_navigation_tabs_md_840_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs/arkts-navigation-tabs","title":"选项卡 (Tabs)","description":"当页面信息较多时，为了让用户能够聚焦于当前显示的内容，需要对页面内容进行分类，提高页面空间利用率。Tabs组件可以在一个页面内快速实现视图内容的切换，一方面提升查找信息的效率，另一方面精简用户单次获取到的信息量。","source":"@site/docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs/arkts-navigation-tabs.md","sourceDirName":"arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs","slug":"/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"选项卡 (Tabs)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-tabs","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"栅格布局 (GridRow/GridCol)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout/"},"next":{"title":"开发应用沉浸式效果","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs/arkts-navigation-tabs.md


const frontMatter = {
	title: '选项卡 (Tabs)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-tabs',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '选项卡 (Tabs)';

const assets = {

};



const toc = [{
  "value": "基本布局",
  "id": "基本布局",
  "level": 2
}, {
  "value": "底部导航",
  "id": "底部导航",
  "level": 2
}, {
  "value": "顶部导航",
  "id": "顶部导航",
  "level": 2
}, {
  "value": "侧边导航",
  "id": "侧边导航",
  "level": 2
}, {
  "value": "限制导航栏的滑动切换",
  "id": "限制导航栏的滑动切换",
  "level": 2
}, {
  "value": "固定导航栏",
  "id": "固定导航栏",
  "level": 2
}, {
  "value": "滚动导航栏",
  "id": "滚动导航栏",
  "level": 2
}, {
  "value": "自定义导航栏",
  "id": "自定义导航栏",
  "level": 2
}, {
  "value": "切换至指定页签",
  "id": "切换至指定页签",
  "level": 2
}, {
  "value": "支持适老化",
  "id": "支持适老化",
  "level": 2
}, {
  "value": "控制页面缓存数",
  "id": "控制页面缓存数",
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
    del: "del",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "选项卡-tabs",
        children: "选项卡 (Tabs)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当页面信息较多时，为了让用户能够聚焦于当前显示的内容，需要对页面内容进行分类，提高页面空间利用率。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs",
        children: "Tabs"
      }), "组件可以在一个页面内快速实现视图内容的切换，一方面提升查找信息的效率，另一方面精简用户单次获取到的信息量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本布局",
      children: "基本布局"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabs组件的页面组成包含两个部分，分别是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#tabbar",
        children: "TabBar"
      }), "。TabContent是内容页，TabBar是导航页签栏，页面结构如下图所示，根据不同的导航类型，布局会有区别，可以分为底部导航、顶部导航、侧边导航，其导航栏分别位于底部、顶部和侧边。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Tabs组件布局示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(908024)/* ["default"] */.A) + "",
        width: "801",
        height: "384"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96340)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabContent组件不支持设置通用宽度属性，其宽度默认撑满Tabs父组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabContent组件不支持设置通用高度属性，其高度由Tabs父组件高度与TabBar组件高度决定。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabs使用花括号包裹TabContent，如图2，其中TabContent显示相应的内容页。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Tabs与TabContent使用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797643)/* ["default"] */.A) + "",
        width: "189",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每一个TabContent对应的内容需要有一个页签，可以通过TabContent的tabBar属性进行配置。在如下TabContent组件上设置tabBar属性，可以设置其对应页签中的内容，tabBar作为内容的页签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TabContent() {\n  // app.string.homepage_content资源文件中的value值为“首页的内容”\n  Text($r('app.string.homepage_content'))\n    .fontSize(30)\n}\n// app.string.homepage资源文件中的value值为“首页”\n.tabBar($r('app.string.homepage'))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置多个内容时，需在Tabs内按照顺序放置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tabs() {\n  TabContent() {\n    // app.string.homepage_content资源文件中的value值为“首页的内容”\n    Text($r('app.string.homepage_content'))\n      .fontSize(30)\n  }\n  // app.string.homepage资源文件中的value值为“首页”\n  .tabBar($r('app.string.homepage'))\n\n  TabContent() {\n    // app.string.recommend_content资源文件中的value值为“推荐的内容”\n    Text($r('app.string.recommend_content'))\n      .fontSize(30)\n  }\n  // app.string.recommend资源文件中的value值为“推荐”\n  .tabBar($r('app.string.recommend'))\n\n  TabContent() {\n    // app.string.discover_content资源文件中的value值为“发现的内容”\n    Text($r('app.string.discover_content'))\n      .fontSize(30)\n  }\n  // app.string.discover资源文件中的value值为“发现”\n  .tabBar($r('app.string.discover'))\n\n  TabContent() {\n    // app.string.mine_content资源文件中的value值为“我的内容”\n    Text($r('app.string.mine_content'))\n      .fontSize(30)\n  }\n  // app.string.mine_content资源文件中的value值为“我的”\n  .tabBar($r('app.string.mine'))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "底部导航",
      children: "底部导航"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "底部导航是应用中最常见的一种导航方式。底部导航位于应用一级页面的底部，用户打开应用，能够分清整个应用的功能分类，以及页签对应的内容，并且其位于底部更加方便用户单手操作。底部导航一般作为应用的主导航形式存在，其作用是将用户关心的内容按照功能进行分类，迎合用户使用习惯，方便在不同模块间的内容切换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 底部导航栏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(375482)/* ["default"] */.A) + "",
        width: "332",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航栏位置使用Tabs的barPosition参数进行设置。默认情况下，导航栏位于顶部，此时，barPosition为BarPosition.Start。设置为底部导航时，需要将barPosition设置为BarPosition.End。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tabs({ barPosition: BarPosition.End }) {\n  // TabContent的内容：首页、发现、推荐、我的\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["底部导航栏可通过设置TabContent的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#bottomtabbarstyle9",
        children: "BottomTabBarStyle"
      }), "来实现底部页签样式，详细示例请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#%E7%A4%BA%E4%BE%8B9%E8%AE%BE%E7%BD%AE%E5%BA%95%E9%83%A8%E9%A1%B5%E7%AD%BE%E4%BD%BF%E7%94%A8symbol%E5%9B%BE%E6%A0%87",
        children: "示例9（设置底部页签使用symbol图标）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "顶部导航",
      children: "顶部导航"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当内容分类较多，用户对不同内容的浏览概率相差不大，需要经常快速切换时，一般采用顶部导航模式进行设计，作为对底部导航内容的进一步划分，常见一些资讯类应用对内容的分类为关注、视频、数码，或者主题应用中对主题进行进一步划分为图片、视频、字体等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 顶部导航栏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78732)/* ["default"] */.A) + "",
        width: "332",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tabs({ barPosition: BarPosition.Start }) {\n  // TabContent的内容:关注、视频、游戏、数码、科技、体育、影视\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "侧边导航",
      children: "侧边导航"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "侧边导航是应用较为少见的一种导航模式，更多适用于横屏界面，用于对应用进行导航操作，由于用户的视觉习惯是从左到右，侧边导航栏默认为左侧侧边栏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 侧边导航栏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(933820)/* ["default"] */.A) + "",
        width: "710",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现侧边导航栏需要将Tabs的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#vertical",
        children: "vertical"
      }), "属性设置为true，vertical默认值为false，表明内容页和导航栏垂直方向排列。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Tabs({ barPosition: BarPosition.Start }) {\n    // TabContent的内容:首页、发现、推荐、我的\n    // ···\n  }\n// ···\n  .vertical(true)\n  .barWidth(100)\n  .barHeight(200)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(183227)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vertical为false时，tabbar的宽度默认为撑满屏幕的宽度，需要设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#barwidth",
          children: "barWidth"
        }), "为合适值。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vertical为true时，tabbar的高度默认为实际内容的高度，需要设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#barheight",
          children: "barHeight"
        }), "为合适值。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制导航栏的滑动切换",
      children: "限制导航栏的滑动切换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，导航栏都支持滑动切换，在一些内容信息量需要进行多级分类的页面，如支持底部导航+顶部导航组合的情况下，底部导航栏的滑动效果与顶部导航出现冲突，此时需要限制底部导航的滑动，避免引起不好的用户体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 限制底部导航栏滑动"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(687533)/* ["default"] */.A) + "",
        width: "332",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制滑动切换的属性为scrollable，默认值为true，表示可以滑动，若要限制滑动切换页签则需要设置为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Tabs({ barPosition: BarPosition.End }) {\n    TabContent() {\n      Column() {\n        Tabs() {\n          // 顶部导航栏内容\n        // ···\n        }\n      }\n      .backgroundColor('#ff08a8f1')\n      .width('100%')\n    }\n    // app.string.homepage资源文件中的value值为“首页”\n    .tabBar($r('app.string.homepage'))\n\n    // 其他TabContent内容：发现、推荐、我的\n    // ···\n  }\n// ···\n  .scrollable(false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "固定导航栏",
      children: "固定导航栏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当内容分类较为固定且不具有拓展性时，例如底部导航内容分类一般固定，分类数量一般在3-5个，此时使用固定导航栏。固定导航栏不可滚动，无法被拖拽滚动，内容均分tabBar的宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 固定导航栏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(707226)/* ["default"] */.A) + "",
        width: "332",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabs的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#barmode10",
        children: "barMode"
      }), "属性用于控制导航栏是否可以滚动，默认值为BarMode.Fixed。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tabs({ barPosition: BarPosition.End }) {\n  // TabContent的内容：首页、发现、推荐、我的\n  // ···\n}\n.barMode(BarMode.Fixed)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滚动导航栏",
      children: "滚动导航栏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滚动导航栏可以用于顶部导航栏或者侧边导航栏的设置，内容分类较多，屏幕宽度无法容纳所有分类页签的情况下，需要使用可滚动的导航栏，支持用户点击和滑动来加载隐藏的页签内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图8"
        })
      }), " 可滚动导航栏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859802)/* ["default"] */.A) + "",
        width: "332",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滚动导航栏需要设置Tabs组件的barMode属性，默认值为BarMode.Fixed表示为固定导航栏，BarMode.Scrollable表示可滚动导航栏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tabs({ barPosition: BarPosition.Start }) {\n  // TabContent的内容：关注、视频、游戏、数码、科技、体育、影视、人文、艺术、自然、军事\n  // ···\n}\n.barMode(BarMode.Scrollable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义导航栏",
      children: "自定义导航栏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于底部导航栏，一般作为应用主页面功能区分，为了更好的用户体验，会组合文字以及对应语义图标表示页签内容，这种情况下，需要自定义导航页签的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图9"
        })
      }), " 自定义导航栏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618865)/* ["default"] */.A) + "",
        width: "326",
        height: "73"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统默认情况下采用了下划线标识当前活跃的页签，而自定义导航栏需要自行实现相应的样式，用于区分当前活跃页签和未活跃页签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义导航栏需要使用tabBar的参数，以其支持的CustomBuilder的方式传入自定义的函数组件样式。例如这里声明tabBuilder的自定义函数组件，传入参数包括页签文字title，对应位置index，以及选中状态和未选中状态的图片资源。通过当前活跃的currentIndex和页签对应的targetIndex匹配与否，决定UI显示的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@State currentIndex: number = 0;\n\n@Builder\ntabBuilder(title: ResourceStr, targetIndex: number, selectedImg: Resource, normalImg: Resource) {\n  Column() {\n    Image(this.currentIndex === targetIndex ? selectedImg : normalImg)\n      .size({ width: 25, height: 25 })\n    Text(title)\n      .fontColor(this.currentIndex === targetIndex ? '#1698CE' : '#6B6B6B')\n  }\n  .width('100%')\n  .height(50)\n  .justifyContent(FlexAlign.Center)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在TabContent对应tabBar属性中传入自定义函数组件，并传递相应的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TabContent() {\n  Column() {\n    // app.string.mine_content资源文件中的value值为“我的内容”\n    Text($r('app.string.mine_content'))\n  }\n  .width('100%')\n  .height('100%')\n  .backgroundColor('#007DFF')\n}\n// app.string.mine资源文件中的value值为“我的”\n.tabBar(this.tabBuilder($r('app.string.mine'), 0, $r('app.media.mine_selected'), $r('app.media.mine_normal')))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "切换至指定页签",
      children: "切换至指定页签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在不使用自定义导航栏时，默认的Tabs会实现切换逻辑。在使用了自定义导航栏后，默认的Tabs仅实现滑动内容页和点击页签时内容页的切换逻辑，页签切换逻辑需要自行实现。即用户滑动内容页和点击页签时，页签栏需要同步切换至内容页对应的页签。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图10"
        })
      }), " 内容页和页签不联动"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(630306)/* ["default"] */.A) + "",
        width: "267",
        height: "574"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，支持使用Tabs提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#onselected18",
        children: "onSelected"
      }), "事件方法，监听索引index的变化，并将选中元素的index值传递给selectIndex，实现页签的切换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct ContentPageNoAndTabLinkage {\n\n  @State selectIndex: number = 0;\n  @Builder tabBuilder(title: Resource, targetIndex: number) {\n    Column() {\n      Text(title)\n        .fontColor(this.selectIndex === targetIndex ? '#1698CE' : '#6B6B6B')\n    }\n  }\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          Tabs({ barPosition: BarPosition.End }) {\n            TabContent() {\n              // app.string.homepage_content资源文件中的value值为“首页内容”\n              Text($r('app.string.homepage_content')).width('100%').height('100%').backgroundColor('rgb(213,213,213)')\n                .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)\n            // app.string.homepage资源文件中的value值为“首页”\n            }.tabBar(this.tabBuilder($r('app.string.homepage'), 0))\n\n            TabContent() {\n              // app.string.discover_content资源文件中的value值为“发现内容”\n              Text($r('app.string.discover_content')).width('100%').height('100%').backgroundColor('rgb(112,112,112)')\n                .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)\n            // app.string.discover资源文件中的value值为“发现”\n            }.tabBar(this.tabBuilder($r('app.string.discover'), 1))\n\n            TabContent() {\n              // app.string.recommend_content资源文件中的value值为“推荐内容”\n              Text($r('app.string.recommend_content')).width('100%').height('100%').backgroundColor('rgb(39,135,217)')\n                .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)\n            // app.string.recommend资源文件中的value值为“推荐”\n            }.tabBar(this.tabBuilder($r('app.string.recommend'), 2))\n\n            TabContent() {\n              // app.string.mine_content资源文件中的value值为“我的内容”\n              Text($r('app.string.mine_content')).width('100%').height('100%').backgroundColor('rgb(0,74,175)')\n                .fontSize(40).fontColor(Color.Black).textAlign(TextAlign.Center)\n            }\n            // app.string.mine资源文件中的value值为“我的”\n            .tabBar(this.tabBuilder($r('app.string.mine'), 3))\n          }\n          .animationDuration(0)\n          .backgroundColor('#F1F3F5')\n          .onSelected((index: number) => {\n            this.selectIndex = index;\n          })\n        // ...\n      }\n      .width('100%')\n      // ...\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图11"
        })
      }), " 内容页和页签联动"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401139)/* ["default"] */.A) + "",
        width: "350",
        height: "581"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若希望不滑动内容页和点击页签也能实现内容页和页签的切换，可以将currentIndex传给Tabs的index参数，通过改变currentIndex来实现跳转至指定索引值对应的TabContent内容。也可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#tabscontroller",
        children: "TabsController"
      }), "，TabsController是Tabs组件的控制器，用于控制Tabs组件进行内容页切换。通过TabsController的changeIndex方法来实现跳转至指定索引值对应的TabContent内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\n  @State currentIndex: number = 2;\n  @State currentAnimationMode: AnimationMode = AnimationMode.CONTENT_FIRST;\n  private controller: TabsController = new TabsController();\n\n  // ...\n              Tabs({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.controller }) {\n                // ...\n              }\n              .animationDuration(0)\n              .height(300)\n              .animationMode(this.currentAnimationMode)\n              .onChange((index: number) => {\n                this.currentIndex = index;\n              })\n\n              // app.string.ContentWillChange_animationMode资源文件中的value值为“动态修改animationMode”\n              Button($r('app.string.ContentWillChange_animationMode')).width('50%').margin({ top: 20 })\n                .onClick(()=>{\n                  if (this.currentAnimationMode === AnimationMode.CONTENT_FIRST) {\n                    this.currentAnimationMode = AnimationMode.ACTION_FIRST;\n                  } else if (this.currentAnimationMode === AnimationMode.ACTION_FIRST) {\n                    this.currentAnimationMode = AnimationMode.NO_ANIMATION;\n                  } else if (this.currentAnimationMode === AnimationMode.NO_ANIMATION) {\n                    this.currentAnimationMode = AnimationMode.CONTENT_FIRST_WITH_JUMP;\n                  } else if (this.currentAnimationMode === AnimationMode.CONTENT_FIRST_WITH_JUMP) {\n                    this.currentAnimationMode = AnimationMode.ACTION_FIRST_WITH_JUMP;\n                  } else if (this.currentAnimationMode === AnimationMode.ACTION_FIRST_WITH_JUMP) {\n                    this.currentAnimationMode = AnimationMode.CONTENT_FIRST;\n                  }\n                })\n\n              // app.string.ContentWillChange_changeIndex资源文件中的value值为“动态修改index”\n              Button($r('app.string.ContentWillChange_changeIndex')).width('50%').margin({ top: 20 })\n                .onClick(() => {\n                  this.currentIndex = (this.currentIndex + 1) % 4;\n                })\n\n              Button('changeIndex').width('50%').margin({ top: 20 })\n                .onClick(() => {\n                  let index = (this.currentIndex + 1) % 4;\n                  this.controller.changeIndex(index);\n                })\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图12"
        })
      }), " 切换指定页签"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473807)/* ["default"] */.A) + "",
        width: "347",
        height: "726"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过Tabs组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#oncontentwillchange12",
        children: "onContentWillChange"
      }), "接口，设置自定义拦截回调函数。拦截回调函数在下一个页面即将展示时被调用，如果回调返回true，新页面可以展示；如果回调返回false，新页面不会展示，仍显示原来页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tabs({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.controllerTwo }) {\n  // ...\n}\n// ...\n.onContentWillChange((currentIndex, comingIndex) => {\n  if (comingIndex === 2) {\n    return false;\n  }\n  return true;\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图13"
        })
      }), " 支持开发者自定义页面切换拦截事件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(919293)/* ["default"] */.A) + "",
        width: "317",
        height: "692"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持适老化",
      children: "支持适老化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在适老化大字体场景下，底部页签提供大字体弹窗显示内容。当组件识别到大字体时，基于设置的文字和图标等内容，构建长按提示弹窗。当用户长按弹窗后，滑动到下一个页签位置时，使用新页签的弹窗提示内容替换上一个页签提示内容，抬手关闭弹窗并切换到对应TabContent内容页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859858)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹窗只适用于底部页签BottomTabBarStyle。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图14"
        })
      }), " 在适老化场景下通过长按底部页签显示适老化弹窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(385199)/* ["default"] */.A) + "",
        width: "392",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct AgeFriendlyTabs {\n \n  build() {\n    NavDestination() {\n      Column() {\n        Tabs({ barPosition: BarPosition.End }) {\n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Pink)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'OverLength'))\n \n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'SixLine'))\n \n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Blue)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Blue'))\n \n          TabContent() {\n            Column().width('100%').height('100%').backgroundColor(Color.Green)\n          }.tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Green'))\n        }\n        .vertical(false)\n        .scrollable(true)\n        .barMode(BarMode.Fixed)\n        .width('100%')\n        .backgroundColor(0xF1F3F5)\n      }.width('80%').height(200)\n      .margin({ top: 200 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制页面缓存数",
      children: "控制页面缓存数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#cachedmaxcount19",
        children: "cachedMaxCount"
      }), "接口，设置子组件的最大缓存个数和缓存模式。默认情况下Tabs创建时会一次性预加载所有TabContent，而且已加载的页面不会释放，可能会带来性能内存问题。此时可以设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#cachedmaxcount19",
        children: "cachedMaxCount"
      }), "属性控制缓存的页面数量，设置此属性后不会进行页面预加载，使用懒加载机制(仅切换到页面时才加载)，当切换页面时根据所设置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#tabscachemode19%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "TabsCacheMode"
      }), "决定保留缓存或者释放页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147559)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabsCacheMode枚举值为CACHE_BOTH_SIDE时，缓存当前显示的子组件和其两侧的子组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TabsCacheMode枚举值为CACHE_LATEST_SWITCHED时，缓存当前显示的子组件和最近切换过的子组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "存在翻页动画时，从页面1直接切换到页面3，翻页动画会包含页面2，页面2也会被加载，如果此时页面2不在缓存范围内，页面切换完成后会立马释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图15"
        })
      }), " 在页面缓存场景下通过点击yellow按键切换界面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608171)/* ["default"] */.A) + "",
        width: "488",
        height: "393"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct NumberOfCachesTabBar {\n  build() {\n    // ...\n          Tabs({ barPosition: BarPosition.Start }) {\n            TabContent() {\n              MyComponent({ color: '#00CB87' })\n            }.tabBar(SubTabBarStyle.of('green'))\n\n            TabContent() {\n              MyComponent({ color: '#007DFF' })\n            }.tabBar(SubTabBarStyle.of('blue'))\n\n            TabContent() {\n              MyComponent({ color: '#FFBF00' })\n            }.tabBar(SubTabBarStyle.of('yellow'))\n\n            TabContent() {\n              MyComponent({ color: '#E67C92' })\n            }.tabBar(SubTabBarStyle.of('pink'))\n\n            TabContent() {\n              MyComponent({ color: '#FF0000' })\n            }.tabBar(SubTabBarStyle.of('red'))\n          }\n          .width(360)\n          .height(296)\n          .backgroundColor('#F1F3F5')\n          .cachedMaxCount(1, TabsCacheMode.CACHE_BOTH_SIDE)\n          // ...\n  }\n}\n\n@Component\nstruct MyComponent {\n  private color: string = '';\n\n  aboutToAppear(): void {\n    console.info('aboutToAppear backgroundColor:' + this.color);\n  }\n\n  aboutToDisappear(): void {\n    console.info('aboutToDisappear backgroundColor:' + this.color);\n  }\n\n  build() {\n    Column()\n      .width('100%')\n      .height('100%')\n      .backgroundColor(this.color)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于以上示例代码为例，不同场景下的缓存策略如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如图16所示，使用默认翻页动画，CACHE_BOTH_SIDE模式，n设置为2，点击TabBar切换到yellow页，TabContent1", (0,jsx_runtime.jsx)(_components.del, {
            children: "3被缓存。再切换到red页，TabContent1、2释放，TabContent3"
          }), "5被缓存。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图16"
            })
          }), " 默认翻页动画，CACHE_BOTH_SIDE模式示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(253516)/* ["default"] */.A) + "",
            width: "1592",
            height: "388"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如图17所示，使用默认翻页动画，CACHE_LATEST_SWITCHED模式，n设置为2，点击TabBar切换到yellow页，TabContent1、3被缓存，TabContent2释放。再切换到red页，TabContent1、3、5被缓存，TabContent4释放。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图17"
            })
          }), " 默认翻页动画，CACHE_LATEST_SWITCHED模式示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(844334)/* ["default"] */.A) + "",
            width: "1592",
            height: "387"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如图18所示，关闭翻页动画，CACHE_BOTH_SIDE模式，n设置为2，点击TabBar切换到yellow页，TabContent1、3被缓存。再切换到red页，TabContent3、5被缓存，TabContent1释放。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图18"
            })
          }), " 关闭翻页动画，CACHE_BOTH_SIDE模式示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(592252)/* ["default"] */.A) + "",
            width: "1585",
            height: "386"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如图19所示，关闭翻页动画，CACHE_LATEST_SWITCHED模式，n设置为2，点击TabBar切换到yellow页，TabContent1、3被缓存。再切换到red页，TabContent1、3、5被缓存。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图19"
            })
          }), " 关闭翻页动画，CACHE_LATEST_SWITCHED模式示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(680613)/* ["default"] */.A) + "",
            width: "1585",
            height: "387"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/multi-tab-navigation",
          children: "基于Tabs组件实现常见导航样式"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/handle-tabs",
          children: "基于Tab组件实现增删Tab的功能"
        })
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
797643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798098-e80309b3aad5c2a0072f626edd217b16.png");

},
687533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798100-96f6474b95959a0e70fac30302e81815.gif");

},
630306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798102-b99dfb1a32bbba1f0561f6da3d7d6925.gif");

},
680613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437801-fb56bb39f2d22900a1b4ec01fc23609c.png");

},
375482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437793-cbd14e23d4312b475f41e544eaaca198.gif");

},
908024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477747-acc6111fea878ceacba57d9e24f181af.png");

},
608171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437799-af3e50569e42861807d05cb03939c9f6.gif");

},
473807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957752-2165657e64134be98ed8308030aebb03.gif");

},
147559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
707226(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437795-7caa6928918399340ac3ebdb6cf02496.gif");

},
919293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477753-3db34dfb30bee8d09fc8ebd4c0863cd3.gif");

},
933820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477749-9e535fc9d5f1a85e7f83af9758fda683.png");

},
618865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
592252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798106-4b009a8db0a4becc5c025494ae79480a.png");

},
859802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957750-9b64dbba0218fecb70cf492c9fea25eb.gif");

},
78732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957748-c699fd18b870f3dda95fa7437b0718f2.gif");

},
859858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
183227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
385199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798104-e96b98d340d8ef4ea26011efb9262832.gif");

},
96340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477755-98127be49b3a7d14f5b57579cc6833d8.png");

},
253516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957754-62bcc17c49458d2f08478c2603fd567f.png");

},
401139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437797-056567243d1f8f1ba96652f0530b8e05.gif");

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