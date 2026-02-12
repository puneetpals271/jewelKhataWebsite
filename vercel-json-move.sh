#!/bin/sh
# Temporarily move vercel.json before local build, then restore after

if [ "$1" = "prebuild" ]; then
  if [ -f vercel.json ]; then
    mv vercel.json vercel.json.deploy
    echo "Moved vercel.json to vercel.json.deploy for local build."
  fi
elif [ "$1" = "postbuild" ]; then
  if [ -f vercel.json.deploy ]; then
    mv vercel.json.deploy vercel.json
    echo "Restored vercel.json after local build."
  fi
else
  echo "Usage: ./vercel-json-move.sh prebuild|postbuild"
fi
