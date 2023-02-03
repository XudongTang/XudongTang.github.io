
# Getting your first image

Now you finish all the setting up steps, it's time to get an actual image that you could play around with. All docker images have the following format: `username/iamge:tag`. `Username` is the DockerHub user that you want to pull from, `image` is the name of the image in the user's repository, and `tag` is similar to the version of the image. Let's experiment with a Ubuntu image that everyone likes. Open your terminal (for Windows users, it's the WSL terminal you just installed, not the CMD prompt), and type
```sh
docker pull ubuntu:22.04
```

Since Ubuntu is an official image, there is no username associated with it. After all the data transfer finished, type
```sh
docker image ls
```

you should see this
```
REPOSITORY             TAG       IMAGE ID       CREATED       SIZE
ubuntu                 22.04     2dc39ba059dc   3 weeks ago   77.8MB
```

The image ID might be different.

Now you have your first image! Note that it is just a base Ubuntu 22.04 image with absolutely nothing in it. Let's build a container on this image and explore it a bit. Type
```sh
docker run -it --rm=true ubuntu:22.04 /bin/bash
```

The meaning of the flags are as follows:
- `-it` : interactive
- `--rm=true` : clean up the runnining container after exit.
- `/bin/bash` : start a bash(command prompt) when running the container

Now you should see a prompt like this:
```sh
root@3569d1bd2785:/#
```

You are now in a container that has the base Ubuntu 22.04! The characters after the `@` is the container ID. You should be able to do anything that you can do in an actual Ubuntu system. Try
```sh
root@3569d1bd2785:/# apt-get update
```

this should update all packages in this container. Try
```sh
root@3569d1bd2785:/# apt-get install wget
```

This will install `wget` command in this container. Now, keep in mind that everything you just did happens ONLY in this container. You are not installing wget on your local system! After you exit the container, these should be all gone! Let's try:
```sh
root@3569d1bd2785:/# exit
```

This will return back to your local terminal. Everything in that container is now gone. Try building the container on the image again:
```sh
docker run -it --rm=true ubuntu:22.04 /bin/bash
```

This give you a entirely new Ubuntu Container! You could check that the container ID changed. Now if you do
```sh
root@452616f4644a:/# wget
```

you will get
```
bash: wget: command not found
```

even though you installed it in the previous container.

Now you should have a sense of what a container or the image that builds it looks like. But we don't want another Ubuntu container, we want a unique container that runs our codes and files! To build your own image and container, you should create a `Dockerfile`.

[Next Section](dockerfile.md)

[Homepage](index.md)


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [CHTC]: <https://chtc.cs.wisc.edu/>
   [DockerHub website]: <https://hub.docker.com/>
   [Windows link]: <https://docs.docker.com/desktop/install/windows-install/>
   [Mac link]: <https://docs.docker.com/desktop/install/mac-install/>
   [Linux link]: <https://docs.docker.com/desktop/install/linux-install/>
   [Engine link]: <https://docs.docker.com/engine/install/centos/>
   [Dockerfile reference]: <https://docs.docker.com/engine/reference/builder/>
