# Faqs

1. Nếu xác định không cần support web thì có cần setup Storage cho web không ?
  - Trong StoreManager có setup để switch sang localStorage

## Header của app giaonhan247 v1

Anh cho em hỏi 1 chút về phần header của anh tí nha

1. Phần header hiện tại là anh off header trên tất cả screen của reactnavigation rồi viết component riêng để làm header phải không ạ? Hay là anh chỉ customize lại header gốc của reactnavigation
-> Theo cách em nghĩ thì chắc là anh off header của reactnavigation rồi viết component header riêng

2. Nếu phần header của anh là 1 component riêng biệt không phải customize từ reactnavigation thì cho em hỏi thêm là anh sử dụng cách nào để xử lý phần header này nhỉ?
  - 2.1 Sử dụng cách chèn 1 `Header` component lên đầu `NavigationContainer`, rồi tuỳ page cần hiển thị Header hay không mà quyết định cho ẩn/hiện ? - https://prnt.sc/111pjoc
    -> Có vẻ cái này là sai vì thấy làm cách này không có hiệu ứng của Header khi chuyển trang
  - 2.2 Mỗi screen sẽ nhét component Header lại 1 lần ? 
    -> Có vẻ là hướng này, cách này thì sẽ tiện để quyết định cái gì sẽ hiện theo view


