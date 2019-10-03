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
- QoS: Burstable  (reqeust & no limit) : allowed to go over than the request
- QoS: BestEffort (no request & no limit)

# Eviction
- Request is just a hint : a pod can take up more than the request
- lost of node can bring failure of the cluster
- So, it's important not to make pods greedy by terminating it
- Using alert manager to calculate proper memory & CPU limit and request for a pod(container actually)

- Evict the BestEffort >> Burstable >> Guaranteed(below limit) order

# Pod Priorities
- From 1.14
- pod with the higher priority would survive

# RBAC : Defining Roles
- From 1.8
- Requirement
  - Only Read
  - Only on playground namespace

# Setting up a "context for a user"
- Need authentication

```sh
kubectl config view
kubectl config set-cluster fleetman.k8s.local --server=<serverURL>
kubectl config set-context <context name to create> --user <username> --cluster=<clustername>
``` 
context: which cluster, which user to use

# Issuing a kubernetes signed x.509 certificates
```sh 
openssl genrsa -out private-key-francis.key 2048
openssl req -new -key private-key-francis.key -out req.csr -subj "/CN=francis-linux-login-name/O=francis-linux-login-name"

# get cluster key
aws s3 cp s3://<bucket-for-cluster>/fleetmna.k8s.local/pki/private/ca/key.key kubernetes.key
aws s3 cp s3://<bucket-for-cluster>/fleetmna.k8s.local/pki/issued/ca/key.crt kubernetes.crt

openssl x509 -req -in req.csr -CA kubernetes.crt -CAkey kubernetes.key -CAcreateserial -out francis.crt -days 365

sudo mkdir /home/francis-linux-login-name/.certs
sudo mv francis.crt /home/francis-linux-login-name/.certs
sudo mv francis.key /home/francis-linux-login-name/.certs
sudo mv kubernetes.crt /home/francis-linux-login-name/.certs
rm kubernetes.key
rm kubernetes.srl
rm req.csr

sudo chown -R francis-linux-login-name:francis-linux-login-name /home/francis-linux-login-name/.certs/
``` 

# Allocating Access to Users
```sh
su - francis-linux-login-name
cd ~/.certs
kubectl config set-credentials francis-linux-login-name --client-certificates=francis.crt --client-key=private-key-francis.key
kubectl config view
kubectl config set-cluster fleetman.k8s.local --certificate-authority=kubernetes.crt
kubectl config view

kubectl get all
```

# ClusterRoles and ClusterRolebindings
- Configuration is same like role
- kind: ClusterRole without namespace

# Config map
- immutable config map is more easy to manage


# Ingress Control
- routing
- Nginx Ingress controller


# Other Workload Types
- 


# DaemonSet
- 


# StatefulSets
- When do we use StatefulSet?
    - You have a database but you want to replicate it
    - the client should write to the primary node among many nodes of mongos


# Introduction to CI/CD
- CruiseControl -> Hudson -> Jenkins

# Github Organization
