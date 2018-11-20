#!/bin/sh

# disable user certificate
gcloud config unset container/use_client_certificate
# access cluster
gcloud container clusters get-credentials salt-cluster --zone asia-southeast1-a --project isp-chat-app
# pull image
docker pull wisatong/freshwater:0.3.6-SNAPSHOT
# set new image to deployment
kubectl set image deployment/fresh-web fresh-web=wisatong/freshwater:0.3.6-SNAPSHOT
# view successful deployment
kubectl get services
