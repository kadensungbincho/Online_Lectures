# warm-up
```bash
# in warmup-examples
k apply -f <1, 2, 3 files>
# enable injection
 k label namespace default istio-injection=enabled
```

# Istio Architecture
- proxy?

# Data Plane
- sidecar proxy with envoy
- Istio simpilfies Envoy

# Control Plane
- mixer (policy and telemetry)
    - policy checking
- pilot: pilot is responsible for converting the configurations into a format that Envoy can understand.
- galley
- citadel: manages certificates

# Going Deeper into Envoy

# Canaries with Replicas

# What is an Istio Virtual Service?
- A virtual service enables us to configure custom routing rules to the service mesh

- where does a virtual service fit in?
    - istio pilot

# Virtual Service Configuration in yaml

# What is an Istio Destination Rule?

# Session Affinity
- Is it possible to use the weighted destination rules to make a single user "stick" to a canary?

- Consistent hashing
    
- weighted routing with consistent hashing

# Why do I need an Ingress Gateway?
- Canary Requirement

# Edge Proxies and Gateways

# Prefix Routing
