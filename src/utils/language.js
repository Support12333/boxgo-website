/**
 * @method 获取浏览器的语言信息
 * @returns {String}
 */
 export const getLanguage = () => {
  //语言判断
  let lang = 'en'
  let l = navigator.appName == 'Netscape' ? navigator.language : navigator.browserLanguage
  if (l.indexOf('th') > -1) {// 泰语
    lang = 'th'
  } else if (l.indexOf('en') > -1) {// 英语
    lang = 'en'
  }
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang')
  }
  return lang
}
