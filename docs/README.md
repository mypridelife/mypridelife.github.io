---
home: true
heroText: null
tagline: null
bgImage: /home_bg.png
bgImageStyle: { height: "550px" }
# features:
#   - title:
#     details: 年轻时，我会向众生索要他们能力范围之外的：友谊长存，热情不灭。
#   - title:
#     details: 如今，我明白只能要求对方能力范围之内的：作伴就好，不用说话。
#   - title:
#     details: 而他们的情感、友谊和操守，在我眼中仍完全是一种奇迹，是恩惠的完全表现。
# footer: BSD Licensed | Copyright © 2020-present gyh
---

<script>
export default {
  mounted () {
    var element = document.querySelector(".footer-wrapper")
    if (element) {
        element.parentNode.removeChild(element)
    }
  }
}
</script>
