---
title: "Snaplot"
description: "A high-performance canvas chart library for streaming data and interactive dashboards."
summary: "A fast, framework-free charting library designed for dense, live data and responsive dashboard interactions."
status: "Open source"
weight: 1
externalURL: "https://liamjamesclark.com/snaplot/"
tags:
  - TypeScript
  - Canvas
  - Data visualisation
---

Snaplot is a canvas-based chart library I built for streaming data and interactive dashboards. It renders line, area, scatter, bar, histogram, and band charts from columnar data, with a focus on keeping dense, live visualisations fast and responsive.

It has also been a practical exploration of AI-driven development for me: using AI deeply throughout the process while staying deliberate about architecture, performance, correctness, and the final developer experience.

## What makes it interesting

- Handles more than 200,000 points at 60 fps through layered canvases, viewport culling, and streaming ring buffers
- Supports drag, wheel, pinch, keyboard, and touch interactions, along with cross-chart cursor and highlight synchronisation
- Keeps the core framework-free while providing SolidJS components and reactive primitives
- Includes strict TypeScript types, theming, plugins, and utilities for downsampling and histograms

[Explore the documentation and live demos](https://liamjamesclark.com/snaplot/) or [install Snaplot from npm](https://www.npmjs.com/package/snaplot). The [source is available on GitHub](https://github.com/liamclarkza/snaplot).
