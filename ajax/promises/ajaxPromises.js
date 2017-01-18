const ajax = function (conf) {
    return new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200)
                    resolve(conf.parse ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText);
                else
                    reject(xmlhttp.status, xmlhttp.statusText);
            }
        };
        let sent = null;
        if (conf.data) {
            const data = [];
            for (let i in conf.data)
                data.push(i + '=' + conf.data[i]);

            conf.type === 'GET' ? conf.url += '?' + data.join('&') : sent = data.join('&');
        }
        xmlhttp.open(conf.type, conf.url, conf.async === undefined || conf.async);
        if (sent) xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(sent);
    });
}
