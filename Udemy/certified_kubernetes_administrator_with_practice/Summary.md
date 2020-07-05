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
- 