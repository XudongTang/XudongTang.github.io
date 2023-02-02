
# Build the image from Dockerfile

## Build

First, you need to open up a terminal and navigate to the directory where your Dockerfile locates using `cd`. Then type the following into the terminal:
```sh
docker build -t your-username/your-image-name:tag .
```

replace `your-username` with your DockerHub username, replace `your-image-name` with an image name of your choice, and replace `tag` with a tag of your choice.

## Test

First, you want to create a working directory. The directory should contain all the files needed for your job. Those include the dataset(`.csv` files) and your code(`.py` or `.java`, for example). If you have a shell script(`.sh`), you should also put it here. You could also run the command directly in the container, however. This is purely your choice.

Now, use `cd` command to navigate to your working directory. We will use `docker run` command as we did with the simple Ubuntu image, but with more flags:
```sh
docker run --user $(id -u):$(id -g) --rm=true -it -v $(pwd):/scratch -w /scratch username/imagename:tag /bin/bash
```
The meaning of the flags are as follows:
- `--user $(id -u)`:`$(id -g)`: runs the container with more restrictive permissions
- `--rm=true` : clean up the runnining container after exit
- `-it` : interactive
- `-v $(pwd):/scratch` : put the current working directory (the one with data and code) into the container, name the directory `/scratch`
- `-w /scratch`: when the container starts, make `/scratch` the working directory
- `/bin/bash` : start a bash(command prompt) when running the container

You should see a new prompt like this:
```
I have no name!@2fe289f8b55d:/scratch$
```

Now you are running in the container! Do what you normally do to run your job. Either via command such as
```sh
python3 your_code.py
```

or by a shell script that contains all the command:
```sh
./sript_that_runs_everything
```

Check if the process and the output are exactly the same as what you get if you run everything locally. If so, then you pass the test! If something's wrong, there might be many possibilities. I would suggest looking into your Dockerfile, this is where the most error occurs, ie, you did not set up the environment properly.

## Push

After you tested everything and you believe your image is ready to go, you should push it to Dockerhub so that when you run on servers, the server could pull your image from your DockerHub repository. If it's your first time pushing from this device, do the following first:
```
docker login
```

There would be a prompt that ask for your DockerHub username and password. After that, do
```
docker push your-username/your-image-name:tag
```

the `your-username/your-image-name:tag` should be the same as the one you specified when doing `docker build`. Now your image should be on DockerHub! You could check it in [DockerHub website] under the repository tab.

At this stage, you are ready to use the actual docker container on your local machine or a remote machine.

[Next Section](use.md)
[Homepage](index.md)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [CHTC]: <https://chtc.cs.wisc.edu/>
   [DockerHub website]: <https://hub.docker.com/>
   [Windows link]: <https://docs.docker.com/desktop/install/windows-install/>
   [Mac link]: <https://docs.docker.com/desktop/install/mac-install/>
   [Linux link]: <https://docs.docker.com/desktop/install/linux-install/>
   [Engine link]: <https://docs.docker.com/engine/install/centos/>
   [Dockerfile reference]: <https://docs.docker.com/engine/reference/builder/>
