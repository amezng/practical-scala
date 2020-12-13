#!/usr/bin/env bash

files=`find $1 -maxdepth 3 -type f -not -path '*/\.*' | sort`

for file in $files
do 
  echo "File to be uploaded: $file "
  #ibmcloud cos upload --bucket $IBM_CLOUD_STATIC_BUCKET --key ${file:6} --file $file
done
