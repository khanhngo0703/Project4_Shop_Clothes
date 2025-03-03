// Sự kiện cuộn để điều khiển vị trí của booking-bar
window.addEventListener('scroll', function () {
    var bookingBar = document.getElementById('booking-bar');
    var footer = document.querySelector('footer');  // Giả sử FooterComponents là thẻ <footer>

    if (bookingBar && footer) {
        var footerRect = footer.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        // Kiểm tra nếu footer đang xuất hiện trong vùng nhìn thấy
        if (footerRect.top < windowHeight) {
            // Đẩy thanh vé lên nằm trên footer
            bookingBar.classList.remove('fixed');
            bookingBar.style.position = 'absolute';
            bookingBar.style.bottom = (windowHeight - footerRect.top) + 'px';
        } else {
            // Giữ thanh vé ở vị trí cố định khi footer chưa xuất hiện
            bookingBar.classList.add('fixed');
            bookingBar.style.position = 'fixed';
            bookingBar.style.bottom = '0';
        }
    }
});

// Sự kiện nhấn nút để hiển thị/ẩn booking-section
// document.getElementById('toggle-button').addEventListener('click', function () {
//     var bookingSection = document.getElementById('booking-section');

//     if (bookingSection) {
//         // Toggle class active để hiển thị/ẩn khối booking-movie
//         bookingSection.classList.toggle('active');

//         // Kiểm tra class active để thay đổi visibility thay vì display
//         if (bookingSection.classList.contains('active')) {
//             bookingSection.style.display = 'block';
//         } else {
//             bookingSection.style.display = 'none';
//         }
//     }
// });
// Lấy tất cả các phần tử có class 'toggle-button'
var toggleButtons = document.querySelectorAll('.toggle-button');

// Lặp qua tất cả các nút và thêm sự kiện click
toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log('Button clicked: ' + this.textContent);  // Kiểm tra sự kiện click
        var bookingSection = document.getElementById('booking-section');

        if (bookingSection) {
            // Toggle class active để hiển thị/ẩn khối booking-movie
            bookingSection.classList.toggle('active');

            // Kiểm tra class active để thay đổi display
            if (bookingSection.classList.contains('active')) {
                bookingSection.style.display = 'block';
            } else {
                bookingSection.style.display = 'none';
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log('Button clicked: ' + this.textContent);
            var bookingSection = document.getElementById('booking-section');

            if (bookingSection) {
                bookingSection.classList.toggle('active');

                if (bookingSection.classList.contains('active')) {
                    bookingSection.style.display = 'block';
                } else {
                    bookingSection.style.display = 'none';
                }
            }
        });
    });
});


