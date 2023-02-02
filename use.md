# The Usage

## Use your container on Servers?

Well, this is a tricky one. Depending on the server you are using, it could either be very easy or very hard, maybe even impossible if your server does not support a container. Fortunately, [CHTC], the one server that we all love, supports containers, and is extremely easy to have your jobs running in a container. All you have to do is to change your universe from "vanilla" to "docker" and specify which image the CHTC server should pull, and you could keep the rest unchanged!
```
universe = docker
docker_image = your-username/your-image-name:tag
```

## Use your container on another local machine?
//TODO

[Homepage](index.md)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [CHTC]: <https://chtc.cs.wisc.edu/>
   [DockerHub website]: <https://hub.docker.com/>
   [Windows link]: <https://docs.docker.com/desktop/install/windows-install/>
   [Mac link]: <https://docs.docker.com/desktop/install/mac-install/>
   [Linux link]: <https://docs.docker.com/desktop/install/linux-install/>
   [Engine link]: <https://docs.docker.com/engine/install/centos/>
   [Dockerfile reference]: <https://docs.docker.com/engine/reference/builder/>
