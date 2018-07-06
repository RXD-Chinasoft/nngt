FROM golang:latest
# 指定制作我们的镜像的联系人信息（镜像创建者）
# MAINTAINER JASON

WORKDIR $GOPATH/src/nngt
ADD . $GOPATH/src/nngt

RUN go get github.com/lib/pq
ENV PORT 9000

RUN go build .
# 容器对外暴露的端口号
EXPOSE 9000

ENTRYPOINT ["./nngt"]