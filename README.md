Reverse Proxy & WebSocket Chat Demo
📝 Giới thiệu
Dự án này là một demo về cách thiết lập Reverse Proxy bằng Nginx và WebSocket Server bằng Node.js, bao gồm:

Cấu hình Reverse Proxy để điều hướng các domain local.
WebSocket Server để hỗ trợ giao tiếp thời gian thực.
Một ứng dụng chat đơn giản với tính năng hiển thị trạng thái người dùng đang nhập (typing indicator).
📌 Chuẩn bị trước
Trước khi bắt đầu, cần thêm hai domain local vào file hosts:

http://project1.local/
http://project2.local/
🚀 Công nghệ sử dụng
Nginx – Reverse Proxy
Node.js – WebSocket Server với socket.io
Docker – Chạy môi trường phát triển độc lập
🔧 Cấu trúc dự án
perl
Copy code
reverse-proxy-websocket-demo/
│── docker/
│   ├── nginx/               # Cấu hình Nginx Reverse Proxy
│   ├── websocket/           # WebSocket Server bằng Node.js
│── src/                     # Mã nguồn ứng dụng chat
│── docker-compose.yml        # Cấu hình Docker
│── README.md                 # Tài liệu hướng dẫn
📦 Cài đặt & Chạy dự án
sh
Copy code
# Clone repo
git clone https://github.com/your-username/reverse-proxy-websocket-demo.git
cd reverse-proxy-websocket-demo

# Chạy bằng Docker
docker-compose up -d
Sau khi chạy thành công, truy cập vào:

http://project1.local/
http://project2.local/
✨ Tính năng chính
✅ Cấu hình Reverse Proxy với Nginx
✅ Hỗ trợ WebSocket với Node.js và socket.io
✅ Ứng dụng chat đơn giản giữa hai dự án
✅ Hiển thị trạng thái người dùng đang nhập (typing indicator)