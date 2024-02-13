#!/bin/bash

# Path to the directory where the spec-1.cy.ts file is located
DIR_PATH=.

# Name of the original file (without the number)
FILE_NAME_PREFIX=spec-
FILE_NAME_SUFFIX=.cy.ts

# Number of copies to create
NUM_COPIES=300

# Loop to create the copies
for i in $(seq 2 $NUM_COPIES); do
  # Construct the new file name
  NEW_FILE_NAME="${DIR_PATH}/${FILE_NAME_PREFIX}${i}${FILE_NAME_SUFFIX}"
  
  # Copy the original file to the new file name
  cp "${DIR_PATH}/${FILE_NAME_PREFIX}1${FILE_NAME_SUFFIX}" "$NEW_FILE_NAME"
  
  # Check if the copy was successful
  if [ $? -eq 0 ]; then
    echo "Created copy: $NEW_FILE_NAME"
  else
    echo "Failed to create copy: $NEW_FILE_NAME"
  fi
done

echo "Done creating copies."