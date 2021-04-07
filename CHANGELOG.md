# CHANGELOG

## 05/04/2021

- Setup `HttpClient` bằng package `apisauce` 
  - Tạo structure cho `/api` folder, dựng mẫu trước `CartApi` với fake api addCart
- Setup redux toolkit cho project
  - Setup cho phần số lượng sản phẩm trong giỏ hàng ở `Header` component
  - Setup fake tăng số lượng sản phẩm trong giỏ hàng ở `AddLinkScreen`
  - Setup `TestScreen` để tiến hành test

## 04/04/2021

- Hỗ trợ override default theme của reactnativeelement trong `theme` config
- Setup lại vị trí các stack trong project
  - Bổ sung khái niệm modal screen cho `AddLinkView`
  - Đổi define `VIEW_NAME` thành `SCREEN_NAME` cho đúng ý nghĩa hơn
  - Đổi tên toàn bộ khái niệm `View` thành `Screen`

## 03/04/2021

- Xử lý giao diện `AddLinkView` 
- Thử nghiệm navigate từ 1 screen -> tab -> screen
  - Mọi thứ đều ổn, tuy nhiên lưu ý nếu từ Tab A -> Screen -> Tab C nó sẽ lướt qua Tab A,B rồi mới tới Tab C => có thể sẽ gây ra vấn đề về pref (VD: lướt qua tab nào load dữ liệu tab đó)
- Setup splash screen
  - Setup cho expo chỉ dựa vào file `app.json`
  - Setup cho bare app thì sử dụng `expo-splash-screen` package
- Xoá `WelcomeView` 
- Thay đổi name của bare app
- Thay đổi icon của bare app bằng `react-native-make` 
- Setup cache assets

## 02/04/2021

- Setup `StatusBar` cho màu trắng hiển thị phù hợp với nền header đỏ
- Setup navigation
- Setup customize header

## 31/03/2021

- Setup `"react-native-elements": "^3.3.2"`
  - Hiện tại expo chỉ hỗ trợ `"react-native-safe-area-context": "3.1.9"`, cài mới sẽ khác version này gây ra lỗi 
- Setup `StoreManager` 
  - Sử dụng `react-native-storage` là wrapper cho `@react-native-async-storage/async-storage `
- Setup `I18nLoader`
- Setup `loader`
- Setup alias import with `@`
