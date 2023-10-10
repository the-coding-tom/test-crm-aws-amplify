#!/bin/bash
set -e

# Output the Yarn version for debugging purposes
echo "Using Yarn version: $(yarn --version)"

# Set the PATH to include Yarn binary
export PATH="$PATH:$(yarn global bin)"
