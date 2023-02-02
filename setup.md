
# Setting up

To create a container, you need two things: a DockerHub account and a Docker Engine. Let's start from the easy one: setting up the DockerHub.

## Getting a DockerHub account

To register for a DockerHub account, go to [DockerHub website] and follow the sign-up steps. The DockerHub is used as a distribution site. You would create a Docker image locally (A Docker images act as a set of instructions to build a Docker container), and then push it to DockerHub. When the server execute your code that should run in your container, it will pull the image from your DockerHub and build the container with it. The users of your container would also pull from your DockerHub as well. More on this later, for now you just need to register for an account on DockerHub.

## Getting a Docker Engine

Installing a Docker Engine may vary on different operating systems. There are two options: you could either download a Docker Desktop for your system or directly download a Docker Engine if you are running a Linux system locally. I would recommend the first option, The Docker Desktop is basically a user interface wrapped around a Docker Engine. It is easier to use, and better maintained.

For Windows users, download Docker Desktop on the [Windows link]. For Mac users, you could find it on the [Mac link]. Note that if you are using a MacOS, you need to make sure if you are using an Intel Chip or Apple Chip. You need to download your version accordingly. For Linux users, Docker Desktop only supports Ubuntu, Debian, and Fedora. You could find the package and installation instructions on the [Linux link]. If you are not using those three systems, you should download the Docker Engine directly from the [Engine link] and follow the instruction on this page.

Follow the installation instruction on the pages. Under most circumstances, you install Docker Desktop like any other software on your system, but it does allow command-line installation. It takes a while for Docker to start. For Docker Desktop, you could see an interface. There will also be a short tutorial for linking this UI to your DockerHub. Follow these steps and you are all done with the setup! For Docker Engine, you won't see a window, you’ll just see a little whale and container icon in one of your computer's toolbars.

To use build and test the Docker container on your laptop, you won't be using this UI. Instead, you will do everything via commands in a terminal.

There are a few common issues that a Windows user will run into in my experience. I will list the solutions to save you time.

### Windows Issues

You might get this error message:
```
Hardware assisted virtualization and data execution protection must be enabled in the BIOS.
```
To solve this, restart your device and enter the BIOS. The way to enter BIOS varies for different devices, common methods are pressing F12 or F10 repeatedly once powering on your computer. Once entering the BIOS, find "Hardware assisted virtualization" and enable it. You might not find the exact option. The option with "hardware" and "virtual" is usually the one you want to enable.

After this, you will most likely run into another error message:
```
WSL 2 installation is incomplete
The WSL 2 Linux kernel is now installed using a separate MSI update package. Please click the link and follow the instructions to install the kernel update:
https://aka.ms/wsl2kernel
Press restart after installing the Linux kernel
```
WSL stands for Windows Subsystem for Linux. Since you need to work on your docker via command, you need a Linux environment, so having WSL is essential for windows users. Click the link in that error message and follow the instructions on that page to install WSL 2. You should not run into any issues while doing that.

Now that you have everything needed to work with Docker, let's get a simple Docker image to demonstrate its usage.

[Next Section](image.md)
[Homepage](index.md)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [CHTC]: <https://chtc.cs.wisc.edu/>
   [DockerHub website]: <https://hub.docker.com/>
   [Windows link]: <https://docs.docker.com/desktop/install/windows-install/>
   [Mac link]: <https://docs.docker.com/desktop/install/mac-install/>
   [Linux link]: <https://docs.docker.com/desktop/install/linux-install/>
   [Engine link]: <https://docs.docker.com/engine/install/centos/>
   [Dockerfile reference]: <https://docs.docker.com/engine/reference/builder/>
