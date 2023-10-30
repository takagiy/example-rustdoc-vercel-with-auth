#!/bin/sh
set -x
set -e
export RUSTUP_HOME=/vercel/.rustup
export CARGO_HOME=/vercel/.cargo
source "$CARGO_HOME/env"
npm run build
