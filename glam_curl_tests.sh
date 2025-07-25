#!/bin/bash

# Test: Switch to Velvet Mode
curl -X POST http://localhost:8000/api/glam/command \
  -H "Content-Type: application/json" \
  -d '{"input": "Enter Velvet Mode"}'

# Test: Cancel my day
curl -X POST http://localhost:8000/api/glam/command \
  -H "Content-Type: application/json" \
  -d '{"input": "Glam, cancel my day"}'

# Test: Mirror, hype me up
curl -X POST http://localhost:8000/api/glam/command \
  -H "Content-Type: application/json" \
  -d '{"input": "Mirror, hype me up"}'

# Test: Unknown command
curl -X POST http://localhost:8000/api/glam/command \
  -H "Content-Type: application/json" \
  -d '{"input": "What is love?"}'