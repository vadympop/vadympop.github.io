---
role: Python Developer
company: Automation Aspects
location: Remote
employment: Part-time
period:
  start: "2025-03"
  end: "2026-09"
stack: [FastAPI, PostgreSQL, Redis, OpenAI API, Taskiq, NATS, AWS S3, Docker, aiogram, Frappe/ERPNext]
summary: >-
  Backend developer on client products: AI-driven sales funnels, payment and referral systems,
  hospitality software, Telegram automation and a custom ERP.
projects:
  - title: AI sales-funnel platform
    summary: Multi-tenant platform for automated sales conversations in messengers.
    highlights:
      - Configurable messaging scenarios with delays, branching rules and localization.
      - OpenAI routes free-text answers to the right branch and generates fallback replies, with per-user AI usage limits.
    stack: [FastAPI, PostgreSQL, Redis, OpenAI API]
  - title: Referral & payout system
    summary: Balances, payouts and referral commissions across fiat and crypto.
    highlights:
      - Multi-currency balances (EUR, UAH, USDT) converted at daily bank and P2P market rates.
      - Payout requests with admin approval and tiered referral commissions.
      - Scheduled jobs on Taskiq + NATS.
    stack: [FastAPI, PostgreSQL, Taskiq, NATS]
  - title: Hotel guest services platform
    summary: Backend, admin panel and Telegram bot for a hotel and apartment business.
    highlights:
      - Check-in by access codes, apartment catalog with S3 image storage and scheduled auto-checkout.
      - Admin panel for rooms, services, the hotel menu, bookings and editable bot texts.
      - Telegram bot with a WebApp where guests get their check-in code and order services (food, flowers, cleaning).
    stack: [FastAPI, PostgreSQL, AWS S3, Vue.js, Tailwind, aiogram]
  - title: Subscription management bots
    summary: Paid access to Telegram channels, two product generations.
    highlights:
      - Configurable subscription groups, packages, terms and prices.
      - Built-in admin panel to browse data and grant or edit subscriptions.
    stack: [aiogram 3, FastAPI, PostgreSQL, Redis]
  - title: Telegram community tools
    summary: Smaller automation bots for client communities.
    highlights:
      - Join-request handling with captcha and broadcasts.
      - Cross-chat auto-translation, duplicate-account detection, Binance P2P rate monitoring.
    stack: [aiogram 3, Redis]
  - title: Oblik, custom ERP on ERPNext
    period: Sep 2026
    summary: Inventory, sales, shop debts and payment requests for a gadget reseller, shipped as v1.0.0.
    highlights:
      - Serial-number (IMEI) tracking with FIFO stock; profit follows later cost changes.
      - Four currencies with daily PrivatBank rate sync; nine KPI cards and debt and stock reports.
      - Docker-based production and staging, CI with tests, Semgrep and pip-audit; client and developer documentation sites.
    stack: [Python, Frappe/ERPNext, MariaDB, Docker, GitHub Actions]
order: 1
---
