
# Creating a Dockerfile

The Dockerfile gives you the freedom to customize the environment you need to run your code. Whether it is getting a different version of the compiler, or installing a package, you could get all of those down in this one file! To create a Dockerfile, use your favorite editor (for me it's VIM).
```sh
vim Dockerfile
```

Note the file name MUST be exactly "Dockerfile", no file type, no other fancy name.

In the new Dockerfile, the first thing you want to do is to set up a base image. It should be some kind of official image that you could build your environment on. The `Ubuntu:22.04` is a good option. To do this, you should use the "FROM" keyword. The first line of the file should thus be
```
FROM username/image:tag
```
To use the `Ubuntu 22.04` as base image, you should type

```
FROM ubuntu:22.04
```

Now you have your image, you would want to add a few things to it. Maybe update all the packages and install a few more. In a Debian-based system, this is done by `apt-get update` and `apt-get install`. To run those commands, you need to use the keyword `RUN`. The `RUN` command basically executes the command that follows it.

Let's give the Ubuntu system an update and install wget in it. Your Dockerfile should now look like this:
```
FROM ubuntu:22.04
RUN apt-get update
RUN apt-get install wget
```

You could use && to run 2 commands together, for example
```
RUN apt-get update && apt-get install wget
```

is equivalent to the previous one. `RUN` could be used in other commands such as `wget`, `tar`, or `make`. Note that the only thing kept in the final image due to `RUN` command is changes to the filesystem. Other changes, such as current directory, will not be changed. For example, suppose you have a `./make` file in a directory `/program`. Doing
```
RUN tar xf program.tar
RUN cd program
RUN ./make
```

will give you `file not found`, as `RUN` does not change your current working directory. To do this, you need the key work `WORKDIR`. So instead you should do
```
RUN tar xf program.tar
WORKDIR program
RUN ./make
```

This will set your working directory to `/program`. Another important key word is `ENV`. For example, if you want to add `/program/bin` to the search path, normally you would do
```sh
export PATH=/program/bin:$PATH
```

however, if you do
```
RUN export PATH=/program/bin:$PATH
```

Nothing will get changed! Instead, to set the environment variable `$PATH`, you should do
```
ENV PATH="${PATH}:/program/bin"
```

This will set the environment properly.

Another useful keywork is `COPY`. Suppose you have a file called `local-file.tar.gz` that you need in setting up the image, and you save it in the save directory as the Dockerfile, doing
```
COPY local-file.tar.gz /file-needed
```

will copy the `local-file.tar.gz` into a directory `/file-needed` in your image.

Those are the keywords that you will most likely use when building your docker image. There are many other keywords that might come to use. You could find then in the [Dockerfile reference] page.

Let's show a complete example of building a Python environment and install 2 python packages. This example is from the [CHTC] tutorial:
```
# Build the image based on the official Python version 3.8 image
FROM python:3.8
# Our base image happens to be Debian-based, so it uses apt-get as its system package manager
RUN apt-get update && apt-get install -y wget
# Use RUN to install Python packages (numpy and scipy) via pip, Python's package manager
RUN pip3 install numpy scipy
```

Here "-y" give "yes" to all prompt during the installation. Some system have those user-typed prompt, and dockerfile would terminate if not answered automatically.

Now you would have a rough sense how to write a Dockerfile. It's time to turn your Dockerfile into an actual image.

[Next Section](build.md)
[Homepage](index.md)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [CHTC]: <https://chtc.cs.wisc.edu/>
   [DockerHub website]: <https://hub.docker.com/>
   [Windows link]: <https://docs.docker.com/desktop/install/windows-install/>
   [Mac link]: <https://docs.docker.com/desktop/install/mac-install/>
   [Linux link]: <https://docs.docker.com/desktop/install/linux-install/>
   [Engine link]: <https://docs.docker.com/engine/install/centos/>
   [Dockerfile reference]: <https://docs.docker.com/engine/reference/builder/>
