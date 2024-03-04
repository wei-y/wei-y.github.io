---
title: System Under Testing
author: Wei
date: '2021-12-12'
---

## The `Conduit` app

The `Conduit` application is a simple blog website implemented in different technologies. The overarching project is the [Realworld Example apps](https://github.com/gothinkster/realworld) which collects all those implementations in one place. In this practice, I selected a fullstack implementation without other dependency and very easy to setup. The code repository can be found [here](https://github.com/danjac/realworld).

To make it easy to use, I wrapped it into a `Dockerfile` so that following the standard docker build and run process, the application can run self contained in a docker container. The `Dockerfile` can be found [here](/Dockerfile).

## Setup the application

1. Create a directory for the app and copy the `Dockerfile` above to the directory

    ```shell
    mkdir realworld
    cd realworld
    cp <place-of-dockerfile> ./
    ```

2. Build docker image

    ```shell
    docker build -t realworld .
    ```

3. Run docker container publishing the port serving the app

    ```shell
    docker run -d -p 8000:8000 --name realworld realworld
    ```

4. Open browser and go to [http://127.0.0.1:8000] to have a look at the brand new blog app which looks like below

    ![conduit-screenshot](/conduit.png)

## Features

The function of the `Conduit` app is briefly listed [here](https://realworld-docs.netlify.app/docs/implementation-creation/features). Some information in detail are mostly documented from the development perspective [here](https://realworld-docs.netlify.app/docs/intro#) in the `Specs` section. The `Backend Specs -> Endpoints` and `Frontend Specs -> Routing Guidelines` sections are good places to understand the app.

One way I summarise the features is as follows. This grouping is very subjective and it could be different from another perspective, but this whole practice will use this grouping as an example.

- Authentication
  - Sign in/sign out: User sign in/out of the application
- User
  - CRU: Create, read, and update a user. There is no deleting user.
  - Follow/unfollow a user
  - View user's profile: My profile and other user's profile are slightly different
- Article
  - CRUD: Create, read, update, and delete.
  - Favorite/unfavorite, view favorited articles
  - Filter by tag
- Comment
  - CRD: Create, read, and delete. There is no update
- Feed
  - Global/My: View global feed and my feed, with pagination applied

Test cases that are going to be created will cover all above. To reduce redundancy, only some of them will be discussed in following posts.
