Flow Week 11
- Bikin JWT di Register dan Login
- Unit test
- Docker2an -> kita gaperlu nodemon di terminal vscode/ local
    - pull database image -> create container -> docker run --name postgre-server -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:latest
    - bikin dockerfile seperti dicontoh
        - docker build -t todos:1.0 .
    - docker run --name todo-server -p 3000:3000 -d todos:1.0
    - bikin docker network
        - vince@cloud:~$ docker network create todos-network
                48e7f967727d7ae958f9de31a30f24d9d3b1e7fdb73e172ab609f58380874b53
        - vince@cloud:~$ docker network connect todos-network sqlserver
        - vince@cloud:~$ docker network connect todos-network todo-server
