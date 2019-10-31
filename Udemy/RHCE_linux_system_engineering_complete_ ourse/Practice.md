docker network create udemy-rhce

docker run --network="udemy-rhce" --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -d centos:7 /sbin/init

docker-compose up -d --build