let text_name = document.querySelectorAll(".text_name")
let translate_btn = document.querySelector(".translate_btn")
let my_title = document.querySelector(".my-title")
let mobile_des = document.querySelector(".mobile_des")
let btn = document.querySelector(".mobile_btn")
let fy = true
translate_btn.onclick = function () {
    if (fy) {
        my_title.innerHTML = 'Verify Success'
        this.classList.add('translate_btn_active')
        this.innerHTML = '中 文'
        mobile_des.innerHTML = 'Valid document. Please click here for more information.'
        btn.innerHTML = 'View Detail'
        for (let i = 0; i < text_name.length; i++) {
            switch (i) {
                case 0:
                    text_name[i].innerHTML = 'Student No/Job No:'
                    text_name[i].style.letterSpacing = '0px'
                    break
                case 1:
                    text_name[i].innerHTML = 'Real Name:'
                    text_name[i].style.letterSpacing = '0px'
                    break
                case 2:
                    text_name[i].innerHTML = 'Document Title:'
                    text_name[i].style.letterSpacing = '0px'
                    break
                case 3:
                    text_name[i].innerHTML = 'Print Time:'
                    text_name[i].style.letterSpacing = '0px'
                    break
                case 4:
                    text_name[i].innerHTML = 'Terminal:'
                    text_name[i].style.letterSpacing = '0px'
                    break
                case 5:
                    text_name[i].innerHTML = 'Address:'
                    text_name[i].style.letterSpacing = '0px'
                    break
            }
        }
    } else {
        my_title.innerHTML = '验证通过'
        this.innerText = 'English'
        this.classList.remove('translate_btn_active')
        mobile_des.innerHTML = '此证明材料真实有效，如果需要查看详细内容，请点击 "查看详情'
        btn.innerHTML = '查看详情'
        for (let i = 0; i < text_name.length; i++) {
            switch (i) {
                case 0:
                    text_name[i].innerHTML = '学号/工号:'
                    text_name[i].style.letterSpacing = '5px'
                    break
                case 1:
                    text_name[i].innerHTML = '姓名:'
                    text_name[i].style.letterSpacing = '5px'
                    break
                case 2:
                    text_name[i].innerHTML = '证明名称:'
                    text_name[i].style.letterSpacing = '5px'
                    break
                case 3:
                    text_name[i].innerHTML = '打印时间:'
                    text_name[i].style.letterSpacing = '5px'
                    break
                case 4:
                    text_name[i].innerHTML = '打印终端:'
                    text_name[i].style.letterSpacing = '5px'
                    break
                case 5:
                    text_name[i].innerHTML = '终端地址:'
                    text_name[i].style.letterSpacing = '5px'
                    break
            }
        }
    }

    fy = !fy
}
