// document.querySelector('.container').addEventListener('mouseover', function () {
//     document.querySelector('.cinema-list').style.display = 'grid';
// });
// document.querySelector('.container').addEventListener('mouseout', function () {
//     document.querySelector('.cinema-list').style.display = 'none';
// });
// Di chuột vào để mở danh sách rạp
document.querySelector('.container').addEventListener('mouseover', function () {
    document.querySelector('.cinema-list').style.display = 'grid';  // Hiển thị dưới dạng lưới
});

// Di chuột ra để đóng danh sách rạp
document.querySelector('.container').addEventListener('mouseout', function () {
    document.querySelector('.cinema-list').style.display = 'none';  // Ẩn danh sách
});

