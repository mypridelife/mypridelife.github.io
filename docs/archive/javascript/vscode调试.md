---
title: vscode 调试
date: 2018-09-09
#sidebar: 'auto'
categories:
  - JavaScript
#tags:
#  - js
#keys:
#  - 'vue'
#publish: true
---

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Edge",
      "type": "edge",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/practice/react/react-tutorial/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```
