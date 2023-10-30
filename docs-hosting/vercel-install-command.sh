#!/bin/bash
set -x
set -e
export RUSTUP_HOME=/vercel/.rustup
export CARGO_HOME=/vercel/.cargo
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | bash -s -- -y
export PATH="$CARGO_HOME/bin:$PATH"
ls "$CARGO_HOME"
npm install
