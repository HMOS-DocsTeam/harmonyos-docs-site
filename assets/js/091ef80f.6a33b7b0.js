"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["172433"], {
623382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_common_problem_of_application_common_problem_of_application_md_091_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-common-problem-of-application-common-problem-of-application-md-091.json
var site_docs_development_fundamentals_common_problem_of_application_common_problem_of_application_md_091_namespaceObject = JSON.parse('{"id":"development-fundamentals/common-problem-of-application/common-problem-of-application","title":"应用程序包常见问题","description":"如何获取签名信息中的指纹信息","source":"@site/docs/development-fundamentals/common-problem-of-application/common-problem-of-application.md","sourceDirName":"development-fundamentals/common-problem-of-application","slug":"/development-fundamentals/common-problem-of-application/","permalink":"/harmonyos-docs-site/development-fundamentals/common-problem-of-application/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"应用程序包常见问题","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/common-problem-of-application","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"集成态HSP","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/integrated-hsp/"},"next":{"title":"应用程序包术语","permalink":"/harmonyos-docs-site/development-fundamentals/application-package-glossary/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/common-problem-of-application/common-problem-of-application.md


const frontMatter = {
	title: '应用程序包常见问题',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/common-problem-of-application',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '应用程序包常见问题';

const assets = {

};



const toc = [{
  "value": "如何获取签名信息中的指纹信息",
  "id": "如何获取签名信息中的指纹信息",
  "level": 2
}, {
  "value": "什么是appIdentifier",
  "id": "什么是appidentifier",
  "level": 2
}, {
  "value": "如何获取应用信息中的appIdentifier",
  "id": "如何获取应用信息中的appidentifier",
  "level": 2
}, {
  "value": "什么是appId",
  "id": "什么是appid",
  "level": 2
}, {
  "value": "如何获取应用信息中的appId",
  "id": "如何获取应用信息中的appid",
  "level": 2
}, {
  "value": "应用的uid",
  "id": "应用的uid",
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
        id: "应用程序包常见问题",
        children: "应用程序包常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取签名信息中的指纹信息",
      children: "如何获取签名信息中的指纹信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过调用接口获取。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
        children: "bundleManager.getBundleInfoForSelf"
      }), "获取自身的BundleInfo应用包信息，应用包信息中包含signatureInfo签名信息，签名信息中包含指纹信息，使用哈希算法SHA-256生成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { bundleManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION |\n  bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO;\ntry {\n  bundleManager.getBundleInfoForSelf(bundleFlags).then((bundleInfo:bundleManager.BundleInfo) => {\n    console.info('testTag', 'getBundleInfoForSelf successfully. fingerprint: ', bundleInfo.signatureInfo.fingerprint);\n  }).catch((err: BusinessError) => {\n    console.error('testTag', 'getBundleInfoForSelf failed. Cause: ', err.message);\n  });\n} catch (err) {\n  let message = (err as BusinessError).message;\n  console.error('testTag', 'getBundleInfoForSelf failed: %{public}s', message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/bm-tool",
          children: "bm工具"
        }), "获取指纹信息，使用哈希算法SHA-256生成。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell\n# 需将com.example.myapplication替换为实际应用的包名\nbm dump -n com.example.myapplication | grep fingerprint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186734)/* ["default"] */.A) + "",
        width: "910",
        height: "93"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过.cer证书文件获取，可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/50130",
          children: "APP备案FAQ"
        }), "中HarmonyOS应用/元服务如何获取公钥和签名信息，指纹信息使用哈希算法SHA-1生成。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过keytool工具获取，详情参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/appgallerykit-preparation-game-0000001055356911#section147011294331",
          children: "生成签名证书指纹"
        }), "，使用哈希算法SHA-256生成。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "什么是appidentifier",
      children: "什么是appIdentifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["appIdentifier是", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
        children: "Profile文件"
      }), "中的一个字段，为应用的唯一标识，在应用签名时生成，其中："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过DevEco Studio工具", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section18815157237",
          children: "自动签名"
        }), "生成，此时的appIdentifier字段是随机生成的，在不同的设备上签名、或者重新签名均会导致appIdentifier字段不一致。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["采用手动签名，并通过AppGallery Connect平台申请证书，此时申请", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
          children: "调试Profile"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
          children: "发布Profile"
        }), "中的appIdentifier字段是固定的，该字段来源于AppGallery Connect创建应用时生成的", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section16423184171915",
          children: "APP ID"
        }), "，由云端统一分配。此时的appIdentifier字段在应用全生命周期中不会发生变化，包括版本升级、证书变更、开发者公私钥变更、应用转移等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因此，在跨设备调试、跨应用交互调试、或者多用户共同开发且需要共享密钥等要求appIdentifier不变的场景下，推荐使用手动签名，具体场景请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section54361623194519",
        children: "使用场景说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取应用信息中的appidentifier",
      children: "如何获取应用信息中的appIdentifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
          children: "bundleManager.getBundleInfoForSelf"
        }), "获取自身的BundleInfo应用包信息，应用包信息中包含signatureInfo签名信息，签名信息中包含appIdentifier信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { bundleManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION |\n  bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO;\ntry {\n  bundleManager.getBundleInfoForSelf(bundleFlags).then((bundleInfo:bundleManager.BundleInfo) => {\n    console.info('testTag', 'getBundleInfoForSelf successfully. appIdentifier:', bundleInfo.signatureInfo.appIdentifier);\n  }).catch((err: BusinessError) => {\n    console.error('testTag', 'getBundleInfoForSelf failed. Cause:', err.message);\n  });\n} catch (err) {\n  let message = (err as BusinessError).message;\n  console.error('testTag', 'getBundleInfoForSelf failed:', message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/bm-tool",
          children: "bm工具"
        }), "获取。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell\n# 需将com.example.myapplication替换为实际应用的包名\nbm dump -n com.example.myapplication | grep appIdentifier\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155239)/* ["default"] */.A) + "",
        width: "594",
        height: "92"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "什么是appid",
      children: "什么是appId"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["appId是应用的唯一标识，由包名、下划线和证书公钥的Base64编码组成。由于appId和签名信息相关，如果签名证书的公钥更换，appId也会跟随变化，所以应用的唯一标识推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BB%80%E4%B9%88%E6%98%AFappidentifier",
        children: "appIdentifier"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取应用信息中的appid",
      children: "如何获取应用信息中的appId"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagergetbundleinfoforself",
          children: "bundleManager.getBundleInfoForSelf"
        }), "获取自身的BundleInfo应用包信息，应用包信息中包含signatureInfo签名信息，签名信息中包含appId信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { bundleManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION |\n  bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO;\ntry {\n  bundleManager.getBundleInfoForSelf(bundleFlags).then((bundleInfo:bundleManager.BundleInfo) => {\n    console.info('testTag', 'getBundleInfoForSelf successfully. appId:', bundleInfo.signatureInfo.appId);\n  }).catch((err: BusinessError) => {\n    console.error('testTag', 'getBundleInfoForSelf failed. Cause:', err.message);\n  });\n} catch (err) {\n  let message = (err as BusinessError).message;\n  console.error('testTag', 'getBundleInfoForSelf failed:', message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/bm-tool",
          children: "bm工具"
        }), "获取。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell\n# 需将ohos.app.hap.myapplication替换为实际应用的包名\nbm dump -n ohos.app.hap.myapplication |grep '\"appId\":'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(819765)/* ["default"] */.A) + "",
        width: "1114",
        height: "120"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用的uid",
      children: "应用的uid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["uid是系统中用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/access-token-overview#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1",
        children: "应用沙箱"
      }), "隔离的唯一标识符，它分配给每个应用进程，确保应用在运行时相互隔离（如文件系统，内存空间等）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["uid的生成算法为：uid = userId * 200000 + (bundleId % 200000)。其中%表示取模运算，计算bundleId除以200000的余数。userId表示应用需要安装的用户编号，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-osaccount/js-apis-osaccount#getosaccountlocalid9",
        children: "getOsAccountLocalId接口"
      }), "获取。bundleId表示应用的唯一编号，取值范围为10000到65535的整数，仅系统内部使用，可以通过uid和userId反算获取，暂无其他获取途径。"]
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
155239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
819765(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957482-47cebef8ecfa753e5300b7dbdba174d4.png");

},
186734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA44AAABdCAIAAABl16/fAAAgAElEQVR4Ae2dvZLkOnKF5wFg3Nk34DuUM86uZPAJREm2ylTcoCMpQrWyFDQ2NlQm3XJp0qZLn2+zL6CaPnvP5E0QSVb1z1R3nzY6UASQSHxIgofg35c//Pb37du3pD8REAEREAEREAEREAEReBgCX35Tqn+QVH2YQZEjIiACIiACIiACIiAC3wn8Xap+/fpVUlURIQIiIAIiIAIiIAIi8FAEJFUfajjkjAiIgAiIgAiIgAiIwA8Ckqo/WCglAiIgAiIgAiIgAiLwUAQkVR9qOOSMCIiACIiACIiACIjADwKSqj9YKCUCIiACIiACIiACIvBQBCRVH2o45IwIiIAIiIAIiIAIiMAPAq8oVQ+HQ9d1dV3/aO3BUo/v4YMBkzsiIAIiIAIiIAIi8KYEXlGqVlU1z/PlcnnTDt3S2Et52HXdsiz7W26a5nQ67S9fKjkMw852b/Ww1OLq9v1usHrTNMtvf8MwcHtKKciyxZQWAREQAREQARH4DARukKqHw6Hv+3meoTEul8vmiikU0uFwyFEuy2I1CgRK0zR5yVfdEni4v91bhSAYPr+z+zXirR7u73tKab8bNIv17K7rpmmyYZBSCrJYXQkREAEREAEREIFPQmCvVD0cDhBYl8ul67q+76/reefzOcZ0OByWZen7Pi/2IFI18DD3ubTlViF4Op0ul0tVVSWDdvuq0EeB/RrxVg+tA5vp/W7kpoanv3w7FLBTsavFtFEEREAEREAEROADE9grVSFH2rYli0BCsUxKCQuxuSx7EKkaeGh7EadfWwiO49i2bc5wv0Z8bQ933oeQY5RUzZloiwiIgAiIgAiIAAnskqp7lh6bppnnOV9nRd2u69gkErFU7bpuHMff7mZcpmli9bZtp2lCVt/3FHDYMk1TXdeoizQqBgZLHmL7siy449Zer6+qCuvKWFqmEMRtDFDn8zy3bTs//UHW27swnbYbhgF6FEvXwzDw5orT6YT+zvPc9z2388o7WgFP5pY8BI2maS6XC4nlo0PaNlFiyNOY3PmUUmm8YFlS1RJWWgREQAREQAREwBHYJVWhseIngdq2XZZl9SGqYRis1oQHgVQ9nU7Lsozj2P32x9Xc4/G4LN+V61Vdnc/neZ7HcYTBruugmfqnv/P5DCMppcAg6q56yJsm+76HWKRaRUPDMKBR5PKRoGEY4CdulliWBVqQBvPVUGsQIpj9godN0/BG4XEcj8cjpSrccLWsQfSO4hijifMKqk8SRnP5/4Chbcu5EYwXyZeu8gcqNndPW0RABERABERABD4kgRukKoVaCURd11zjtGWgjZwYCqQqFvy4QGhNjeNoVS/0MUtidZNrhFSEgUEYX/XQtltV1VXqYc0YaSuwnFSFA1CosEyXYJOrsGwCrvKeCgg+5jJxOBywYIzWXS10M6UUeJhSymlsjuxqLXpVciOlFI9XfEOqpCoJKyECIiACIiACn5bADVLV6a2bkE1Pf7ZKIFWPxyMuJV9XFs/nM1YQUZe3BNgElRYkIH+yucAgy+QeVlV1Op0gmKDGIBBz9YkVXK6q3i1V6YzTslVVtW0LkWpvA4BXea3Aw5TSPM9WZ7N6nAgYltxIKdlhYtoOUKBHg6zYVeWKgAiIgAiIgAh8GAK7pCru2ly9uL8TBJY/rUZxUhVXilkA4oxX3nk1HPcYNL//41JuSapiobFt29wg/c89HMeRV8lh+adIVehg3PbgHq4qacTXkKoBw5IbkKqXy+X3w9VwvLSqyvBTQgREQAREQAREYJXALqnK2yLdRXxnsXQDAIq5xTzcQEnVAkHGS/nWss2CfGQtWyylFEhVW9IatNuth1B7XNC1l9Rz4f5SNwDQGbuqOgxD3/cU8SzDQeEW1go8jC/l09RmwjIMpGo8XnkXbLvOrM1SWgREQAREQARE4JMQ2CtV67rmRXk87HS5XOyDVsFjVUAJIcXbMe1jOu5ZnOsF9PP5jFb4ND2MQEHiIjgK4P7RpmnsY1Vd17EhSNiSQTvM1kOovWEYmqY5Ho/j0980TegyVBSemrIPLdnlzPxe1bZt4TOqIw0N6mQZRad1L08HtUoeppQ4lH3fE3Ju3G0JBiVwozReNA7JyyfD7LlKkMXqSoiACIiACIiACHxsAnulKj4jxAvoeLjeLrKWXlZFfPiKqf0cAD5WhLdB2ddOQbkuT394UZRVMPZFS/y+ALQdquC/XYaMDZY85FuWpmlq2xZPI+E5+qqq+BMiGNtjqQpJZ53kywECtUf38kRQq+QhjNR1fblccO6BWwty425LwDBwA/fvkhXHi8atn9M02VELslhdCREQAREQAREQgY9N4Aap+nwQkDt2vfP5Nl/WwuN7+LL9lTUREAEREAEREAEReGQCbypV8WJRu0T6aGge38NHIyZ/REAEREAEREAEROD1CLypVH29bsiyCIiACIiACIiACIjAxyMgqfrxxlQ9EgEREAEREAEREIEPQkBS9YMMpLohAiIgAiIgAiIgAh+PgKTqxxtT9UgEfgIB3Odt3+HwE5xQkyIgAiIgAh+OwM1SFa8a/XAc1CEREIFnEbBvanuWIVUWAREQAREQAUPgdaWqe+Omafdlkjtflf8yjcnKyxGArMErZvG52pez/TMt7exX0zT28xmv6vGbtfXepWrTNOM4IibdR6TfjOFrRMK7dv41gMimCIjAuyNwg1TlG/uXZcGH3Td7K6m6iehzFsDFYkTUR5KqO/uFjy+8yLVyfKcteFfxC7YVx+q7lqp1XeNbJPiih/24SUrpzRjGhO/LvdX5zYi6zw3VEgEREIG7CXyXql+f/r59+xZYwXdTx3GcpmkYhvnpr6qqoEr8hfe44s5craruBPWwxYanv4d1727H4n6dTqfL5bK5++xpHbtAoHpfsK3Yn3ctVfHtj9Irn9+MYUz4vtxbnd+MqPvcUC0REAERuJvAXqmKb2NWVYV7VauqChZy6I1WVYlCiVUCsaRbrfIuNr5Zvx5HWLxrqToMwziO7yK0XtvJx4mo1+6p7IuACLwXAnulKlcdbnqsClK1bVtchBrHEcs/OKr1fY/VWRSY53lT/lZVBU+WZcGlumsCrJ044M+4LRyirIfH4/E5g+cMDsNQWqpxrTRNg/OBZVmmaeq6jgWOx+M0TbhA2fc9VuPifrHuaqJtWxhcloUGU0rjONpRgD/w/3A44Da+eZ7t7R+xG47GOI4OL4fJ+Vny0BXjz8ANXBCwl3TRl/P5nFIq9QvXBMZxXI2N+/oFJ4GRcWu7sBoAJQ8hKWiNCRiM21qNqLzL+6M3pYQWbdyya6sJuy/3fY/uoCT6Mk1TXde4fxRp5JZiY3NQVt3AxtU4DBi6tiyooF8ppZLzQZddW3YnCmrd4XwcUQE9ZYmACIjAqxLYK1Ux8UFZOrUR+Aepel2uuMqC8/kMwXo4HGBtGIbj8Yg7XzFLbh7nYHAYhq7rhmGA3oID7mDDn3FbMDhNEz20Wi3oWinLeghVvWe1hnihv3F4hroCIohXSBnc3Bn3q+ReSskaxKDQw8PhMM8z7J9Op2VZ+PQP78Ls+x7Y7VlHaSg38XKYrMOBh7aYTcc02ClUQdcowbunP9cv3r6yGhv39YsMUT33f57nPABYy3mIewphClIPHYFZ1srbsnhtRLHL2L/2Ry9axBBs7sLsNRxb3Zexd+M8qu/78/m8LAui1DrvohcGV8eLjboEGOKeaexiYIhz5oChdd6BsllujgqcD7oc9CuodYfzcUQ5dPopAiIgAm9GYK9UTSnVdY1JEyuae+60Q3mulfJgxkRKaVmWruvsllLnq6palsU+hbNfquIImrcFD3mrH1bgqM9WPYGrXMRiAk24LuMwtmrHbrTrl9hOl5xB/rTE8n5Z4y6NG465EV3m0i+Opljwds9BswoG4iru3Vpa7sYm3lWpGntIN2wipgGtwzi8XC5XUWirI237Rd3GgbCxcV+/2KJdQcTGIABYK6XkPEwpwRSdtIWRzttiCKGA/WnTKaWd0Qs7dghyN9yWeF9mvyh84RgW/q9ilNZs9KIMUdjxYnmXABzuwkzQCMpvMiSouF9xYKOVvMtxv0q12NP9ztvOOgK0poQIiIAIvD2BG6QqnOM6AZfiAqd5gGGZXM3kW1jYJfJjISQIijnRw5+2Vt5WyUPXtP3J5QoswPA/JndnMD9OWFNMu2U/boeUt+ocBpunP3TnJrmPwjwkM2GPTDjuTtNkz0aqqjqdTqCKPtrF3fhMwHWHB2PIQds7lKRXNmE9tAaRjkfZXvEHgetaHSqW+kWpatsicDfKHAIWZvhxi03kUREEQOAhJV0AJ2/Lne8xovIu53VtL1zaDoHLyn/mhe2+HPTLhgTTq7tePii5G9xy63i5ACCouF902CY4dnYg6Fg+KK5fpVq0QN+4peQ8CmwapB0lREAEROBtCNwjVa9zK44rXIor+ermRLwRxq2h5vKxZC0+DLiDzTiOL6KlSs6Utrsu58eJ1YqBUikJC0tjP0Mc53CzaWP+rCrF4DqpittYcXkanXoRvG7UAIdvQzMONtbDnOEmDa6kYtmYN7GU+hVLBDfKTj2gbi7B6XYeFUEABB6mlHAzA+UOm2Aib6sUUXmX87o0myfsEOS5bkteeL9ULUXv5qA4H+zP1ThkgZyDa4sF4n7FgQ0j+VC6tlywlWrd4TyqbEYULSshAiIgAm9DYK9UpVDAY1U4ruSzqnPaTbK8ymkn9P0yC2tj9qq0uwGAC732MlzcFjxkR6Bj7LKf69HmT9dlHsPiiiSTF4NBXrzmz7hftFPXNccOGyF93EaWBwGML1GjLcq7F8TrcO3xEGVcvzZpoF9t2+LeBhgJ+kXdthobcHs1C5ZX+4UsLhnyZ0qpFACxh7wBwz40Zs2utsUQsq4iwJzbO6MXduwQOB/yn/G+TLdJmBaC6N0cFBrJEy8lVeN+Bc4HXY779eJSFeMYRFROT1tEQARE4FUJ7JWq0zRdheD5fMZ7VfE0+qZnmGRxiRyycs8NjoFZGLxcLvljVbhszSzcqHA6newRNJfFMIiu2Qe/Ah/iLBhkmZ0H+7qu8cwZn4/hFWporNJjVaUr73AAt+tRcWIjgMzzzLYwKHgcnst79rEqHIBxlnI8Hsenv2mano8XmpjP8WCdPvCw1K94lFELoTtNE9kG/aJUXY2NzbBZ7VfbttgXUB1pqLFSAMQe4u5VPOzIBW8wDNoqRRS7DFwUT/wZJ+wQxCWRCwjcYXnamT/cw/M0SvPV6N0clMCrVakaMERbNGh381K/AufjLpf6Fde6z/kgothZJURABETgjQnslarn85lfHcTrijav/vOxjOXpDw+Jo3v2qJbLxwBBVVVYf8KjXfYIwax5npumwfy+LEvcForxDTLTNHHtMHAjyIJBFrAecuNqoq5rXKQGLvvsyOqrheJ+oYmmafBQuWvRvhgLz1mjAFZ9qAzsUp9F1LYtRyF2YxMvRw2v6OIqWsnDUr9iN1ALY7Esi10xKvWLus0WYGzc1y/UwvjyP5fwSwFgHbDkOaaN+SLosizYMeO2ViOKXabl/dFLHcbu0EgpYYceOhsv8OIwERGjAqZKsbE5KCVP0PH8ho2AIbJo0IIq9StwPu5yqV97apEhEhidwHk6ydmeEcXOKiECIiACb0xgr1SlWze9V5W1HjbhZu2H9fOdOvZoeHH1v3Tzg4McOB9kOSOf56c9W7ij1zj5uaMiqzzmoHzUfhG7EiIgAiLw2gQkVYf8ZeyvDf3z2H8o9YDbIfYv+wXOB1mfZ3BdT58jVauqmueZ95o7yzt/PuCgfNR+7RwRFRMBERCBFyFws1R9kVYfx8gDHt4eB87zPXkEvE3T9H2PC5o3iaHA+SDr+dDeqQW8xM1drA/6wpspsdS9LAvvrwhqBVkPMigftV8BeWWJgAiIwKsSkFTVquorBtgjqIeu6/CsWPxlh5xC4HyQldvRllUCvNVymib7qd7Vwns2PsigfNR+7RkClREBERCB1yDw2aXqazCVTREQAREQAREQAREQgRchIKn6IhhlRAREQAREQAREQARE4OUJSKq+PFNZFAEREAEREAEREAEReBECkqrbGO17K/PX6d96B+R2e29Vomma9+v8W0FSOyIgAiIgAiIgAj+TgKRq4tMYeB7CPcJc1zU+zYW3lNu3x6eU8IkpV+Vnjuctbd/qPL6Oww8E2KZihrbkznTJ4OFwOJ1OeJw/f2c7vrXTtu0wDPM8871UfNLFvhEd1WODXdfhK0r4ejs/e1FVVd/3Nsu9qxVfq7p+f8H2F52yPuD7FyhTasuWH8fRRmBs8HQ6sfCyLMSFt0pZs8xKKeFrZIx5+o8uI2bwXQl2OchKKZXcwNewLEOHd7Wt0lDmnUIHp2kKshAwfAWB61dAA592Y0WGR9wWYK7GRskgv8tgx4thYze62CiR3/RwNQ7jWjYO8SExxkZpvPgtNNsFG6VXViVQQUSVsnL/GfPWeTqDqSOYHIIZIMgqBUDuHjzhh2AOh0MebHH0Bs7nzYFGvp1uBFkpJXJblsXFYUDDkndhU4peACyNcrDDBnNU4GHea4bN5vRlZzbuDtydGf/vVDxgIN7yv6TqhlTF91p5EHVjczqdLpeLDURX4JF/3ur8qpRHBzHpvODuVzIIH/BadTtrwI26rjFB4OupFGqohQ+Z8j9yA4PI4kdfod4w1tDK+CgonHHL7fz+sJ2J0Ck6YD+smrfFoxS+43U9duKzxvbrYoFBHD/olRUBmH/RL/hAUMjCV3xhHB/dxftB0TS+abwsy2YWBgUyjmmOWqnLQVsMMMewbdu8UxiXruuCrLitEg1+ghhd67oOs8T5fA7aAoGU0mpsHA4HSHMEFQ3y2Oa6jLgKYqMUALGH+aDM81xVVVzLxiE8d6PsnLe73moWWK2CKvWLAXZrzFvn6QzwgsbqbBPMAEFWqV8x3lJsxNEbOJ83hxHJt+/ZiTAimDTyOSqgYcm7sHnOKN80faWUAg9zIJwq8z2FM3ZgkLszpzJ7gOAUoUROQFJ1Q6oOw3DTyzhzxB9mC3bO1V0Lk84L7n4lg4fDAWLRai8QxsSNz+o65vDcbcTPwKB7Kf3pdOK7Pw+Hgz17wdxE+1iJPx6P7qu27BRLMoFlYP7EehKacD3FwQOjEBjEJMt1ZWvEZbHRlBKMc+Ec9gG8bVvb5enpD3WDLNeWdSPocmCwNJSuIX7V+XA4BFkppaCtgAbI8LgF8br6dVkcg4k0jo3coD222ZFC2vLk8CE2XK9Z0m23oHCZyE53jPm4lotDdBkelsaLc0XeKWwpgXKesF85/CDLNuqct1nB5BDMAEFWSmm1X65TblBKwRZHb+B83hx6nW9n9AZZkJU8OXFxGNBw5G3YuOaCobRZwQ4b7OaBh84NGxvB9BUYtLtzcDy1DSkNApKqXqq6yBie/txGRDCvethcSNu2bbFGMgwDD/C40IBafd+7SZyfesfaFVdqeQmmrmtIommaYNO1NY4jX6Ie1LrDebjK/jLBjnPScZ1CgaZpnGhjxVIiNphPjjzyrSrpVa9c03bKQxYvs+JnadqqqgqLuDSIAzyvK3E7O8UtTODqHgf9fD5fiSHXOXY4HLiwGhjEp7lIwxphR5qnP/oApWIPOc6ILRk0bbOcBetG0GXbkJ3cOcquAJQiFlCZxTON/NsEzGJhJqzzeB0vs9gXOwTMRWKzrdXYCAy67rvmLE9AYGzQW1RhydjDUszHtSw0yCxGb7DrBVm4/rssS74TlfoF3bYsy60x75x3hB291dx8BmCxPKsUAEH0ckxptpRY7QuHnrVKM0AwykFWPhuX4tnRcN5iQoCT941yaYdlx5lwTXO787AEikG+OmPTGu7QcEcHNh3HvzWidEpJUnVdquK+TNy2hQsKuDaE1RHst7wSaiMJgWivGnOVwmYNw4BL1ah7PB7ttTx7KGUr/dMf1ttgEwav1x2ul2IhbuZ5hodBrTucBw00B5ENGuw4skpKAvMOL8yxVpCIDeaTI47o0zQdj0feA8A1qj2TQj6huy0wwnVKKIO2bcdxHIaBcxY8geBDx7mihk7xImPXdcyqqgoh0XXd5XJBR8DHucEryBQxqwYRJ/TKGsH8y/ONeZ4JiqdJOHByps5HChdn8+3WvWtu4EbQZWfWtrVnKHHL2rIsq08NYl9bzXLOl2gAS8mCdT5vi6e+NjZig0HY2GFFu2QVkA88dAbzmEdd1y/rIQQHIyoYryAr2ImCfgVZQcxb5+0kbyk5LMw6HA7t2gxwx+RAmy5649iwtVz0Mit3PqDBWs4Nuz3PyptgHKLiKihL3oVNMJRBVmmHdc6vglr1MAC1OX2tGuSkXTpW5q5qCwhIqq5HAqZRHs6Z4Ck7quWzLXY/ShBe1Kiqyu3PVqqO48g7Xbg8wOVYtEKRhCYY9HQJBz8eQUu12OH9ztvOsjna2ZOo65qyaU/5zTIOJsTr+PSH2zqxqk3hjuUiqjoOEBvKDYIzzzrwk3ixcsATDPYOA43BQhlWgQXGkl0BwjISQgK3gdLDVccghQOD7vqUNVLX9TAMp9OpaRou/yPYSAnlMVMz8MgKSoVyhNt5DGNW4EbQ5cAgozoYSl6CJENr0F0ltFmuXyUawLJnR3BtlWIjNhiMsh1WdIRSOCbPXjsP0VYp5uNaCGw8H0M4wXgFWSVQmPS4ZOtOWYMuBzEf4GV/c85cw85ngCAr6BfbctEbx4at5aKXWbnzAQ3Wcm7Y7XlW3gTjMKBhybuwCYYyyCrtsM75HFRpMo9BnU6n1Rk76LLzRD/3E5BU3WBld7m8aEntsSQL5Ed9nB2ipJUvTLvpnj9pHLs6f2LiprBA03ktlqdv3OIMugKbBmnnDRL55IhjBiUj5iPQgOcE6zQivM0NVlWFAzm0I67cOZ5VVUHt8bo52uXa8zzPXE52eC0lLCpAL+KiJxfIc8fGp3VcnqtYO0y7Wu4ni1FcAhRV8uVy4bNKjCjUquvarvpbU3mWa9f+DLpMm7nBPUMJQcCrGbSG63F4SNluRDpvq0Qj35dza6ttlWIjNhiEjeUJHxgbLsv9ROEc1M6Ydwydh9hTcLoSjFeQVQLltKn76froftoxspODc94WYzowlc8ArJVnBf2ytSzeODZYK49eZgXOo4ylwVp5bARZeROMQ1vLTZWOvA0bZ9D+tOk8AM7n8+FwuG/6yseLziNhQe2ZvjYNOvv6GRCQVA3gfM96M6mKz6A35o+qC3O6E0mrSgWnlehSqRY7jAL8mRt0BVa1mq3+lmk3Ybk5i0LBStXYvdygKz9Nk13Osbk468AaHtbRrSy+Kh4UdlOztQBVxC04PmE51jmGQwjkb8kgFgnsM/7Q8VAPTdNwwd6BWr3ZizdA46EQ6FQGJ33mwZJZsRtBl2EzN7jzqhkuL3Bllx7yekWetdpWiQb6xTMQa9+mczdKsREbLI1yKeYvl0tMnk7mHjILidWYz2vlHlKpuDnE2g+yYlCrgR13OYj53HnrJNJuH8wL2BnA5dqsUr9sFYc3jg1UXI1e2sydD2iwlnOD21d3IteEnaNsxWva0sjJI2yCoQyySrfa75y+6Kf1MAC1OX2tGuRGJW4lIKm6QeylpGo+47gbAPBSmFVvMKeXpCq323M+HtSZm1vODxVu7nAFoJ/yw3xuOd/yBjcA4Jl06iRMtVB7riO5e/lR35bhUhMv5dtcdznMLqNyzRLTpcNrjbi5HkO5KlVxtMMolAyiupPLbGKe5/xuE7S1ejkYSKuqAkZ3Yy7E7mpW7Ab9AQfb5aCtPUOJXjASLOc8K2groAHy8b6Qt7UZG6sGS6OcBy1jIyZPILmHzApiPq/lPMSzKbjOEIxXkFUCFfQryIKIKcW8c54EbMLFqs1C2oWKLWCzSv3Ky9voDYItiF7azJ0PZgDWykc5yHJNMA5ZhQlLw5Fn2ARDGWS5eZgrL5vTF31DwnoYgHJdhmOrBwhr0LWln/sJSKpusFqVqm3b4lY57GxIQxS63c9Ox8jCexPdY1VQgbhfB9bw0sr8eSZ7+x0MXi908rGqZVnwdh77WJV9fAfnxHc4D0UyP/3hawhd19nFuYAjVOPmKlRggVkkz1vE2Dug5uv94CrmKTsKNIVEYBDPnwGyO4d+esLt+zscuq7DaxlwYMabaJzg4AO8MIVa/G/DBstF7gk521Oc3pBkYNB1006soOHaAijEYf5iQh4G8GEF5zzm4tWswA0479xAeAcGg6FEW8GKzmpW0FZAA+tYuFALGpfLxR6o8rbi2AgMBqMcxEZAPgAVxHxQy3mIKN28oFEayhjUZr9YYGfMO+cxmtgrg8mhNAPg2XDe/7N/cgjwBrERRG/gfDADBG4EWUEcBqAceRs2HEQk7FAGWcEOG4AKPAxAwfnV6Ssw6JzPf6ILOPrnuZ95i6TqxuivSlWEqVu1wtSMLBq10zEXKqB7bBZeCojdCWb7vufKqG3IrpKiLb7lio+Nw3Jcy+bytoHAefSoaRpMvqi+U6re8bIqAnSJVfJk4j60Q1nvUFubgUEshONMgKZQF2oSECDsrCZ2hXFawrP8VfLX6nx7Nj99hLZs+XEcrR5add7dWkojvJsWcYUDg2sLy8AY4uvdDnbGDNoKsixqtwoYdDkwGAwl2rrpwmU8KAENPDlhv1g2/v5DYrkb8LwUG4HBgEYQGwH5AFQQ80Et56GNnGC8SlmboGzXdoqYIOad80BqJ3MLmbe5l2aAq2+lrD39ysMGncXXqrjPMtjucz6gEYxykGURuTmqRCPf9WzYoC3+3z/KpY/tBaACDwNQwfQVG2SnVhOQqnaSXy32CTdKqv60QYcwfU7z2P2eY0F1RUAEREAEREAEHoEAzme4+PIILj2ID5KqP2cg8Gml1YeU9zskqbqflUqKgAiIgAiIwCMTKF1qeGSf38Y3SdW34fy9Fd48hPdc8Cudd3sgqdbm1M4AAAOwSURBVHo3OlUUAREQAREQgYciwLvFHsqrR3BGUvXtRgEnTLgDHa+membbkqrPBKjqIiACIiACIvAgBNqnvwdx5qHceEWp+re//e2huipnREAEREAEREAEREAE3hcBSdX3NV7yVgREQAREQAREQAQ+EYGbpeowDDsfT9Oq6ieKI3VVBERABERABERABF6BgKTqK0CVSREQAREQAREQAREQgZcgcINUde9X31xb1arqSwyQbIiACIiACIiACIjA5yWwV6riKxrjOE7TNAzD/PSHL/SU4EmqlshouwiIgAiIgAiIgAiIwB4Ce6UqPq1UVRXuVa2qyn0hMG9MUjVnoi0iIAIiIAIiIAIiIAL7CeyVqn3fL8tS17Ueq9oPVyVFQAREQAREQAREQASeQ2CvVG2aZlkWXPc/Ho97mtSq6h5KKiMCIiACIiACIiACIlAisFeqppSwpLo8/Z3P5/hG1ZSSpGoJuraLgAiIgAiIgAiIgAjsIfDl629/375921MB36hdlmUcx7i8pGrMR7kiIAIiIAIiIAIiIAIxgR9S9d/+83/josjFvarn8xm3rgZVJFUDOMoSAREQAREQAREQARHYJPBDqsarqrzcb6Vq/GpVSdVN+iogAiIgAiIgAiIgAiIQEPguVf/473/9r3/5+k+//kdQbpqm6xX/8/mM96riEaugvO5VjeEoVwREQAREQAREQAREYJPAl69f//TrX/77n79uSNXz+TyOI56pmuf5crnUdR1b16pqzEe5IiACIiACIiACIiACMYEvX/+x/evpX79uSVVa0XtViUIJERABERABERABERCBVyXw5U+//vnXf/j+FoD4BgA6IalKFEqIgAiIgAiIgAiIgAi8KoEvf/6f9o9P76vaKVX3e6MbAPazUkkREAEREAEREAEREIGcwJf/+/VPeLOqpGpOR1tEQAREQAREQAREQAR+IoG9L6v6iS6qaREQAREQAREQAREQgc9JQFL1c467ei0CIiACIiACIiAC74CApOo7GCS5KAIiIAIiIAIiIAKfk4Ck6uccd/VaBERABERABERABN4BAUnVdzBIclEEREAEREAEREAEPieBv0vVX3755du3b58TgXotAiIgAiIgAiIgAiLwmAQkVR9zXOSVCIiACIiACIiACIhAklRVEIiACIiACIiACIiACDwoAUnVBx0YuSUCIiACIiACIiACIiCpqhgQAREQAREQAREQARF4UAKSqg86MHJLBERABERABERABETg/wHjikaQYy0+/gAAAABJRU5ErkJggg==");

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