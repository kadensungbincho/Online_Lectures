# Why?
- too many people setup kafka without monitoring
- Admin tools
	- zoo navigator ui
	- yahoo kafka manager
	- LinkedIn kafka monitor
- Monitoring Tools
	- Prometheus
 	- Grafana
- Operations Learning
	- Learn how to perform a safe and automated Roll restart of Kafka brokers
	- Update Brokers configurations in a safe way
 	- Rebalance Partitions in a Kafka Cluster
	- Increase and Decrease the Replication Factor of Topics
	- Add a Broker to a Kafka Cluster
	- Service and Replace a Broker In a Kafka Cluster
	- Remove a Broker in a Kafka Cluster
	- Install Command Line Interface tools to automate workflows
	- Upgrade a Kafka Cluster with no downtime


- Important Metrics to monitor
	- Number of active controller: should always be 1
	- Number of Under Replicated Partitions: shoulw always be 0
	- Number of Offline Partitions: should always be 0
	- There are a ton of metrics you can find online:
		- https://kafka.apache.org/documentation/#monitoring

- What do I need to make this production ready?
	- Zookeeper & Kafka: usually not using CloudFormation, this is for this course only. 
		Instead, usually using Puppet / Ansible / Chef / Terraform
	- Security: set up security for web based tools 
	- Administration Tools: Using SystemD is fine, but you most likely want to automate the setup of that administration machine.
	- Prometheus & Grafana: the setup we had is good enough for development but whateven monitoring tool you are using should be always available and well setup. Maybe 2 dedicated machines for Prometheus and Grafana

- Kafka Operations Walkthrough
	- For moust of the Kafka changes you will operate, you will need to perform a roll restart of your Kafka Brokers.
	- Doing a manual Roll Restart means:
		- Shutdown a broker
		- Updating that broker
		- Starting the broker
		- Wait for the cluster to be stable
		- Repeat

	- Roll Restart of Brokers Installing Jolokia Agent
		- We can use the kafka-utils by Yelp to perform automated roll restarts.
			