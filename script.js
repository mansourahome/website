// إظهار رسالة التعويض
function showThankYou() {
    const thankYou = document.getElementById('thankYouMessage');
    const button = document.getElementById('registerBtn');

    thankYou.classList.remove('d-none');
    button.style.display = "none";
}

// تفعيل النبض في الزر
window.onload = function () {
    const button = document.getElementById('registerBtn');
    if (button) {
        button.classList.add('pulsing');
        button.addEventListener("click", showThankYou);
    }

    // ظهور تدريجي للأقسام
    const fadeSections = document.querySelectorAll('.fade');
    fadeSections.forEach(sec => sec.classList.add('visible'));
};
