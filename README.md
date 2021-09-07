# Docker
- Run: docker run [image name]
    + This will create new docker image instance everytime, need to refer by its tag name
    + dock start [tag name]
- Build: docker build [directory]
    + add -t to tag the image
- Run using dockerfile.dev: docker build -f Dockerfile.dev .
- Want to ignore some files? Use .dockerignore

## Different Docker files for different purposes
- To override, can use docker compose
    + context: . 
    + dockerfile: Dockerfile.dev