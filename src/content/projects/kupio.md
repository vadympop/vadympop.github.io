---
title: Kupio
tagline: Marketplace platform with a FastAPI backend and a Kotlin Multiplatform app for Android and iOS.
period:
  start: "2026-03"
  end: "2026-05"
kind: product
team:
  size: 2
  credits:
    - name: Yurii Oliinyk
      github: https://github.com/yuriioliinyk4
role: Backend architecture, co-developer of the mobile app
stack: [Python, FastAPI, PostgreSQL, Redis, Stripe, WebSocket, Firebase FCM, AWS S3, Docker, Kotlin Multiplatform]
highlights:
  - Designed the backend architecture with domain modules, repository and service layers and a Unit of Work.
  - Paid listing promotions via Stripe, with the promotion rank built into search sorting.
  - Real-time chat over WebSocket + Redis pub/sub with read receipts, reconnect replay and FCM push notifications.
  - "Mobile: chat, push notifications with deep links, search filters and Stripe payment screens."
links:
  repos:
    - label: Backend
      url: https://github.com/kupio-app/kupio-backend
    - label: Mobile
      url: https://github.com/kupio-app/kupio-mobile
featured: true
order: 1
---
