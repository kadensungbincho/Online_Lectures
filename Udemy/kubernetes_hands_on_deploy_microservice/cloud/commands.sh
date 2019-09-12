# https://github.com/kubernetes/kops
# https://github.com/kubernetes/kops/blob/master/docs/aws.md
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
kubectl version

curl -LO https://github.com/kubernetes/kops/releases/download/$(curl -s https://api.github.com/repos/kubernetes/kops/releases/latest | grep tag_name | cut -d '"' -f 4)/kops-linux-amd64
chmod +x kops-linux-amd64
sudo mv kops-linux-amd64 /usr/local/bin/kops

aws configure

export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key)
export NAME=fleetman.k8s.local
export KOPS_STATE_STORE=s3://kaden-kops-test1
   
ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa

kops create cluster --zones eu-west-2a,eu-west-2b,eu-west-2c --name ${NAME}
kops create secret --name ${NAME} sshpublickey admin -i ~/.ssh/id_rsa.pub

kops edit ig --name=${NAME} nodes

kops update cluster ${NAME} --yes


# install helm : https://github.com/helm/helm/releases/tag/v2.14.3
wget https://get.helm.sh/helm-v2.14.3-linux-amd64.tar.gz
tar zxvf helm-v2.14.3-linux-amd64.tar.gz 
tar zxvf helm-v2.14.3-linux-amd64.tar.gz 
sudo mv linux-amd64/helm /usr/local/bin/
rm helm-v2.14.3-linux-amd64.tar.gz 
rm -rf ./linux-amd64/

helm repo update

# adding priviledge to tiller pod
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}' 

helm install stable/mysql --name my-special-installation --set mysqlPassword=password
: '
NAME:   my-special-installation
LAST DEPLOYED: Thu Sep 12 06:33:50 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                                DATA  AGE
my-special-installation-mysql-test  1     0s

==> v1/PersistentVolumeClaim
NAME                           STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE
my-special-installation-mysql  Pending  gp2     0s

==> v1/Pod(related)
NAME                                            READY  STATUS   RESTARTS  AGE
my-special-installation-mysql-74f87984c8-gbxc5  0/1    Pending  0         0s

==> v1/Secret
NAME                           TYPE    DATA  AGE
my-special-installation-mysql  Opaque  2     0s

==> v1/Service
NAME                           TYPE       CLUSTER-IP    EXTERNAL-IP  PORT(S)   AGE
my-special-installation-mysql  ClusterIP  100.69.14.43  <none>       3306/TCP  0s

==> v1beta1/Deployment
NAME                           READY  UP-TO-DATE  AVAILABLE  AGE
my-special-installation-mysql  0/1    1           0          0s


NOTES:
MySQL can be accessed via port 3306 on the following DNS name from within your cluster:
my-special-installation-mysql.default.svc.cluster.local

To get your root password run:

    MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default my-special-installation-mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo)

To connect to your database:

1. Run an Ubuntu pod that you can use as a client:

    kubectl run -i --tty ubuntu --image=ubuntu:16.04 --restart=Never -- bash -il

2. Install the mysql client:

    $ apt-get update && apt-get install mysql-client -y

3. Connect using the mysql cli, then provide your password:
    $ mysql -h my-special-installation-mysql -p

To connect to your database directly from outside the K8s cluster:
    MYSQL_HOST=127.0.0.1
    MYSQL_PORT=3306

    # Execute the following command to route the connection:
    kubectl port-forward svc/my-special-installation-mysql 3306

    mysql -h ${MYSQL_HOST} -P${MYSQL_PORT} -u root -p${MYSQL_ROOT_PASSWORD}
'

helm delete --purge my-special-installation

# install prometheus
# https://github.com/helm/charts/tree/master/stable/prometheus-operator
# https://github.com/helm/charts/issues/10316
helm install --name monitoring --namespace monitoring stable/prometheus-operator

# expose prometheus using ClusterIP -> LoadBalancer
kubectl edit -n monitoring service/monitoring-prometheus-oper-prometheus
# disable pro and enable granfana
kubectl edit -n monitoring service/monitoring-prometheus-oper-prometheus
kubectl edit -n monitoring service/monitoring-grafana
