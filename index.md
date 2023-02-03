
# A short tutorial on using Docker container

## Motivation

Imagine you are working on a research project. To have your code running, you need several fancy packages from various sources. You might also need software distributions that require you to compile them yourselves. After hours of setting up, you finally got everything working on your computer.

Sometimes it is not feasible to run everything on your local computer. Maybe you have 5,000 models based on different datasets to run, and it would take months to get all jobs finished on your local device. In this case, you might want to run your code in a remote environment, an environment that could handle a large number of jobs, such as in [CHTC].

Now, remote servers are quite different from local environments. Under most circumstances, servers are based on a Linux OS, not the Windows or MacOS that we are familiar with. You probably do not have administrator permission as well, so you need to follow the instructions the server maintenance team provides you. Those instructions are quite different for different servers.

After you spent hours setting everything up and getting the jobs running, thinking that hours of hard work finally paid off, the job got terminated, and something like this appears in the error message:

```
configure:4314: $? = 4
configure:4303: gcc -qversion >&5
gcc: error: unrecognized command line option '-qversion'
gcc: fatal error: no input files
compilation terminated.
```

or maybe this message appears:

```
Can't open file of random numbers (/var/lib/condor/execute/slot1/dir_3431663/software/net/../util/randfile)
```

Different reasons lead to different error messages. For the first one, the GCC compiler version on the server might be different from the one required in one of your packages. For the second error, the server might change the pathing of your files with it running your code on an execution node. You would need superuser permission to install a newer version of GCC, and you might need to make significant changes to the package you are using to deal with the pathing issue. Both are very time-consuming if not even possible to fix.

In this scenario, a docker container would be your best hope. As long as the server you are using supports docker (which is true in most cases), it is almost guaranteed that the code you managed to run locally would run successfully on remote servers.

Now suppose you are very good at working out dependencies even in a remote environment. When you finally publish your project on your GitHub site, you would want others to use your production on different datasets so that your work could be further validated. Here comes another issue: your target users might come from fields that do not dive deeply into the software system, and the dependencies would be huge obstacles for users to even set up the software. Imagine someone who has yet to learn about compiler encounters the error messages shown above, this would certainly not be a good advertisement for your hard work. In this case, a Docker container that contains everything related to your project would come in handy for your users even if they do not have much experience with computer systems, as running a Docker container is not any harder than running an IDE that most researchers have experience in.

In this tutorial, we will divide the document into the following sections:

| Page| Description|
|---|---|
|[Introduction](intro.md)|A short introduction on the concept of Docker containers|
|[Setup](setup.md)|A step-by-step guide on getting everything you need for creating Docker containers|
|[Docker image](image.md)|A simple example of getting and using a Docker image|
|[Dockerfile](dockerfile.md)|A guide on creating the Dockerfile, the core of all Docker containers|
|[Build the image](build.md)|A guide on building and testing your image based on Dockerfile|
|[Usage](use.md)|Examples of using the Docker container under different environments|

[Next Section](intro.md)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [CHTC]: <https://chtc.cs.wisc.edu/>
   [DockerHub website]: <https://hub.docker.com/>
   [Windows link]: <https://docs.docker.com/desktop/install/windows-install/>
   [Mac link]: <https://docs.docker.com/desktop/install/mac-install/>
   [Linux link]: <https://docs.docker.com/desktop/install/linux-install/>
   [Engine link]: <https://docs.docker.com/engine/install/centos/>
   [Dockerfile reference]: <https://docs.docker.com/engine/reference/builder/>
