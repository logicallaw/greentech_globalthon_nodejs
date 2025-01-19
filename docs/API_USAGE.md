# API 사용 가이드
이 문서는 우리 서버의 API 사용 방법에 대해 다룹니다.

## API 명세서

|기능                |method     |url                    |설명                                       |
|-------------------|:---------:|:----------------------|:-----------------------------------------|
|실시간 산불 감지       |POST       |/detect/send_image     |실시간으로 이미지 전송을 통한 산불을 초기에 감지합니다.|

### **Detect API**
산불 감지를 제공하는 API입니다.
1. **Endpoint: POST /detect/send_image**
    - Request
    ```bash
    {
        "image": "base64-string"
    }
    ```
    - Response (200 OK)
    ```bash
    {
        "probability": "double type probability value"
    }
    ```