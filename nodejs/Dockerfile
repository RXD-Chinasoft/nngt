# 指定我们的基础镜像是node，版本是v8.0.0 ====node:8.0.0
# Create app directory =====hub.c.163.com/nce2/nodejs:0.12.2
FROM node:8.0.0
# 指定制作我们的镜像的联系人信息（镜像创建者）
# MAINTAINER JASON


# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下 ================v1
# ADD . /app1/
# cd到app文件夹下
# WORKDIR /app1


# Create app directory ================v2
RUN mkdir -p /home/Service
WORKDIR /home/Service

# Bundle app source
COPY . /home/Service

# 安装项目依赖包
RUN npm install
# RUN npm rebuild node-sass --force

# 配置环境变量
# ENV HOST 0.0.0.0
ENV PORT 8800

# 容器对外暴露的端口号
EXPOSE 8800

# 容器启动时执行的命令，类似npm run start
CMD ["npm", "start"]