# Core Concepts
- Cluster Architecture
    - nodes
        - worker nodes
            - kubelet: run in each node to communicate with master and manage each node
            - kube-proxy
            - container runtime: like docker, containerd, ...
        - master
            - ETCD Cluster: Store key-value format data
            - Kube scheduler
            - controller-manager
                - node-controller
                - replication-controller
            - Kube apiserver: orchestrating master components in the form of containers
        
- API Primitives
- Services & other network primitives

# ETCD Beginner
- What is it?
    - distributed reliable key-value store

- How to get started quickly?
    - download binaries, extract, run
    - port 2379
    - default etcd command client

# ETCD in Kube
- Role
    - ETCD cluster stores info like nodes, pods, configs, secrets, accounts, roles, binginds ...
    - 2 setup ways
        - scratch - manual
        - kubeadm
            - pod in the etcd-master namespace

# kube-apiserver
- kubectl get nodes -> kube-apiserver -> response
    - authenticate, validate req, retrieve data, update ETCD -> scheduler -> kubelet
    - the only component which interact with ETCD cluster

# kube controller manager
- manages
    - watch status
    - remediate situation
- node-controller
    - node monitor period = 5s
    - communicate  with kube-apiserver 
    - node monitor grace period = 40s
    - POD eviction timeout = 5m
- replication controller
    - ensuring desired number of pods
- deployment, cronJ, namespace, endpoint ... many ...
    - all included in kube controller manager

- how to view
    - kubeadm
        - pod in the master node
    - as a service in the service dir

# kube scheduler
- scheduling pod to the nodes (only decides, kubelet create the pod in the node)
- check
    - sufficient capacity?
    - right destination?
    - looks at each pod and decides the best node for the pod
        - filter the node by resource requirement
        - rank nodes (priority function with score)

- download and run it as a service or kubeadm

# kubelet
- like a captain on the ship
    - register node
    - create pods
    - monitor node & pods

- kubeadm
    - does not deploy kubelets

# kube proxy
- pod network enable communication between pods
    - service is a virtual component which lives in memory
- kube proxy is a proxy which runs in each node, looks for new services and creates new rules on each node for the services using ways like iptable

# PODs
```bash
kubectl run nginx --image nginx

kubectl get pods
```

# POD with YAML
- must have
    - apiVersion, kin, metadata, spec

# Kubernetes Controller
- Replication Controller
    - load balacing & scaling
    - older tech replaced by replica set

- Replica Set
    - 

# Deployments

# Namespaces

# Services
- enable external node to access the pod by mapping

- types
    - nodeport: proxy
    - clusterip: create  virtual ip
    - loadbalancer: distribute the loads

- NodePort
    - 3 ports existing
        - a port for external request on the service - NodePort (30000 ~ 32767)
        - a port for internal request  on the service - Port
        - a port on the pod - TargetPort

- ClusterIP

# Using imperative cmd
```bash
kubectl run nginx --image=nginx
kubectl run nginx --image=nginx --dry-run=client -o yaml
kubectl create deployment --image=nginx nginx
kubectl create deployment --image=nginx nginx --dry-run=client -o yaml

kubectl expose pod redis --port=6379 --name redis-service --dry-run=client -o yaml
kubectl create service clusterip redis --tcp=6379:6379 --dry-run=client -o yaml

# Create a Service named nginx of type NodePort to expose pod nginx's port 80 on port 30080 on the nodes
kubectl expose pod nginx --port=80 --name nginx-service --node-port=30080 --type=NodePort --dry-run=client -o yaml
kubectl create service nodeport nginx --tcp=80:80 --node-port=30080 --dry-run=client -o yaml

kubectl expose pod redis --port=6379 --name redis-service --selector='tier=db'

```

#  Manual Scheduling
- use `nodeName` or use Binding

# Taints and Tolerations
- Taint - nodes
- Toleration - pods

```bash
kubectl taint nodes node-name  key=value:taint-effect  (taint-effect: NoSchedule, PreferNoSchedule, NoExecute)

kubectl taint  nodes node1 app=blue:NoSchedule
```

```bash
# kube automaticall taint the master node
kubectl describe node kubemaster | grep Taint
```

# Node Selector
```bash
kubectl label nodes <node-name> <label-key>=<lable-value>
kubecatl label nodes node-1 size=Large
```

# Node Affinity
- PODs to specific Nodes
- Node Affinity Types
    - requiredDuringSchedulingIgnoredDUringExecution
    - preferredDuringScheudlingIgnoredDuringExecution

# Node Affinity vs Taint

# Resource Requirement and Limit

# Daemon Sets
- make sure that one copy of the pods exists on each nodes
- example applications
    - monitoring solution
    - logs viewer
    - kube-proxy
    - networking

```bash
kubectl get daemonsets
```
- How does it work?
    - until v1.12: trigger new pod with  nodeName with the new node name
    - after: uses NodeAffinity and default scheduler


# Static Pods
- use config and staticPodPath or --static-pod-path directly
- Why?
    - not dependent on the kube api-server or other master's components
    - kubelet  in the master node handles master's components as statid pods

```bash
# that's why we see
kubectl get  pods -n kube-system
```

# Multiple Schedulers
```bash
# to view the schedulers
kubectl get pods --namespace=kube-system

# add schedulerName: my-customer-scheduler on the pod.yml

kubectl get events
kubectl  logs my-customer-scheduler --namespace=kube-system
```

# Configuring Kubernetes Scheduler

# Monitor Kube Cluster
- metrics server
    - cAdvisor in each kubelet

# Managing application logs

# Rolling updates and rollbacks
```bash
kubectl rollout status deployment/myapp-deployment

kubectl rollout history deployment/myapp-deployment

kubectl apply -f deployment.yml
kubectl set image deployment/my-deployment nginx=nginx:1.9.1

# deployment use relicaset to do rolling update
# revert to the old replica set if rollbacked
kubectl rollout undo deployment/myapp-deployment
```

# Commands

# ConfigMap
```bash
kubectl create configmap <config-name> --from-literal=<key>=<value>
# or --from-file=<path to file>

kubectl get configmaps
```

# Secrets

# Multi container pods

# Cluster Upgrade Process
```bash
kubeadm upgrade plan

kubectl drain node-1
apt-get upgrade -y kubeadm=1.12.0-00
kubeadm upgrade apply v1.12.0
kubeadm upgrade node config --kubelet-version v1.12.0
systemctl restart kubelet
kubectl uncordon node-1
# api server -> kubelet ...
```

# Backup and Restore
- Backup Candidates
    - Resource Configuration
        - imperative
        - declarative: preferred
    - ETCD Cluster
    - Persistent volumes

## Resource
```bash
kubectl get all --all-namespaces -o yaml > all-deploy.yml
```
- VELERO

## ETCD
- get --data-dir
- get snapshot and save
```bash
# restore
service kube-apiserver stop

etcdctl snapshot save /tmp/snapshot-pre-boot.db --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key

etcdctl \
 snapshot restore snapshot.db \
 --data-dir <> \
 --initial-cluster master-1=<> \
 --initial-cluster-token <> \
 --initial-advertise-peer-urls <>

systemctl daemon-reload
service etcd restart

service kube-apiserver start


```
