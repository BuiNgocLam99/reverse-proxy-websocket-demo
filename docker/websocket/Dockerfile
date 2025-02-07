FROM node:18

WORKDIR /app

# Sao chép package.json vào container
COPY docker/websocket/package.json .  

# Cài đặt dependencies
RUN npm install  

# Sao chép toàn bộ mã nguồn sau khi đã cài dependencies
COPY docker/websocket/ .  

CMD ["node", "server.js"]
