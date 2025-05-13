push on raspberry docker registry:

sudo docker buildx build -t "{registry}/portfolio:{tag}" --progress plain --platform linux/arm64 --push .