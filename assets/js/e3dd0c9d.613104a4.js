"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["107684"], {
879070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_command_ide_ohpm_repo_pack_ide_ohpm_repo_pack_md_e3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-repo-command-ide-ohpm-repo-pack-ide-ohpm-repo-pack-md-e3d.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_command_ide_ohpm_repo_pack_ide_ohpm_repo_pack_md_e3d_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-pack/ide-ohpm-repo-pack","title":"ohpm-repo pack","description":"打包ohpm-repo部署目录文件。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-pack/ide-ohpm-repo-pack.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-pack","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-pack/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-pack/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"ohpm-repo pack","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-pack","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm-repo encrypt_password","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-encrypt_password/"},"next":{"title":"ohpm-repo deploy","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-deploy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-pack/ide-ohpm-repo-pack.md


const frontMatter = {
	title: 'ohpm-repo pack',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-pack',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm-repo pack';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "命令格式",
  "id": "命令格式",
  "level": 2
}, {
  "value": "功能描述",
  "id": "功能描述",
  "level": 2
}, {
  "value": "参数",
  "id": "参数",
  "level": 2
}, {
  "value": "&lt;deploy_root&gt;",
  "id": "deploy_root",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "ohpm-repo-pack",
        children: "ohpm-repo pack"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包ohpm-repo部署目录文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已成功执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-start",
        children: "start 命令"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-restart",
        children: "restart 命令"
      }), "，ohpm-repo服务启动成功。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm-repo pack <deploy_root>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于打包ohpm-repo部署目录", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_%E5%85%B3%E4%BA%8E-deploy_root",
        children: "deploy_root"
      }), "下的conf ，db和meta目录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果数据存储db模块使用的是mysql，则命令只打包conf和meta目录内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果数据存储db模块使用的是filedb，则命令打包conf、db和meta目录内容，且在命令执行过程中，会先将ohpm-repo服务设置为只读模式，等打包完成以后，再将ohpm-repo服务重置为读写模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打包产物可通过ohpm-repo restore命令自动解压至<deploy_root>目录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数",
      children: "参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deploy_root",
      children: "<deploy_root>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： String"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必填参数"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["必须在pack命令后面配置<deploy_root>参数，指定待打包的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_%E5%85%B3%E4%BA%8E-deploy_root",
        children: "ohpm-repo私仓部署目录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm-repo pack D:\\ohpm-repo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(842234)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "808",
        height: "60"
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
842234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAA8CAYAAACNW57hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACF8SURBVHhe7Z2/q21JVsf9A3qmZ5x8oBONJuvAQESEAcFwGqNBeAYGA40wgQ6KiSOIvkSkMRhoUZhJDBoT6WACYUAwGAzMxNDATDA0etan5nzPfO+6q3bVPnffc8+5vR58OHtXrVo/qurcWmufc9/9hffee+9dURRFURRFURTFLVAFSlEURVEURVEUN0MVKEVRFEVRFEVR3Ax3XaB89NFH7374wx++++Y3v5n2F8U9Ufu5KIqiKIriFXyC8vnnn7/75JNP0r6X4N/+9S86WV9xe1AQQNb3Ehy1n28trqIoiqIoilUeFCgkND/96U/PKFn64IMPzjJcv3379t1PfvKTLsNrlFnB7cCnn37anyBnslt8//vf7+M//PDDtP/aVIFyXxyVyN/afq4CpSiKoiiKe+VRgUJRQpIEJFkkS57oKIH63ve+1xMw7ilSPv7447PMCtLLeC943rx5k8qPoDBiLHqyfqDvWgVMFSj3xVGJ/DX38wpHxVUURVEURXFtHhUoMakh2SLRUoJ/VOKDTk/CSMwojsDlgGII+dETaT7BIakbfYqjZBG/9xZSkR/93e+/+5///tt3//e/P3r3X//5N+/++A8f+qQC5R//4Q+6DHA9k/nxP/3Ju1/+pa/3/u/83m+ex/H6L//8Z+frqGsL6ZGOt3/+O2ffo54YF7LeP/NZzOZnBe0x7T2In9KxF9SXfdInKBA+++yzsyxFt/+OR7afkY9tM9B9rf0M2NK+xkYshLI55Hom4/OoOVY/c6frqGsLXyt08B6U71FPjCu+X2c+i9n8FEVRFEVxu0wLFCUXSqZIBvz+UtDhCR0ocYu/JCybo+KC4mmrH+jTJ0IkLiQ4ez9VIWkn8SZRJxEnAeeeQkAy9NFO8k47r8h4wi8ZigZk0IWMigYVFvSrj/GM41p6ZlA8oOs//v2v+ligYFCRIb9lg1f3x4uLmc+wMj8rsAdJKlkv9hn7hHXzZJa1ox20rnHvkpTSji7kGM/acy+ZuOdJdKOtFRhzrf1MO/34jU3i4d7fk5pDbNGe2ZTMaJ5p455+9TGecVxLzwzmFF0q/IC1wQ565Lds8Or+eHEx8xlW5qcoiqIoittlWqAosdETSl71RJrXURI1g/EkD95GAjFKJGbJBQkLiUjW5yix1dPVTGYEiT5Jt+5//de+0RNwihC1kZzzCYLuARkS9i0ZEn+1kdBrjK5pV1HgMiOkF7BH229/9Kv9Xn7LJxVUcQw++f2Wz7AyPyuwB1kfb2N9Y5ujYsCfpLM/2RPeRrHg93HPx6R5lWvuZ8WlexU0vFfVls1h9HE2z/KfMbqmnXtdq32E9AL2aFPBJr/lEzF5DBqDT34/2xsr81MURVEUxe2y+TsoSig8QRAUJl6oeNK3gicmQsnOLHnL0Nitr3KQqJDIEqP8zuRGZMm2Pp3QPdd+D14MjGSy4mOrQNGnIyOkF7ClcRn0ZbiPM5+B69n8rMC+A2/zpBhYS4oJyWov+t7h3p+sZzBWe55rxlySyDLuWvs585H4fc40Ly4TfcxkfJ7lA226jjK87+kbIb2ALY3LoC/DfZz5DFzP5qcoiqIoitvlUYHiiYESt63igyQkSwhmMAbd3qavZsTEZpVREoJeiix086QVX+PXblZYScCzRJ5xRxcoe8DW1jj6iMsLHNAnLjDzGaTHZZ6jQGE/so5eTLOmce9wP9uXcc9HHasw7lr7GZ2zBDybw+hjJuPzrPc2bbqOMnvA1tY4+ogLW46/V2c+g/S4TBUoRVEURXE/TL/itcIlhz9JhCdLJJ0knPHrG4JEJWt3lBDG4oM2/KPf2/ey8hWmLJFHJhYo8etS6NjzFa89YG9rHDHNioiZz7AyPyuwVnEfkHCqjb3AmvqeyIoB9iVjtgps3/Ne+ES5Gdfcz8TlPo6+4qW4RPRxdZ4Zo2vaY0GwCva2xhFT9Dky8xlW5qcoiqIoittld4FCvxIWULLiic8KjJEuvoZDgkFbVkSQWIz6IiQmMREhQfH7S1n9JfmY7CMTCxTGxl84VyJ/VIFCgcB4CgfGce2figh+GZ5+/OEaOV4ZL5mZz/DcvySvdSVh1z397At9Qkab1lu/JM/eYo+hB3wfxT2v32W55f3MOLeHDPfMhWRiXICMx0X/1jzTpjG6pl1y0jOD9WA8hQPjuM4+wdR64Q/XyPHq79+Zz7AyP0VRFEVR3C67CxQSAR34wDVJQCa7hcYLJRyZrJLGlQRDCctRRUmExJtPDUi8ScD9f7qC1QJFSTx9QKIf/5th+nVNu+SlZ4brF9E3QRwqZIAYs694jXwW9G/Nzwrah1pLYN/5JyH0qQgg8VXRAr4fSXCVGIutAgXY0+je+uQl4vrhufezx4+/xOn9WVzI+txIRjbA5xn/NEbXtEteema4fhF9E3G9iNGLmZnPgv6t+SmKoiiK4nZ5UKC8BkhUSExIULL+W0DJftZ3q1zTZyWhWd8Xjefcz/c4z7U3iqIoiuL18+oKFOAJOU+ps75boAqUbSoJfchz7ed7nOfaG0VRFEXx+nmVBcqtUwXKNpWEXod7nOfaG0VRFEXx+qkCpSiKoiiKoiiKm6EKlKIoiqIoiqIoboYqUIqiKIqiKIqiuBmqQCmKoiiKoiiK4mZ4VKC8/xtfeve1v//yA2iLckVR7OMrv/v4vZXJrXBv79MjYy+K1wj/U9/K30YqiqL4IjAsUL763S/3pAK+9I2HMkVR7If3lt5Tv/inT0vS7+19emTsEXShN+tbofv01z8vnL78K7ncJWidxJafrB/yWd+twh8QvVZSfU1bR7Dnf5zTH5rlbx5l/UVRFF80hgXK6KDk8P7qH/380OVgf/+3HstyEH/tB2OZFT1nmZMeXr/ynf0HOAc/45SEZEnCalwzVmzFpEVozvvcJf1CckfYWmVlLY6yBcSicdLreq65XuIs+5c/k33v6w/7Zz47WuOsb4WZfhUBEY9Pba6DceD3Pt45j2vzwLz4+/0r3879gqfGHkHX1rptIV+Ik+uuJ6zrk2i6mCet15af8iXru1X0F/2zvqO5pq0j2PtfYn/66ac3/fe7iqIorsnuAoUkhATt/W/97NBVkkjyJhn6dBi7DEnlHj1Kls4y3z0lRu1eMiv0gx97p2QrSxJW/FlhxRb6e19L4rgWSoy4Zhwo5uxJOddPtbXKylocZYt9Ij3cS2/XdZK55noBdugHZH0dYMVnp9tt/VnfCjP9+IsNxaX94/K0q09tWucH9xQcbWzkvA8pTpoe2tCvvaG5iCBHf9Z3CbKd9c0gNvZR1nc0Mz+PnpdrUAXKmL0FSlEURfFzdhcoMQHkvh+8low8OvRbgkoS6InQip6IksC9T8plS7FlScIl/mSs2JrNsbMle7QtYl2VzdbiKFsqBtSX6X2J9aIIGhVbKz47T01GZ/qF7GRytPM+7X6c4koLFLuPnOc9fJqmwsbbxFNixx66Gc/PFM17XLduo/XThx/Ieb/IxgrNsXT0n19h/Xufzc/WuoxsaT4yRr49Nx988EEvCD7//PNeFIiPP/6496tYyKBPevhKltrR9cknn3TdWT+fIKCfrzlx//bt2122VlDRgG7p2PIp81m8efPm3WeffXaWxX++qqX+rEBB3ttibFEepMd91twIvv6GDH3Mn+Zx7/wURVHcCrsLlEh8cgx+sNLPa09YNp5UZnoESQkJBklCTIT2oNhWDv0tf1bYsnXua7HQD5qnkezWehxlS0++R8kcbK3FUbYYT5/uV+bgOderfzrTkl2SU+RAhY3Y6zN2XH4vM/1CdjI52unXJ1G09fepJdzxPkKBmumX3ThP3hfbV8AXFSbY1idn6JSM9POKX7pXMd33cGsH2tmLuvf9ihxjQXbiXMQ26eTV5YB2dMV2+XN+T5x8gWz+roESZ5JurgWJMP36fRCSd+S4FpKRnMaiC1lPwkn8GaPEHUj8lYxLH68zWyugn6IDXxiPX+j0hH/mM+Aj7ehCjvEUBNxLRvHonlgzW4olswPymVds8YqsikXJqDDBN8kg77qKoijuhScXKDr8dZCeE0UO9lPS1hNaEot2HceLqEfIH0CH++V9Ga7H5bMkIRL9OdIWSTR9JIbERLLPffbJkPTwGvvEUbZgxU7XF9YCjrLVx1oxK7tbvo32zyqykc0h7SSo+MS18Lj2+ix/s74VVuYEZCeTo53+/v48+d7jaEhG64ico36uM/1b/mlMbJ/B2nafrQj1nzdqw9/+acfpvre1OPonYO1a9jM89oj2t3+KEsdsxU27+xm5dF6EbI/IxoxQgpt9cuCQACOX9WXwOxaZXtnTJxAk7jHB3msrQ4m8t1GExDYn85mCiqLB2/Dd77EFuveiS20OfS4v5LN08+pzo7ny31/RL91XgVIUxb3ypAKlJwc/aIeuPUnXeA7bc4HSEjkO8dEhmemJIKOnmGff7Il2RtRBm3yLfU7qz4G2SLQeJNJNN0kVuBxIT2ZDHGVrlXQtGkfZQq8nmLM5WNk/M7bmkHYS+HNsSVx7fcYO/VnfCjP9QnYyOdp7vC0erpnHXpBYwq33bUT9I/1b/l0a+0gnbT0Ou8/wuFzWxzqsN3tKc6IC1e1HvVtxb9mCS+flTFtH7I5IxwzQJwRKmkl0s08rZkUDY0jMlazrK1ExSadvSw8cVaCAt0W9Kz5z75+EZDBWn7BwzRg+Bcpkgf7oG8gPb0MWvVzr05c4py5TFEVxb1xcoHS5lhT6U2ORHcQ64L0NtvRkdN0XJqKKbStJ2OvPiBVbzig5kR5eY584ytZeus3JWuy11YuNJu9fu9GT6/7kvCVhLt9jf+b1yto9rr0+x/GXIH95zfqF7GRy3b9TXPgOSsYlE+8jPHzI9Mvug4I19MX2GaOYPQ7d+1oI1snHSdbHnqFoY1+1IpR+QGe0z73PD31RRgxtnaAPmazvJSBR56m8PmEg4aVwcZmtooEn/YxTkg7+NS2XVQLvbZEtW6tkyb7rXfWZ+61iAxSTE+N26I++QeYzsvjGdRUoRVG8RvYXKO3g1kE6Sk7702VPGE+HPQe8t830PAI9e+QDii1NEi7xZ4MtW5mNnvy0OfI2mK5H4yhbsGXnAclaHGGLrxuhZ8R5zM71msU1m8MHe7fhcS37bMj32L6K/J3FJTuZHO2Kt+tr8fT37o4ChQKk6wlr0MfZJ0zOpbGrEOxFX2yzdYsxbBHHimx+tc7exr3bUmE6mu+4jxzNS1bUvTT6WhHFircruc8+XckSZ35HIkumlcx7W2TL1irYiV/notBQ26rPfKrCGH3tKsMLCy98opzARixEwPUIZFV86Otce77iFee/KIri1thdoJDE9EO5FSAcqI5kzk+PWxt6sq8DrerhCS3j/GtiI99GkFigtyeV2Gx6uKddMiv+rLBiq8fR7PX4Wiz0I5sl2vSPYj7alvT4eLGyFkfZiqAr2tqzXlu2VuZQfb19EpfIfHakI+tbYaZfcWmdiEH+S6bH0Np0T2JPG2PObe3a7zMezU+bl6jboZ3+rG8G683aEx/7UD9b3BbttNHnezZL/Ed+PvpUrNmTLdqk62y/xQw+39Fe912yzWbcP7LJOvR+aO8ll7kWfH2J5FaQIMckGJQI+ycOklEfBQAJMYm+fumcNgoNoM+/RsU4tyG2bK1CHIzHD2yhQ/7Qv+IzcvoKHEWHzxXybssLC3xlDHJqwx52gD7mQfeSiXog6lHBhH18k88uI4iDPve1KIri1thfoLS+ES7H4XpOItuBS4Lg/XGsIxklPoLDP+pZQUlDxBOvrF+4rhkrtnj632M7zU9P6pMkCbbW42hbJEPIZLaW1uIgW5FsDuRHho+FLVuXzKESSNcTyXx2+vuj9Wd9K8z0j+Jyv+O95slj5/rBXGTwaRZFyeL8PCV2kvhzbM0ehUO2z9ibKggky1iXAfpGvnY/FVPTpQLCx7g/vGYyosueisDeHwoUIB6XoQCKMtdASaxQUZDJkujSL1n/lIUxJM60k0SrAAD6QPciJuPOlq0VlOy7XWL1T0JmPkuOQkCFldgqUADf0S179Pt4R2MyPfS7L/goXSpUooxQoeRFUFEUxa0xLFCcURJUFMU6PeEN761MboV7e58eGXtRXEqW7L9GVKB4wVQURXFPPCpQ+FoCyYRzi9+JLop7gwIivrcyuRXu7X16ZOxFcSmvtUChEOHTEtDXu/i0Zut3ZIqiKG6ZRwVKURRFUbxGXmuBQkwUJcDXzuLX1oqiKO6NKlCKoiiKoiiKorgZqkApiqIoiqIoiuJmqAKlKIqiKIqiKIqboQqUoiiKoiiKoihuhkcFyr3996VFcS/wP1fF91Ymt8K9vU+PjL34YsPf8ai/4VGswl7hPxHgb8Vk/UXx2rnXn5nDAoU/TKf/DrT+m+GieDq8t/Se0h/3y+RWuLf36ZGx3xNaJ0H8mdwXmT3/s5b+aCJ/jDDrL4oM/stl/mezrO8l2LPni+Ip3PPPzGGBwmvsA/4aMn/dWAdu9lfigYPY/7J0lFnRc5Y56el/MTr568sz+t+MaOP0F5qzJGE1rhkrtmLSIjTnfe6SfiG5I2ytsrIWR9kCYtE46XU911qvUUwi2jzrO/0Vc/7KuvcLrXHWt0I2J875r60HPD61uQ7Ggd/7eOc8LvtL8t/O/YKnxn5XtLlhnrRecX8V+5M1/s4HTwSzvuK+oHDQ2pNExX2g/zpZsPaXPAnm78Mw/sMPP0z7r83ePT+CeN6+fdvnkfiI0/uZK5+/yJs3b86yjCWJpR193gckuvobOyMZIb/4L6+R9f/yekXPyG+t/d644jjdw4o/s3l2tmIf+e3+PAdP/ZlJ3Fvv0+did4FCEkLy9f63fnboKkkkMZMMfTqMXYakco8eJUtnme+eEqN2L5kVekKEvVOylSUJK/6ssGIL/b2vJXFcCyWzXDMOFHP2pJzrp9paZWUtjrLFPpEe7qW36zrJXGu9ZJt++kQf0xLxB7LNF2RdfuRP19Hksr4Vsjl50N98wYbi0v55MIcnX+lTG/Lw4J6Co42NnPchxUnTQ1tfi9PeGBUpyNGf9b1mNEdZ3xeZo5K14v7wtc8SH7WREJL0KYEeJcYjSBIZu5VYXhOP+ymoqEAX8xLjU0KsORSMIemUHH/oU+MZo4Sd5F0yjCHpRtZlYtEnXW7XZVb0yG99NUko2Vf/LC59eqDkXON4lcyKP9I9mmcxi132R3HdKsQCXCu2KPMc7C5QYsLFfUxGSGhIHs9yLUElofNEaEVPRInr3iflsqXYsiThEn8yVmzN5tjZkj3aFrGuymZrcZQtJfrqy/Rea72y9rMt+wRJchRKKwUZ+pDP+lbI5iRDdjI52nmfdj9OPqcFit1HsrkAFTbeJp4ce9tz8huYc3/4Ad1G+5lDP37EnxmKS8UVxBiYE/QwXjLgRTnMbIluo8lmffBIT7BzTXQgkRTqwI1//E+HLZAUjP44IMmkniYCCYAnPn74CeS9jYNe4yHKg/S4z1y7DMkCMvSRcJBQ8DpKOEYQJ2P0RFWgTzLcu5+aL17VBrP5WZXBH2KhH7/cF1jxeUVGkGTRF+PZg9aMayWA3o9+Xxv8wzdwOZj5w/7ERrZHQb7cyp5fQcmv/PK5GrUzhjZ/bxAL9nVPTMwV8anNE23do0fJP8ge8Y7meY8eXl029s/iYt+6nkzvij+SyewK9W3Fntm/BPYJeiLuF9fel+0t7cOtPe9yXGfv0+did4ESiU+7wQ9iJQ49IfCiJZDpESRBHNYc2o+SiB0otq0kQWz5s8KWrXNfi4V+iAlWlN1aj6NsZZ+KRLbW4ihbjKdP9ytz8FzrRby0uW1sIOux9U9wWnJJUossMFb9EXR6jHuRv+5XhuxkcopXn0TRpsRdMvE+QjKe6ZfdbA6eErvs9f3X9PS90uad+7NMi6XLNL97fK0v+tjjau1nmfbaZWw/yk/Wtts64TGt2BK0IxPbgXb1M1b3o2LnueEAImnhsOUw1WHnhz+HNu2AXHYIkqjRji7kGM8B5wmmH37A4ZjZwg8d8NkBKZ95xRavyHpyTRv2acM3ySDvumYgzzji5lp4shP9zJKTlflZkaEdGV59vRgbZbZ8XpERJDLIZsXLKsyP5ohX7Hq/YvI2FSKxQJv5Qwxb/dhnTvHB5/Cl9vwetLfiXMlf33PZ/PlYteOfFy0R5BjniTxzQqzEg03I9o6T6VE8zAd+gfu7GhfjadO99Pq4SOaP0HjNlbMSu8aP4lqFPazxoGLY3+/Ylh/0xX0KtM32vOQ0nlfkvf+5eHKBooNUh/Y5UWztSjQ5xJUAxPEi6hHyB9DhfnlfhutxeWzFvkj050hbSnBJDInpnNQkyYj08Br7xFG2YMVO1xfWAo6y1cdaMSu7W76N9s8qsrGyN3p8LTZvYyyJLH1ci1Hs8jfrW2FlTkB2Mjna6e/vz9N897lvSEbriJyjfq4z/Vv+aUxsX+E89/YpVS8U7T6uD3sCe/GrbCooe1t71Xw8kMFP0x1ZsSWifgcdcQz2+ydy1raF5nxENmYEhxCHrbfpAPY2RwmCP33j4OQA9DYOZL/3ww+UVHBgqs3ZOmyVIHDPK7IcutxzYHPviYeSEcmsgi3GeRyR6KcSBY9rZX5WZOj3p92AbU8kVnxekXFGa7QKa61kiNdYPOBLXJtsHr0vtjnMB3OV9RH7re75GZqTlX0s/3Tv7wH5wTpoL/hYB3n6PQnnnjnDBtfCE+dIpkfzih78wN+ZnhgXMJZ23W/tHZH5I7bmmfZZ7JfENYO1Qkd8/zv0+34TtK3s+dn79Ll4UoHSi5F2yPuTdI3nID4XKC1JOx/2Nl5keiLI9KfU7ltLHLgeEXXQJt9in5P6c6AtkpgHiXTTTYLiiY6QnsyGOMrWKulaNI6yhV5P1mZzsLJ/ZmzNodNtIRc+qaGNZPUc/yR27DAm61thNidCdjK5HgfxNl+5JrZekDQko/dtRP0j/Vv+PSV2xs3WGZlHyT6FRIjL76HrZj5O9/zcog2Qpe/B/j6NmdkSUX/sy8j0DGnryHyPSMcM4OCKB5oObt1zgHNYSVYHsx/+3OtgG8FYDmr0c/2Uwza2I6tkYpScuMwqJBSMky+MjwmN+nSf2ed+Nj+rMhluf8XnFZlrgh9xbUbruILGZgkh8fp8AbaR1/1L7fkZiivOVUTFiBfpPha/uWZ+5JePF+ghiY1xIs+caM9QlBFnLBzESA/jfd+t6IlxAW0+r4rV18sZ+SO25nkl9r1xzZC/FBVZv8A31jO20xbb455/SS4uULpcSwo5jGMf4+NB3BOCRHZLT0bXfWEiqthGSQLs9WfEii0HOeRju/TwGvvEUbb20m1O1mKvLRUAJH3EBfpkphcFLQlz+R77FdeLeJHLEtU4div2p66B/OU16xeyk8m5z8w39PepJcXxPqIkPuqX3ThP3hfbV2BcLAgimQz7YxYX4zQfAv/Zd70gb/sMGf9UbMWWyPR7H3qYR4f3Qyb/3MwOLg5WDkYOVtqBRIB+P/y5nyVe2EHOGSUQQH/0DTKfkVUyMUpOXGYPJBokRHriiB5PfKOfmX3uZ/OzRwbdDgmMy818XpW5FtiOa6Mnxj6Pe9DT69ie7R9sY4vrl9zzMxiLjtk+VgHiSTJkY/GRufI2wBbzkPVlerin3dtgS0/GSA9kcalo8fcF+5o2XllP17HiDzKMz+Y5a9/yWazIZKg4wd8YSwT9l+z5l2Z/gdISRCUYo+S0Pzn2hJEntO1wf3CQL+h5BHr2yAcUW5okXOLPBlu2MhvMDXPkbTBdj8ZRtmDLzgOStTjClr7TP+I8Zud6zeLamkPn0d4+wdgH+7uxFbt8z/pWkL+zuGQnk/N4u77ma49vksg7JPBdT1iDPu4ZPj1i7vuctvXP+qEXCGZbPvr6ZHH5fKSc9rx/7WrFlhi1Q5z3l4ZDi8PP2zjo1aaDmlf1Z4kjhydjtg5QPyQ9CYxyYs9hi6ySBiUsJCfqV1tMLPaC3+jxJ5nRTyVHe+dnRYb5yuZki8znyEzGY3kOsO1rgz/Eqn0YWfFH+zQWb8xf1Hsre36GfJvtY2zg36xdPnmhRZuS19EnDPTF4sznEFb1xL6ox8ni0tqM0Jqt+CO25pn2WeyZja24fF85+Ey8xM11JuNgN/v5MNvzlzDy+RJ2FygkB/RzMHOYO5I5P/FubejJvg60qoenlYzzr4mNfBtB0ovenjBis+nhnnbJrPizwoqtHkez1+NrsdCPbJZo0z+K+Whb0uPjxcpaHGUrgq5oa896bdlamcOzbIt7pEfj+9hJ7KD+rG+FbE4e9J/i0jrhn3yTjPzVPUkybYw5t7Vrv894FHuLOep2aKc/65uhNej7rNlBV7dra8K14qBPcXnsWVzRZ9ff9TT5LtP2t2RWbAn2ah8vvbY3FBc/K/19ln0CdQ04uDj8SEw5cHSA6wCOTydJBpBVm55k8uSdNg48Dmb0APJuyw9PJfKeBGAPO0Afh7PuJRP1QNTDOHzBPr7JZ5dZwWMB7KLHix/pRhYks3d+9shgk2vmhVd/orzi84qMIA763I+jQT8+4Au+MQcjm3v8YW8j723YuaU9vwI6GaPYNVfZHMivrM/tE5vi8veX5p73EHKOZOSH9PDKPfOwRw9xIIdfIz1iK64IupDdG9fKPK/Evicu6cvi0vrwig7hca3+zNza83vZ8vkS9hcorW+Ey3EAn5PIdmhz2Hp/HOtIRomPIAmIelZQYhHxBCXrF65rxootnsT22E7z05OtNl+uR2ytx9G2SLyQyWwtrcVBtiLZHMiPDB8LW7aW5vCE5iB9eh9iZ8+PYof+/kBX0rdCNifOKC73Kd5rnjx2rrO5eECLvRcl14q97Tsl+yIWjd2G+RP3ahYXsu73oz0/iGtmS/Tf8Wn90ucFCjyKq+l86a946cDSoeVP6+jzw10JHNAnORII+tUHfoDJlu6BQxPdske/j3c0JtNDv/uCj9KFfvyIMivoIBb4G3W4LV4vnZ9LZYgPm+pf8XlFRiip9YTnaNwXUCKVye7xh5iQ9QJO+0d98JJ7fgV0uA0RdYPWdqTfY8MXYvB+1x+RDLqx43p8Xi7Vw2vUI2ZxOewNZH2PyHaGZFbmeSX2PXFt7eeRP65rJAMuA4xTH/6tzGXG0T8ThgWKM0qCiqJYR4m5k8mtcG/v0yNjL54fHVxZ32tCBUpM9ovXDQlYTA5vac8rkR6RjSmKvdz6z/lHBUr/pdCWTDgv9TWDonhNUEDE91Ymt8K9vU+PjL14fm794LoUChGSUtDXJHjSeekTw+J+YS/wxFf3t7Tn2Y8UKSOyMUWxl1v/Of+oQCmKoii+2Nz6wXUpxKSn0HwF5ylfZyheF691zxfFiFvf81WgFEVRFEVRFEVxM1SBsgj/svaiKIqiKIqiKI6jCpRFqkApiqIoiqIoiuenCpRFqkApiqIoiqIoiufmvXf/D5tGNNZaUxEmAAAAAElFTkSuQmCC");

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