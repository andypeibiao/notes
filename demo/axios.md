```
var excel = document.getElementById("excelfile").files[0];
var zip = document.getElementById("zipfile").files[0];
if (!excel) {
    this.$notify.error({
        title: '错误',
        message: '请选择文件'
    });
    return;
}
var form = new FormData(); // FormData 对象
if (excel) {
    form.append("excelfile", excel); // 文件对象
}
if (zip) {
    form.append("zipfile", zip);
}
//其他参数
form.append("xxx", 'xxx');
axios.post('http://www.xxx.com', form, {
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data'}
}).then((res) => {//根据服务器返回进行处理
    if (res.data.status === 0) {
        this.importDialogVisible = false;
        document.getElementById('importForm').reset();
    } else {
        this.$notify({
            title: '错误',
            message: res.data.message,
            type: 'error'
        });
    }
}).catch((error) => {
    this.$notify({
        title: '错误',
        message: "导入失败，请重试",
        type: 'error'
    });
});

```