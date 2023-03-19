# nginx 이미지 사용하기
FROM nginx

# root에 react-test 폴더를 생성한다
RUN mkdir /app

# work dir 고정
WORKDIR /app

# word dir안에 build 폴더 생성
RUN mkdir ./build

# host pc에 build 폴더를 workdir 안에 build 폴더로 복사
ADD ./build ./build

#nginx의 default.conf 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
