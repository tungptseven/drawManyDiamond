# Bài toán vẽ hình thoi liền nhau 

## Sử dụng

```
node draw.js
```
## Giải thích thuật toán 
1. Hàm vẽ drawManyDiamond() yêu cầu truyền vào 2 tham số: 
 - N là số hình thoi 
 - H là chiều cao hình thoi 
 - yêu cầu N,M > 1; M là số lẻ
 
2. Thuật toán dựa trên ý tưởng chính là chia đôi hình thoi theo chiều ngang và số dư 

Lấy ví dụ, nhập vào N = 3, H = 7:
![drawdiamond](https://cloud.githubusercontent.com/assets/22218222/25782364/c32814e8-3373-11e7-9a62-aaa870a9ea92.png)


- Khởi tạo biến 
  - h = Math.floor(H / 2) + 1
  - width = H - 1
  - length = N * H - 2

- Vòng lặp for() đầu tiên cho biến i chạy theo chiều cao của hình(từ 0 - 6)
    sau đó chia đôi việc vẽ hình theo chiều ngang 
    - Nửa trên từ 0 đến 3
    
    ![draw1](https://cloud.githubusercontent.com/assets/22218222/25782371/e2dce34a-3373-11e7-9898-ed9fcb78370e.png)

    - Nửa dưới từ 4 đến 6
    
    ![draw2](https://cloud.githubusercontent.com/assets/22218222/25782369/d689e070-3373-11e7-8e76-7b39e850a9a3.png)
- Vòng lặp thứ 2 được chạy trong điều kiện i từ 0 đến 3, tức là vẽ nửa trên của hình
    - Tạo biến j chạy theo chiều dài của hình(từ 0 - 18)
    - Tạo biến j2 có giá trị cố định bằng DƯ của j và chiều cao H - 1
    
    So sánh j2 với giá trị biểu thức (h - 1 - i) hoặc (h - 1 + i)
    - Bằng nhau: Vẽ 1 dấu *
    - Khác: để trống 
    
    ![draw3](https://cloud.githubusercontent.com/assets/22218222/25782378/1421385c-3374-11e7-82e2-dfdb1af64954.png)

    
    Ở vd trên, khi chạy hàng ngang i = 0, nếu tại vị trí j có j2 = 0 hoặc 3 thì vẽ *
    
    Tiếp tục hàng ngang i = 1, nếu tại vị trí j có j2 = 2 hoặc 4 thì vẽ * ...
    
- Vòng lặp thứ 3 đươc chạy trong điều kiện i từ 4 đến 6, tức là vẽ nửa dưới của hình
    - Các bước chạy lần lượt từng ô j với giá trị j2 như vòng for() số 2
    - Thay đổi việc so sánh j2 với giá trị biểu thức (i - h + 1) hoặc (h - (i - h) + 1)
    
    Ở vd trên, khi chạy hàng ngang i = 4, nếu tại vị trí j có j2 = 1 hoặc 5 thì vẽ * 
    
    Tiếp tục hàng ngang i = 5, nếu tại vị trí j có j2 = 2 hoặc 4 thì vẽ * ...
    
    




