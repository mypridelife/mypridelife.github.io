# 使用 spark-md5 对文件进行加密

> 工具：[spark-md5](https://github.com/satazor/js-spark-md5)

md5 加密字符串

```js
var hexHash = SparkMD5.hash('mypridelife')
```

md5 加密文件代码

```js
    getMd5(file, callBack) {
      var tmp_md5
      var fileReader = new FileReader()
      var blobSlice =
        File.prototype.mozSlice ||
        File.prototype.webkitSlice ||
        File.prototype.slice
      var chunkSize = 2097152
      // read in chunks of 2MB
      var chunks = Math.ceil(file.size / chunkSize)
      var currentChunk = 0
      var spark = new SparkMD5()

      fileReader.onload = function(e) {
        spark.appendBinary(e.target.result) // append binary string
        currentChunk++

        if (currentChunk < chunks) {
          loadNext()
        } else {
          tmp_md5 = spark.end()
          callBack(tmp_md5)
        }
      }

      function loadNext() {
        var start = currentChunk * chunkSize
        var end = start + chunkSize >= file.size ? file.size : start + chunkSize

        fileReader.readAsBinaryString(blobSlice.call(file, start, end))
      }

      loadNext()
    }
```
