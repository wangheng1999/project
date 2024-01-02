let query_title = document.querySelector(".query-title")
let ipt = document.querySelector(".ipt")
let btn = document.querySelector(".btn")
let translate_btn = document.querySelector(".translate_btn")

let lang_text = 1
translate_btn.onclick = function () {
    if(lang_text == 1){
        this.classList.add('translate_btn_active')
        this.innerText = '中 文'
        lang_text = 2
        query_title.innerHTML = 'Document Verify'
        ipt.setAttribute('placeholder','Type in Serial Number')
        btn.innerHTML = 'Submit for query'
    }else {
        lang_text = 1
        this.classList.remove('translate_btn_active')
        this.innerText = 'English'
        query_title.innerHTML = '证明文件认证'
        ipt.setAttribute('placeholder','请输入打印流水号')
        btn.innerHTML = '开始查询'
    }
}
