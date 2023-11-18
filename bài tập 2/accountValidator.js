function isValidAccount(account) {
    var accountPattern = /^[_a-z0-9]{6,}$/;

    if (accountPattern.test(account)) {
        console.log(account + " là tên tài khoản hợp lệ");
        return true;
    } else {
        console.log(account + " là tên tài khoản không hợp lệ");
        return false;
    }
}
isValidAccount("ssdjiwi_123");
isValidAccount("_thuu123");
isValidAccount("a43_43 aaa");
isValidAccount("honnn@123");
isValidAccount("123vippro.com");