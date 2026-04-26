"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["429796"], {
468464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_execution_point_ide_debug_native_execution_point_md_5c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-execution-point-ide-debug-native-execution-point-md-5c8.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_execution_point_ide_debug_native_execution_point_md_5c8_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-execution-point/ide-debug-native-execution-point","title":"设置执行点","description":"开发者可以通过“设置执行点”在调试会话期间跳转到编辑器中的任意代码行，并在对应位置设置执行点，跳过当前位置到目标位置之间的所有代码。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-execution-point/ide-debug-native-execution-point.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-execution-point","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-execution-point/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-execution-point/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"设置执行点","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-execution-point","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"so信息可视化","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so/"},"next":{"title":"智能步入","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-smart-step-into/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-execution-point/ide-debug-native-execution-point.md


const frontMatter = {
	title: '设置执行点',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-execution-point',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '设置执行点';

const assets = {

};



const toc = [{
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置执行点",
        children: "设置执行点"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过“设置执行点”在调试会话期间跳转到编辑器中的任意代码行，并在对应位置设置执行点，跳过当前位置到目标位置之间的所有代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此操作适用于线性和非线性执行路径，用于中断和跳过循环，或者在if-else子句表达式或switch-case语句中选择另一个分支。例如，如果要检查另一个分支而不重新启动调试会话，可使用该功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将当前执行指针（代表当前运行位置的橙色箭头）拖动到所需的代码行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(553864)/* ["default"] */.A) + "",
            width: "449",
            height: "176"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要设置执行点的行，点击鼠标右键，在弹出菜单中选择“Set Execution Point to Cursor”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(720971)/* ["default"] */.A) + "",
            width: "309",
            height: "141"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(330020)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用“设置执行点”时，仅修改了程序计数器的值，未修改其他寄存器的值，这可能会导致不可预知的错误，例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果跳过初始化变量的那一行，应用将从堆栈/寄存器中获取值，这可能会导致段错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果可执行代码被编译器优化，可能会得到一个不可预知的结果，或者无法移动执行点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，还有一些其他不符合预期的问题，例如变量值错乱、堆栈信息异常等。"
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
553864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912830-ef960b41acf35da57213b2efa9c23a3b.png");

},
720971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACNCAYAAADW8e2oAAAZ7ElEQVR4Ae2dTaskR3aG68/Iv8H+DV55N6Y29sIMeNGM6PaAF3IJcm0tPOBazqYMxi5Mb7SdS4FWgwR9Qe7hXjFWX4tpMfKou7PRPsyJyDfiZGTkV1XWzczo90KRmfF54sSJp05E3orYvH//3vBDHdAGaAO52MAml4awHRyUtAHagNgAoUZPlZ46bSArGyDUaNBZGTS9NXprhBqhRqjRBrKyAUKNBp2VQdNTa/fUyvLWHHdHc1uWWff5rFAry3tz2G7MZoNPYU6ZK5yDrn3QUTfT6KYsH8zNfmd2x9savKaA2u1xZ/Y3D7Vyl9Zvs0GtvD+Y7WZjilP41ijLkym2B3O/ELABulrGpXUg5ZkGBDnpsXy4Mfv93uwjr0xDDeA73obxN0QHjw21c+ScBWprgcVa5BxijEzz4cDv4WZvvSkBkIbWUKg5kKSnqYRay3qV9dIGeGTWc/NT043ZHu6t2+vCt+ZwKPzUFXEyeNvzuelucTqZQsqtZIDXiGmweGZxGT6teJMJmQiNDwcaS+5rB6S9uXkoTXl7NLv9jXmoZj6A2ot3L8xxtzOffvqp/eg0bvzI9LUfaq68vbm5Ofqy9NRU4OrrUF6jyxfqR57glcna387807/+p/m3Djnb+mEeT+1UeKBYJVZTUQcVt67mwXXv3GPtNXngFCcHOZt/aw73gJG7dx0EkEkc1vDC2p0NK8KUtxTZNpAh5HVlCdDSZbcpmOGE3WPagAaZh84DxlB4URAA0px+DvXUACes3dlp764CqkyBFcigg6ZMbv1PPErItFP5EKY9TpTVdl0E1CCcg1UFFAsXvEAIV/HI0sCroNaZrw4p1CvX+8PWe32tUOsoW5fFe4JsLhuIp4f62QHFeWApWAgQ4VnpKzwpaVOzPAcxiXNlVlCzb1p3ZldBDvroqiMpU/XSY/lQs1O44PH4BttwBbWWKWov1FrzNaGGqSemr+65xVMTqLWUjTbwSqDNZQPwnDSQ5B6eTx/UILeDy4jpp/cExesKkJPyACrATXuSqA9XpNUAS4Uhfdt1Fk9NhHGeUR1sNU+tWrvSbx5PBWCTmgZWnlpnvgTUIlA5uVBPPb2Tr/7G1sukp8At922dwHCCcAobsMBQUzcpE6Bz07trTD8DxByAKk/t4cbcVG9WNZi0PGjz7bHDe1yLp4bGwEvCAr1c4THZDqmttQWYdHlq3fnqkLJp/Tqbm+Jui8JsqzU1iffT0o6XCqHOCqyE2qL/j0n6K8ePTA2xvqXbh3DtqUk8FvIvflHQ4qlJvfAatVxu7S3EwTPT8NPyt8mp0+j72Tw1LQTv8xxk7Ff26xw2QKhl+q09hzGxTkJsCTZAqBFqWU7FljC4KMM8kCfUCDVCjTaQlQ0QajTorAya3tE83tGS9E6oEWqEGm0gKxsg1GjQWRn0kjwGyjKP10ioEWqEGm0gKxsg1GjQWRk0vaN5vKMl6Z1QI9QINdpAVjbQCbW7uzvDD3VAG6ANLMUGhniEnVAbUgDT0N2nDdAGlmQDhBqnHllNPZY0uCjLPLAn1Ag1Qo02kJUNEGo06KwMmt7RPN7RkvROqBFqhBptICsbINRo0FkZ9JI8Bsoyj9dIqBFqhBptICsbINRo0FkZNL2jebyjJel9MNSePHlixnyW1EjKQkOnDXw4NpAF1PQpVDTeYcbrDr2pn+ZF3Q3THfXk9BQf5LIUvYyGWp/g8Oa60oWT0sMhxThAuCtfW9zcUJu6PW3tnDKcUCPAhtoTTnnSJ0JJ3kuhhnJx4pQ9o3R/Yx7K0rSdODVE5lmhps/0HCJsW5opoAYwnSPTJXnb2sRwQmcpNmABs9+bffJM0fYzO/vkB9RwRB7Sx2eDps4zRdrUdTTU4In1XVOVIWxqCBBqBABsi9fpbUHO3dzfPBg5x1MDSHtqbYCS/nBxzRPf2/Locl1+OYQ5HJrc18ejoYYCBWpt9zoOafS1DWoI1wca28OE+w4StqeyV6eq24OE3b3U6aZZ8XOY9opn5qAYwjaorzrtHYcta7mGtEfS6BPf5flUbMymOBm0tTjJafOhbniKjfgBMvmDl215oc2p8IZeorbq5QCnn605HArTpwutF95PD5jH1qkDT3Xq+u3R6IOPAZ8X716Y4y4cTqzTiLxjoSZ5AFKbX+o93nre9OlgVqhhgNhrcbJCl6fCBKiEE9XtIC8O5r4sQ7rqJHXtqTUGq4JcdxmhLtcRApuwkB4g4+rXikVcqj2STkAmQEy1rQYPabtvk5MHz30yxe2GfEPCAXUNbSurl6UCL/pInUCPenhdP8BSfWinfljnKuseE6B2K2tg5YO52dc9OZTXBzW9piYeoeTDqeyIQzjK7LqOhlrftBPxXZUCAvBKdFrvFdyXDS9L0iW9jhGeWnsZEdQsYIIHBWDpgQ+5u9ojaQCNTQ8kdTn63tfTIVOqjra6bbiGvfoi8XWVQR+6T1yZEheAjzy85gc2mXJqoOjnPqgJEAElfUV5bSB0LwnCdNPVkwZmyuZGQw2F6ClmfK+fkV5fUwNWx8OzEYABIs7jcB6PpNUeiBt0/dPP7jLCILblJwa6llHf97UnBZxUHh2m71GX9vQQFl+RTwNU0sThNf0l2urSO3ARavnBKrab1DNgooEk97vqhUEf1FBmn6em1+kkj3hp8XRTwxTltl0XCTU74LaFKZQ3EA9o57FVIGt4asGLqKWLBm8tTnkmoiyASHuTpyKsU2mFAhg6rY7XkI6n1rK+hrRd8vTJJDo7nKqpuWpLV/g2ml7iC8TWpXTVBTUHxwp+alqqw9E+XtcFx9RbR4BOQHQtqD26p4bpZd+1y4ABAUzp3DWAyMerAe/DqkX1bVGY+qAMwHFwcFPHejrnjaFeHSfy+nxYlLeDNExB26AVy6bbY18MoLwKNrUXBUVYfK+vn9U9R+jTwSItk60LLx2U7lLhrpygM0AcuqnLklpf7AYZobYugMG+9FW8o9hjkniEa6hJONbBpnhREE9dY29Oyxnfj/bU+mCG+LgiPteNHCBsAyX1VdcX9UF9DLWBwVAbWiDT1Y0veD7Bu5IwQq2uJ9oN9TGVDRBqM+3SQahxEE81iFlO3ZYItZmgRkOsGyL1QX1MZQOEGqHm375OZVQsh4Ca0wYINUKNUKMNZGUDhBoNOiuDntNDYN3L8FAJNUKNUKMNZGUDhBoNOiuDpre0DG9pzn4YDLXfvX5jvvu/dxwAhCBtgDawaBsYBLWXr9+Yv/z3O/Oz//qmAbbf//Htohs45zcG66bXQBt4fBsYBDXx0ARof/7rlzWwCdD+6j/uTMlvLoKdNvDB2UD828+lAHwQ1ETYGGxf/e+PFmgCurFQw3/T135CVP3oeymK0XI0fuytfiyu0/H+8b+VqfPr6xz7nsU/br8UaihXb22EH8Prg1d2I7byFnsYDDVJrMEmMMPnXKjpH3PbnSQmhgXgqesZOwjcDrAbo8uQML1Nz9gymf76A5E6nk7Hizh4pdp9d0i/joKaFCge2l8ooF3iqcWg0HuLDRG+L82lUIOHpuXsq5Px0w0m6nIZusR5AbLlkN4CSHtq8Lp0PPpv7CaRegtxKcPlDzvhoty26yioYQ0NHhqu4qnpLYf0fariGDZ4hvfT2OtLbz1tN4TsPwQEQPJTXL+nWf2gE71vWCxrvDFlI17JJXFabrTJH6xS1e/3bIsOR2nIW23gaMv1mz5Wsi94qh7riM/LANO5/aCB0oSNnFlwNFMfvNKsp/38g1S7BkOtDWixpyZAS1WkwzDgPXDU3v2STsMhfvaDv5qqdm1GiHrgaSEv4GnLlh1eFUBqcqrdX3U47rvlxIaUaiPGCIK+nOokpza50I42OVEOr+sGyBL7TwPGeWbBY5rKU9NranJ+AdbT4PWJDJIGz316Ggy1voIQPwZqgE28ntYNi/ZdWCEDroAB6kl5XnEa5JVrKn0tPoKUljtVLqDaOD8gAU+dX9/r+nlPiF3bBuKzAfRzH9QAIw0tue87eEXapPPKy4ObY4BpX5sXATUMdg+fTlhcA2phK3GtMCdXOs4qvlPO9HbcNh+29a481BQ8HciqLbP99LN5PJ+Wl/eE3JQ24KAVzvMEnK598ErcBg3POC71vAioiWB2rQnrXhYWASZuHcpN42LQ6MEfNzD2cADPxjSvY43K1R1kkToEQlJGPPWty9mEmqRPHo7SNv2EPgi13iWNuO/5fDng7dSzOjkK+gToZCqoYTPliwLUhav2DhHWdV0M1AAgvAF1gEgdnjLcU5OG+3I8IKrFdhxQ0rKeppVmPSmf3p2wjnhf/mZj9EEuaA+8T6RPHYIicQBuWGdUa3GEGqE2wz83C0zi/00TW0W4hpqET3XwCgAJzxDTVYyhvussUOsTivGXf8tSh9Thh2oDk0FN/xuHvl+zYoPXVD80BeFrbhtlJ/RytYHJoJargtguDn7awLpsgFCbYa2Cg2Rdg4T9ta7+ItQINS7C0waysgFCjQadlUHTq1qXV3WN/iLUCDVCjTaQlQ0QajTorAz6Gt/8LHNd3h+hRqgRarSBrGxgMNTefvvKvPvD66waz2/gdX0Ds7/YX0NsYBDU3v7Pt+b3f/+x+fbpPzbA9va778z7dzxlaoiymYaDkjZwfRsYBDXx0ARo3/zsb2pgE6B9+4tfmvLNG3pwnMLQBhZuA/FvNS8F7NTlXSoP8g+CmiSOwfbm5e8s0AR0Y6GGH3vj50b22rFTBoS91nVp8vS1s/Hj94nPduirn/HX9zbadOxAErYDSv3gvDvv0dyW47awwg/M47ouhRrKxQ/X5froB69osH3z139rPbdLoBbvYNHWGdcOB9S0PPHGlVPIkKpnbLnYMUTLiq2QxpbF9PPB6RzdY+NEvQOshNndYsv+La/PhVD2B6+Ih6aBlivULDwm9oAuhRo8NA20cwYH86wLZtJf8NA00HQ/wutpiw9lND01l7cZjvKzPngFa2gCMv2R6efTp0/Nxx9/bN6+fVu7h2L0tWtwY+CGqWlqX7FqT7SWPdKwCWRcFsK1LHIfy4NnpNfbdNv0asdbVwcPgrkfOaWJ+4DP3aC1Gza2HBMH4GEaJ1O4V+9emZu9nP4kh6Ps7LTu1bsX9qCUePrZBTUX57bSjmWA57fag1fagAZPTWAGoP3444/2vs1QAY0Aro3bSbZtB9hqI8eQT4POAQ4AQp0eNvdu/QB5U14O4oI80U63CmJSvoacBycPguGLgiu+KIiBAjvHNfbU8Iytt63dlu70p1FQuz2GdS6bP5wVAKhJeagv5Sm6uKYniDyAsVwXefAKvDUoO3UFRGLA2Clf9MJAp9X3KDeVx3agPSWquQ9aDD+bNtpZNl5P0xCz6RXk0vCsQ9HLGtWTkj3VRp8/cUAL4mK54udUuR7I8WleiXp0fn2v6+d9t7d1iX7OhZqGjIaQtY/qlCYNFYAFssZbaetnXR4AVauvp/xUHtQr7YVcsx+8ch2oOUikBlMKDLbDEgMTCouvcbkY7IDu40OtDYr1rcwb7VCwtTpQz3EbdV7E4ZSrlE5dmvZ+0OXxfnq4OYAELynWcQyI+FnSawjp/C5typNyU1fABVd4f7q8VH2oo738/pcbXXKj/Pg6+F864oxtzxdBrW366dfOEoeZVHk8gMqTOcihKFG4yHsqwrRVy49BjTIkzp49gHotHAJo3LkErqyLPLWe9moZce/qDrJIuEBIPFAH3xBXlzOhOx4Es6opsyzY73Z1sIlHk3r7mYKMhhDsydqPfXOagJpMPXnwynv/skArLb5PQQRpAKOwvhVA1JbPDWZMNVV6CyOEb4yGFuqTa6pchPEgGOhP6TWaRmtd8n56L03rVE/LxHPS/zumDz4JLwrC/6SNhRoOWNH1yz3C4/J0/Q/qxdFYTw1Ahmc4+8ErQzy1WEl8vu5AoH6p3w/JBiabfuJfOuTNJ+7lbeiHpMy1tTV4w/DG3HVt7aC8hLa2gcmghn/pkML1va6M9zQ+2gBt4No2MBnUri0oy+dgoA3QBobYAKF2xX+YHNIBTMOBShuY1gYINUKN6560gaxsYPNn/3Bj+KEOaAO0gVxsgFAj1PmlRhvIygYINRp0Vgadi7fBdpzvORNqhBqhRhvIygYINRp0VgZND+d8DycX3RFqV4baR796ZV6bn8zzX/1mMfBYoky5DCi2Y36ozga1j569NF+Z8PfV8fJB/9Gz35rnfwplursfzGfPLi/7XGO9FkBSbR2qw2vJdLaOIlswdy8X8wVwbpuYbz64zQI1AA2D0A3QfvhgICNfbDh98XH6azw/lgyunuABXgNUfW3pix+i34+OP9jvHt2nEvb6i98SbFeeRQzpnzWmmQdqMiX70yvz85EeVN8g6ot/jA56LBlcPQFq0rbP7sykMOhrS198n77jL7e+9Iyfz/tZk+7ngVo13dDfzlppMHZMJOVbOw4zCSh2DbKff/GTMSZ4gwIATHPisrWXkIpzXlEoC8///PS/a1NqkfHv/kXW1FTaeKrViPvJPP/CeS/Sfi1LXUcy1W6HWiy3bjvklWm5S9ess5E/0ndbfCNctU/LL/fWS4vK1Wm0nDa9XZ90ugx9XS1jVOW4foblDNW7W7b46lgvS8vC+/UAdRaoWQOtph16sNlwO+jDYA3GKwMQxpdeI0M8TNpe1foMPBk9mPygrhbyUYYAFwM0BsuwweZk1GlT5bnpFwZqNagqmV3eoAs9sJycIU6n7a2nBof2OrUudN24j+P76kU+XHU/IExfte4kXD+jbm0/Or5WTvVFovuxrnesxQYI6vy8Xw/QpK9mgxoMxX+zYiB72NXQZD0WGHK7h9cHvWoAq7eRzrjrdcmTDIC2QRcPHv0cy1iLk7ZFnolO76CgQGUhHp6hM7kiX5A8pEvJjfQW1g2oqbyqTp1H1437OL6vXuTDNZUecXLVuouf47ptvPeCQ3tseK/eu+1GyuBnPTqYHWraGO2ASxggDCplyIhz5XQbJzwJE0MtAg3KbBt0YwabTpsqz7XJDcLxUKsP3i65a/U8OtRa5Iy8csiPq9adhOnnLltAHPq5X+/ddgN5eF0H2GaBmjVONS3Ugxng0d7YZ3eYnnUbH4xZ59WGiOmn9Q4rkHXX5zw7lCdpn4sHZ6EQBqper4tlqA9EV15jGlSTJZTrygrPui3dcT31XAtqbdO8li8NaY/TXb2NAiHrKY/Qs5Qlun5e/WuQ7gf0cbveu+1K6533ywfbLFALxhwmTwAHjPN1iDI6zk9XEwMFhqyyGnxb2xcDHh7OiP2LAjt4Qi5dn4MS4sKai5dDpqp3P9ReBvi4c18U1Nb36gMeg6oLalaHfirWlL0J2lBHXK5uS+ptdRwPgKBWveYF2eOr9aRCBv8CR9L58iM9o691X0l6288oq/HFiQi5hr5sKyuWk8/LB5r00WxQo4Gsw0DYT+yntdkAocZFYC6C0waysgFCjQadlUGvzaugvNN7woQaoUao0QaysgFCjQadlUHT85ne81mbTgk1Qo1Qow1kZQM8TYonCWV1khCPm5v2uLk16pNQI9QINdpAVjZAqNGgszLoNXoWlHla75JQI9QINdpAVjZAqNGgszJoej3Tej1r1OdFUHvy5ImRz2M0vDwVZrM9mPuyTNbXFz9UxrI8mWJTmFNZmvL+YLabrTncp+scWubc6Vyb1t+OufXI+tcBzFmhVpb35rDdmE1xSoJKG1EftPriT8XGbA/3/fVcGWoiR9ze+8O2AexUmNbHmHtCbR2DcUyfMm17n84LNfGEtluzrTyjro7qg1Zf/DlQ65Ln3LhYTg/2yCMcIi/yFqduT5JQax8A5/Yj8y1Xp7NCTbwR8Z5kAPcOzAunn0MgIYaqp5/XMNx4Sov6CqUDB6v+6SKhttyBdQ3bYZnD+nsU1LCG1ncdonw9cGPvRfK7wb4xm436qDW1vvhYBg01l3drDofCl4+pKSAT1tSq9TU7LU3nScmL8mI5YhDZthcnY6eb1TTcgc/Va8u2a3tBD/IF0Gh/pZs4XORItTeeAsdy8nnYAKKelqen+aCmPC8/6KoFeQxM7b0JlPCioC8+ZWhNqIW1Le09ubL1iwINta48wbOKwRXLowEmcllI2am4exEC0Ek+W1YRXpDYOLzIqNYkoSfoJQYqwgEy3d5YNj4vb5CyT8b1ySioxcqFxxaHD3nWkJH0+jnpuWkIqnvUlcqDuEb58Lo8ROWFhYNSN9RicFV5RB7tUVb3MVwgj4WK9ax0veFe6wJ5LAh9HQCte9HioZbQi+R3bUrLjvJ5HTdwqK/l6msWqHnPwQ9STK2qwZoYnBpa+h7GlQpDnFw1KLoG+dlQU1NjXW/q3tehvDPIWJwC3CTMeVXhza17JtRSemXYckHzmH1zEdQ+//xz8/333/f+m0TcIAug6I0nQGenYtaTCi8PMJ1rm37G8XF98nxVqEXyuvoceFKyQJ6iKGr/ZmL1UhSmUICMYe08thaoRXKITg96TS3hmbbJx3ACYq02cBHUvvzyS/PJJ5/Yj9yLElJhsXIEMFjf0XE63IEPHly1QB8Pdu/pNeN1uXJ/TahJ+fCoMA3FlDCWA89on04HsGvdeGBjSisgVF8Iflpa6aYuB+An/1DM6Sd0z2vewL4IagK0r7/+2n6ePn1qf13w7NkzHybxNKC8DYj9y/5dmg1MBjUATIMOYUtrNOXhQKQN5GsDF0EtNdVMhdGA8jUg9i37dmk2cBHUltYYysMBRhugDRBq3HqI6560gaxsgFCjQWdl0PTU6KkRaoQaoUYbyMoGCDUadFYGTU+NnhqhRqgRarSBrGyAUKNBZ2XQ9NToqXVC7e7uzvBDHdAGaANLsYEhX1qdUBtSANPwm5E2QBtYkg38P7TTJVFke6EaAAAAAElFTkSuQmCC");

},
330020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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