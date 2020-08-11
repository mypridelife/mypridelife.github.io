# byte 转换

```js
export function hexStringToBytes(hexString) {
  function charToByte(c) {
    return '0123456789ABCDEF'.indexOf(c)
  }
  hexString = hexString.toUpperCase()
  var hexArr = hexString.split('')
  var length = hexArr.length / 2
  var bytes = new Array()
  for (var i = 0; i < length; i++) {
    var pos = i * 2
    var b = (charToByte(hexArr[pos]) << 4) | charToByte(hexArr[pos + 1])
    var t = new Int8Array(1)
    t[0] = b
    bytes.splice(i, 0, t[0])
  }
  return bytes
}
export function stringToByte(str) {
  var bytes = new Array()
  var len, c
  len = str.length
  for (var i = 0; i < len; i++) {
    c = str.charCodeAt(i)
    if (c >= 0x010000 && c <= 0x10ffff) {
      bytes.push(((c >> 18) & 0x07) | 0xf0)
      bytes.push(((c >> 12) & 0x3f) | 0x80)
      bytes.push(((c >> 6) & 0x3f) | 0x80)
      bytes.push((c & 0x3f) | 0x80)
    } else if (c >= 0x000800 && c <= 0x00ffff) {
      bytes.push(((c >> 12) & 0x0f) | 0xe0)
      bytes.push(((c >> 6) & 0x3f) | 0x80)
      bytes.push((c & 0x3f) | 0x80)
    } else if (c >= 0x000080 && c <= 0x0007ff) {
      bytes.push(((c >> 6) & 0x1f) | 0xc0)
      bytes.push((c & 0x3f) | 0x80)
    } else {
      bytes.push(c & 0xff)
    }
  }
  return bytes
}

//arrays成员类型可以是 ArrayBuffer 或 TypeArray
export function mergeArrayBuffer(...arrays) {
  let totalLen = 0
  for (let i = 0; i < arrays.length; i++) {
    arrays[i] = new Uint8Array(arrays[i]) //全部转成Uint8Array
    totalLen += arrays[i].length
  }

  let res = new Uint8Array(totalLen)

  let offset = 0
  for (let arr of arrays) {
    res.set(arr, offset)
    offset += arr.length
  }
  console.log(res)

  return res.buffer
}
```
