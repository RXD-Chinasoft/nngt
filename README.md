#规划
  ##一、nginx 微服务转发，负载均衡
  ##二、golang api接口
  ##三、nodejs 前端页面及其他

#nodejs
  ##一、根app构建（koa搭建）==》负责页面加载
   ####1、npm init
   ####2、npm install koa
   ####3、npm install koa-router
   ####4、npm install --save koa-views  npm install --save ejs
   ####5、路由\控制器\页面 npm install koa-bodyparser
   ####6、npm install --save-dev webpack ，extract-text-webpack-plugin，webpack-merge
   ####7、构建静态路径(src style output build) npm install --save koa-static
   ####8、react，css 构建相关npm install --save react npm install --save react-dom, babel， 其他见package.json
   ####9、npm install --save whatwg-fetch
   ####10、构建脚本，见package.json




#react
  ##npm install react-beautiful-dnd --save
  ##npm install react-burger-menu --save
  ##npm install react-router-dom --save

#chart
  ##npm install --save echarts-for-react
  ##npm install --save echarts

#utils
  ##npm install react-modal --save
  
#Nginx
  ##nodejs提供web，go提供api service；所以，分别做nodejs集群和go集群，ngix做代理
  ##nodejs集群需要大于2台的服务器，这里采用docker分别部署nodejs （port）见docker
  ##go集群需要大于2台的服务器，这里采用docker分别部署go （port）见docker
  ##install sudo apt-get install nginx;ps aux|grep nginx查看 Nginx 进程是否已经启动
  ##本项目是在nginx.conf中配置；sudo service nginx reload

#Docker
  ##win7、win8 等需要利用 docker toolbox 来安装，国内可以使用阿里云的镜像来下载，下载地址：http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/
  ##测试 docker run hello-world
   ####问题无法创建=====》docker-machine regenerate-certs default；docker-machine restart default；$ docker-machine env default --shell sh；eval "$(docker-machine env default --shell sh)"
  ##dockerfile--node
   ####本地推送，安装好docker环境，下载项目，在node根目录下docker build -t deploy:1.0 .或者将开发好的镜像直接打包保存到安装盘里面，到客户生产环境再将镜像包上传并加载到服务器的docker中即可。1.在开发环境打包，docker save <namespace>/<name:tag> <name>.tar。docker save lzqs/deploy:1.0 > deploy.tar；2.然后在服务器上加载上传的镜像包deploy.tar。docker load < deploy.tar；3.加载成功后，docker images即可看到加载的镜像，运行lzqs/deploy镜像，成功后，在外部访问服务器的9000端口， <服务器的IP>:9000。docker run -d -p 9000:8000 lzqs/deploy

   ####docker hub push；1.docker login，Username: XXX，Password: XXX。Login Succeeded；2.docker tag <name:tag> <namespace>/<name:tag>上传之前必须给镜像打上tag，namespace可以指定为你的dockerid。docker tag deploy:1.0 lzqs/deploy:1.0；3.docker push <namespace>/<name:tag>将镜像上传至docker的公共仓库。docker push lzqs/deploy:1.0；4.上传成功后，docker logout 退出，登录 https://hub.docker.com/ 查看上传的镜像。
   
   ####docker hub pull；通过docker pull <namespace>/<name:tag>下载我们的镜像。docker pull lzqs/deploy:1.0

  ##dockerfile--postgres
   ####docker pull postgres
   ####docker run --name pq -e POSTGRES_PASSWORD=password -p 54321:5432 -d postgres 启动pq，默认数据库是postgres，-d postgres是用postgres作为启动镜像在后台运行;-e POSTGRES_PASSWORD=password，设置环境变量，指定数据库的登录口令为password；-p 54321:5432，端口映射将容器的5432端口映射到外部机器的54321端口； --name，指定创建的容器的名字； 

  ##dockerfile--golang
   ####go get github.com/lib/pq 检验db
   