document.addEventListener('DOMContentLoaded', function () {
    var continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function () {
            var form = document.querySelector('[ref="customerForm"]');
            if (form && form.checkValidity()) {
                document.getElementById('step1').style.display = 'none';
                document.getElementById('step2').style.display = 'block';
            } else {
                form.reportValidity();
            }
        });
    } else {
        console.error("Không tìm thấy nút continueBtn");
    }
});
