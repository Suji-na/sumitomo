function print_out() {
   /* print() が使えるブラウザかどうかを判断 */
   if (navigator.userAgent.match(/msie (\d)/i))
      v = (eval(RegExp.$1) >= 5) ? 1 : 0;
   else if (self.innerWidth)
      v = (eval(navigator.appVersion.charAt(0)) >= 4) ? 1 : 0;
   else v = 0;

   /* print() が使えるブラウザなら印刷を実行 */
   if (v) self.print();
   else alert("お使いのブラウザではこの機能は利用できません");
}
