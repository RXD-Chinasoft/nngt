const createXMLHttpRequest = () => {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        if (xhr.overrideMimeType)
            xhr.overrideMimeType('text/xml');
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
}

export const Post = (url, body, fnSucceed, fnFail, fnLoading) => {
    console.log("on...")
    let xhr = createXMLHttpRequest();
    console.log("end 1")
    if (xhr != null) {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            // readyState 五种状态
            // 0 － （未初始化）调用了open()方法，未调用send()方法
            // 1 － （载入）send()方法,正在发送请求
            // 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
            // 3 － （交互）正在解析响应内容
            // 4 － （完成）响应内容解析完成
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (fnSucceed)
                        fnSucceed(xhr.responseText);
                }
                else {
                    if (fnFail)
                        fnFail("HTTP请求错误！错误码：" + xhr.status);
                }
            }
            else {
                if (fnLoading)
                    fnLoading();
            }
        }
        xhr.send(JSON.stringify(body));
    }
}

