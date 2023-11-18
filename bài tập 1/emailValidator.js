function isValidEmail(email) {
    var emailPattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

    if (emailPattern.test(email)) {
        console.log(email + " là địa chỉ email hợp lệ");
        return true;
    } else {
        console.log(email + " là địa chỉ email không hợp lệ");
        return false;
    }
}
isValidEmail("a@gmail.com");
isValidEmail("ab@gmail.com");
isValidEmail("abc@gmail.com");
isValidEmail("12_3@gmail.com");
isValidEmail("@gmail.com");
isValidEmail("12 ahf4@gmail.com");