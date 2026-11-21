---
title: litredis
tagline: A Redis-compatible in-memory server in Rust. Works with redis-cli and redis-py.
period:
  start: "2026-04"
  end: "2026-05"
kind: university
team:
  size: 2
  credits:
    - name: Yurii Oliinyk
      github: https://github.com/yuriioliinyk4
role: Server core, storage, persistence and auth
stack: [Rust, Tokio, DashMap, serde, clap, GitHub Actions]
highlights:
  - RESP2 protocol and one async task per client connection.
  - 19 commands across strings, counters, TTL, pub/sub and AUTH.
  - TTL with background cleanup and JSON snapshot persistence, periodic and on shutdown.
  - Integration test suite running in CI.
links:
  repo: https://github.com/vadympop/litredis
featured: true
order: 2
---
