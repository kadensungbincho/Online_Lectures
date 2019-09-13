# Ingroducing ELK 
- ELK stack for logging
  - Lose all valuable when the containers get down


# Metrics Profiling 
- https://spring.io/blog/2015/12/10/spring-boot-memory-performance


# Horizontal Scaling
- Horizontal Pods Automatic scaler
- Adding more nodes to the cluster
```sh
 kubectl autoscale deployment api-gateway --cpu-percent 400 --min 1 --max 4
 kubectl get hpa
 kubectl get hpa api-gateway -o yaml
 ```


# Understanding the scheduler
- QoS: Guaranteed (request & limit specified)
- QoS: Burstable  (reqeust & no limit)
- QoS: BestEffort (no request & no limit)