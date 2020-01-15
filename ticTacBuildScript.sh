#!/bin/bash

set -eu

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
export fly_target=${fly_target:-tic-tac-toe}
echo "Concourse target ${fly_target}"
echo "$(basename $DIR)"

