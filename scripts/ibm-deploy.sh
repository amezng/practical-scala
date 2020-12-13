#!/usr/bin/env bash

files=`find $1 -maxdepth 3 -type f -not -path '*/\.*' | sort`

for file in $files
do 
  ibmcloud cos upload --bucket $BUCKET_NAME --key ${file:6} --file $file
done
