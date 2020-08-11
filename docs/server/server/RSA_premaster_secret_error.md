# RSA premaster secret error: SunTls12RsaPremasterSecret KeyGenerator not available

**IDE：Eclipse**

**框架：springboot**

maven 构建项目出错，报错信息：RSA premaster secret error: SunTls12RsaPremasterSecret

KeyGenerator not available

**解决：**

Window > Preferences > Java > Installed JREs > jdk8> Edit

![Edit.png](../../assets/images/springboot1.png)

点击 Restore Default

![Edit JRE.png](../../assets/images/springboot2.png)
重新 install 即可解决问题。
