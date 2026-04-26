"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["206101"], {
979244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_game_service_api_gameservice_rest_gameservice_convertid_gameservice_convertid_md_687_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-game-service-api-gameservice-rest-gameservice-convertid-gameservice-convertid-md-687.json
var site_docs_ref_game_service_api_gameservice_rest_gameservice_convertid_gameservice_convertid_md_687_namespaceObject = JSON.parse('{"id":"game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid","title":"转换ID","description":"功能介绍","source":"@site/docs-ref/game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid.md","sourceDirName":"game-service-api/gameservice-rest/gameservice-convertid","slug":"/game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"转换ID","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-convertid","kit":"应用服务","last_updated":"2026-04-22","slug":"gameservice-convertid"},"sidebar":"ref","previous":{"title":"获取玩家标识","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-rest/gameservice-getplayerinfo/gameservice-getplayerinfo"},"next":{"title":"批量转换teamPlayerId","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-rest/gameservice-teamplayerid/gameservice-teamplayerid"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/game-service-api/gameservice-rest/gameservice-convertid/gameservice-convertid.md


const frontMatter = {
	title: '转换ID',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-convertid',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'gameservice-convertid'
};
const contentTitle = '转换ID';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "场景描述",
  "id": "场景描述",
  "level": 2
}, {
  "value": "接口原型",
  "id": "接口原型",
  "level": 2
}, {
  "value": "请求参数",
  "id": "请求参数",
  "level": 2
}, {
  "value": "请求示例",
  "id": "请求示例",
  "level": 2
}, {
  "value": "响应参数",
  "id": "响应参数",
  "level": 2
}, {
  "value": "响应示例",
  "id": "响应示例",
  "level": 2
}, {
  "value": "调用示例",
  "id": "调用示例",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "转换id",
        children: "转换ID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该接口，传入Access Token、appId、gamePlayerId到华为服务器上获取HarmonyOS系统下玩家的playerId、openId、unionId明细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Access Token、appId、gamePlayerId信息到华为服务器上查询HarmonyOS系统下玩家的playerId、openId、unionId明细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口原型",
      children: "接口原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "承载协议"
            })
          }), "：HTTPS POST"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向"
            })
          }), "：开发者服务器->华为游戏服务器"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL"
            })
          }), "：<", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://jos-open-api.cloud.huawei.com/gameservice/api/gbClientApi&gt;"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(44979)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请使用TLS 1.2协议或以上版本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "请求：Content-Type: application/x-www-form-urlencoded（表单方式）"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "响应：Content-Type: application/json"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求参数",
      children: "请求参数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定传入“external.hms.gs.player.transfer.convertId”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessToken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏调用华为账号的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token",
              children: "获取用户级凭证"
            }), "接口获取到的Access Token。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS 5.0及以上游戏的APP ID，获取方法请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gamePlayerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HarmonyOS 5.0及以上游戏的玩家标识，通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerunionlogin",
              children: "unionLogin"
            }), "接口返回。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /gameservice/api/gbClientApi HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: PostmanRuntime/7.24.0\nAccept: */*\nHost: jos-open-api.cloud.huawei.com\nAccept-Encoding: gzip, deflate, br\nConnection: keep-alive\nContent-Length: 717\n// 所有请求参数值均需要urlencode编码后再进行拼接\nmethod=external.hms.gs.player.transfer.convertId&accessToken=******&appId=xxxxxxx&gamePlayerId=xxxxxxx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应参数",
      children: "响应参数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rtnCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务端结果说明。  0：获取成功  -1：获取失败  2：accessToken无效  3001：参数错误  3101：应用ID与鉴权应用不一致"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "playerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统下，华为游戏服务器给华为账号封装处理后的对外开放的游戏玩家标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统下，由华为账号和应用唯一标识组合加密起来的玩家标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS系统下，由华为账号和开发者账号组合加密起来的玩家标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errMsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常场景下返回错误码的描述。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nDate: Tue, 19 May 2023 06:28:02 GMT\nContent-Type: application/json; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nContent-Encoding: gzip\nServer: elb\n{\n    \"playerId\": \"13423***9864303\",\n    \"openId\": \"43JIOdok743***980sd9453\",\n    \"unionId\": \"MDFiaNicx***JHIicHAlnRD\",\n    \"rtnCode\": 0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Java\npackage okhttp.com.post;\nimport com.alibaba.fastjson.JSONObject;\nimport okhttp3.*;\nimport java.io.IOException;\n\npublic class ConvertIdTest {\n    private static Integer RETURN_CODE_SUCCEED = 0;\n\n    /**\n     * 接口本地调测时使用\n     */\n    public static void main(String[] args) {\n        String method = \"external.hms.gs.player.transfer.convertId\"; // 固定传入\n        String accessToken = \"xxxxx\"; // 请使用游戏客户端调用账号获取到的Access Token\n        String appId = \"xxxx\"; // HarmonyOS 5.0及以上游戏的APP ID\n        String gamePlayerId = \"xxxxx\"; // 通过Access Token到华为服务器上获取到的玩家的gamePlayerId\n        convertIdService(method, accessToken,appId, gamePlayerId);\n    }\n\n    private static void convertIdService(String method, String accessToken, String appId, String gamePlayerId) {\n        OkHttpClient client = new OkHttpClient().newBuilder().build();\n        RequestBody mFormBody = new FormBody.Builder().add(\"method\", method)\n            .add(\"accessToken\", accessToken)\n            .add(\"appId\", appId)\n            .add(\"gamePlayerId\", gamePlayerId)\n            .build();\n        Request request = new Request.Builder().url(\"https://jos-open-api.cloud.huawei.com/gameservice/api/gbClientApi\")\n            .post(mFormBody)\n            .build();\n        try {\n            Response response = client.newCall(request).execute();\n            if (response.isSuccessful()) {\n                JSONObject object = JSONObject.parseObject(response.body().string());\n                if (RETURN_CODE_SUCCEED.equals(object.get(\"rtnCode\"))) {\n                    System.out.println(\"playerId: \" + object.get(\"playerId\"));\n                    System.out.println(\"openId: \" + object.get(\"openId\"));\n                    System.out.println(\"unionId: \" + object.get(\"unionId\"));\n                } else {\n                    System.out.println(\"rtnCode: \" + object.get(\"rtnCode\"));\n                    System.out.println(\"rtnMsg: \" + object.get(\"errMsg\"));\n                }\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C#\nusing System;\nusing System.IO;\nusing System.Net;\nusing System.Text;\nusing System.Web;\nnamespace cXdemo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // 固定传入“external.hms.gs.player.transfer.convertId”\n            string method = \"external.hms.gs.player.transfer.convertId\";\n            // 取自当前玩家的Player对象中获取到的Access Token\n            string accessToken = \"xxxxx\";\n        // HarmonyOS 5.0及以上游戏的APP ID\n        string appId = \"xxxx\";\n        // 通过Access Token到华为服务器上获取到的玩家的gamePlayerId\n        string gamePlayerId = \"xxxxx\";\n            // 请求接口\n            requestgameInfo(method, accessToken, appId, gamePlayerId);\n        }\n        static void requestgameInfo(string method, string accessToken, string appId, string gamePlayerId)\n        {\n            var requestUrl = \"https://jos-open-api.cloud.huawei.com/gameservice/api/gbClientApi\";\n            HttpWebRequest request = WebRequest.Create(requestUrl) as HttpWebRequest;\n            request.Method = \"post\";\n            request.ContentType = \"application/x-www-form-urlencoded\";\n            StringBuilder data = new StringBuilder();\n            data.Append(\"method=\" + HttpUtility.UrlEncode(method));\n            data.Append(\"&accessToken=\" + HttpUtility.UrlEncode(accessToken));\n            data.Append(\"&appId=\" + HttpUtility.UrlEncode(appId));\n            data.Append(\"&gamePlayerId=\" + HttpUtility.UrlEncode(gamePlayerId));\n            byte[] byteData = Encoding.UTF8.GetBytes(data.ToString());\n            request.ContentLength = byteData.Length;\n            Stream postStream = request.GetRequestStream();\n            postStream.Write(byteData, 0, byteData.Length);\n            postStream.Close();\n            WebResponse response = request.GetResponse();\n            StreamReader reader = new StreamReader(response.GetResponseStream(), Encoding.UTF8);\n            string strJson = reader.ReadToEnd();\n            Console.WriteLine(strJson);\n            reader.Close();\n            response.Close();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PHP\nclass convert_id\n{\n    /**\n     * 根据AccessToken获取玩家信息\n     *\n     * @param string $method 固定传入“external.hms.gs.player.transfer.convertId”\n     * @param string $accessToken 请使用客户端Player对象中的AccessToken\n     * @param string $appId HarmonyOS 5.0及以上游戏的APP ID\n     * @param string $gamePlayerId 通过Access Token到华为服务器上获取到的玩家的gamePlayerId\n     */\n    public function call_https(string $method, string $accessToken, string $appId, string $gamePlayerId): void\n    {\n        $data = array(\"method\" => $method, \"accessToken\" => $accessToken, \"appId\" => $appId, \"gamePlayerId\" => $gamePlayerId);\n        $curl = curl_init();\n        curl_setopt_array($curl, array(\n            CURLOPT_URL => 'https://jos-open-api.cloud.huawei.com/gameservice/api/gbClientApi',\n            CURLOPT_RETURNTRANSFER => true,\n            CURLOPT_ENCODING => '',\n            CURLOPT_MAXREDIRS => 10,\n            CURLOPT_TIMEOUT => 0,\n            CURLOPT_FOLLOWLOCATION => true,\n            CURLOPT_CUSTOMREQUEST => 'POST',\n            CURLOPT_SSL_VERIFYHOST => false,\n            CURLOPT_SSL_VERIFYPEER => false,\n            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n            CURLOPT_POSTFIELDS => http_build_query($data),\n            CURLOPT_HTTPHEADER => array(\n                'Content-Type: application/x-www-form-urlencoded'\n            ),\n        ));\n        $response = curl_exec($curl);\n        if (curl_error($curl)) {\n            throw new Exception(curl_error($curl));\n        }\n        curl_close($curl);\n        $result = json_decode($response, true);\n        var_dump($result);\n    }\n}\n$convert_id = new convert_id();\n$method = \"external.hms.gs.player.transfer.convertId\"; // 固定传入\n$accessToken = \"xxxxx\"; // 请使用客户端Player对象中的AccessToken\n$appId = \"xxxxx\"; // 游戏APP Id\n$gamePlayerId = \"xxxxx\"; // 通过Access Token到华为服务器上获取到的玩家的gamePlayerId\n$convert_id->call_https($method, $accessToken, $appId, $gamePlayerId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Python\nfrom typing import Any\nimport requests\nimport urllib.parse\nclass ConvertIdSolution:\n    def convert_id(self, method, accessToken, appId, gamePlayerId):\n        url = \"https://jos-open-api.cloud.huawei.com/gameservice/api/gbClientApi\"\n        params: dict[str, Any] = {\n            'method': method,\n            'accessToken': accessToken,\n            'appId': appId,\n            'gamePlayerId': gamePlayerId\n        }\n        encodedParams = urllib.parse.urlencode(params)\n        headers = {\n            'Content-Type': 'application/x-www-form-urlencoded'\n        }\n        response = requests.post(url, headers=headers, data=encodedParams)\n        print(response.text)\nif __name__ == \"__main__\":\n    # 固定传入“external.hms.gs.player.transfer.convertId”\n    input_method = 'external.hms.gs.player.transfer.convertId'\n    # 请使用客户端Player对象中的AccessToken\n    input_accessToken = 'xxx'\n    # HarmonyOS 5.0及以上系统下游戏的APP ID\n    input_appId = 'xxx'\n    # 通过Access Token到华为服务器上获取到的玩家的gamePlayerId\n    input_gamePlayerId = 'xxx'\n    function = ConvertIdSolution()\n    function.convert_id(input_method, input_accessToken, input_appId, input_gamePlayerId)\n"
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
44979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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