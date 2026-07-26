# AGENTS.md

# Marine Registration Services
AI Development Guide

This document defines the engineering standards every AI agent must follow while working on this repository.

This applies to:

- ChatGPT
- Claude Code
- Cursor AI
- GitHub Copilot
- Cline
- Codex
- Any automated coding agent

---

# Project Overview

Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- CMS (Headless)
- ESLint
- Prettier

Primary Goals

- Clean architecture
- Reusable components
- SEO optimized
- Fast loading
- Mobile first
- Production quality code
- Accessibility

---

# Core Principles

Always prioritize:

1. Readability
2. Maintainability
3. Performance
4. Type Safety
5. Reusability

Never optimize for writing less code.

Optimize for long-term maintenance.

---

# Architecture

Follow feature-based architecture.

Example:

src/

    app/
    components/
        common/
        layout/
        ui/
        forms/
        cards/

    features/
        services/
        blog/
        gallery/
        careers/
        testimonials/

    lib/
    hooks/
    types/
    services/
    utils/
    constants/

Never create random folders.

---

# Code Standards

## TypeScript

Always use strict typing.

Avoid:

```ts
any
```

Instead use:

- interfaces
- type aliases
- generics

Never disable TypeScript errors.

---

## React

Prefer:

- Server Components

Use Client Components only when required.

Examples:

- forms
- state
- animations
- browser APIs

---

## Components

Components should be:

- Small
- Focused
- Reusable

Avoid components larger than 250 lines.

If a component grows too much:

Split it.

---

## Props

Always create explicit interfaces.

Example

```ts
interface ServiceCardProps {
    title: string
    description: string
}
```

---

# Styling

Use Tailwind only.

Avoid:

- inline styles
- custom CSS
- !important

Extract repeated utility classes into reusable components.

Maintain consistent spacing.

Preferred spacing:

- 4
- 6
- 8
- 12
- 16

---

# Naming

Use:

PascalCase

```
ServiceCard.tsx
```

camelCase

```
getServices()
```

UPPER_CASE

```
API_URL
```

Avoid abbreviations.

Good:

```
registrationService
```

Bad:

```
regSvc
```

---

# Imports

Order imports:

1. React
2. Next
3. Third-party libraries
4. Internal aliases
5. Relative imports

Example

```ts
import Link from "next/link"

import clsx from "clsx"

import { Button } from "@/components/ui/button"

import "./styles.css"
```

---

# Folder Rules

Never place:

- business logic inside UI components

Business logic belongs inside:

- hooks
- services
- utilities

---

# API Layer

Never fetch directly inside UI components unless necessary.

Preferred:

```
services/

lib/

server actions
```

Keep API logic centralized.

---

# Error Handling

Never silently fail.

Always:

- catch errors
- show useful messages
- log unexpected errors

Example

```ts
try {

} catch (error) {

}
```

---

# Forms

Use:

- React Hook Form
- Zod validation

Validation should exist on:

- client
- server

---

# CMS

CMS is the source of truth.

Never hardcode CMS content.

Content includes:

- Services
- Blogs
- FAQs
- Downloads
- Testimonials
- Gallery
- Homepage

---

# SEO

Every page should include:

- title
- description
- Open Graph
- Twitter metadata
- canonical URL

Use Next Metadata API.

Generate:

- sitemap
- robots

---

# Accessibility

Always include:

- semantic HTML
- aria labels
- keyboard navigation
- image alt text

Do not ignore accessibility warnings.

---

# Images

Use:

next/image

Always specify:

- width
- height
- alt

Avoid regular img tags.

---

# Performance

Minimize:

- client components
- JavaScript bundle size
- unnecessary rerenders

Use:

- dynamic imports
- lazy loading
- memoization only when needed

---

# State Management

Prefer:

1. Server State
2. URL State
3. Local State

Avoid unnecessary global state.

---

# Environment Variables

Never hardcode:

- API keys
- tokens
- secrets

Use:

```
.env.local
```

Access only through:

```
process.env
```

---

# Security

Never expose secrets.

Validate all input.

Sanitize user-generated content.

Escape HTML when necessary.

---

# Logging

Development:

console.log allowed

Production:

Remove unnecessary logs.

---

# Testing

When adding features:

- test happy path
- test validation
- test edge cases

---

# Git

Commit messages

Good

```
feat: add services search

fix: resolve gallery pagination

refactor: simplify quote form validation
```

Bad

```
changes

update

fix
```

---

# Before Writing Code

AI must:

1. Read surrounding files
2. Understand architecture
3. Reuse existing components
4. Follow existing naming
5. Avoid duplicate code

---

# Before Creating New Components

Check whether a similar component already exists.

Prefer extension over duplication.

---

# When Refactoring

Maintain:

- behavior
- API
- accessibility
- responsiveness

Do not introduce breaking changes without necessity.

---

# Documentation

Public utilities should include concise comments explaining purpose.

Avoid commenting obvious code.

Good:

```ts
// Converts CMS response into UI-friendly model.
```

Bad:

```ts
// Increment i
i++
```

---

# Responsive Design

Design mobile-first.

Target breakpoints:

- Mobile
- Tablet
- Desktop
- Large Desktop

---

# File Size Guidelines

Component

< 250 lines

Hook

< 200 lines

Utility

< 150 lines

Split large files.

---

# AI Agent Rules

Before making changes:

- Understand the task completely.
- Search for existing implementations before creating new code.
- Reuse existing utilities whenever possible.
- Do not introduce new libraries unless requested.
- Preserve coding style already established in the repository.
- Do not remove comments or documentation unless they are obsolete.
- Keep changes minimal and focused on the requested task.
- If assumptions are required, clearly state them.
- Never modify unrelated files.

---

# Definition of Done

A task is complete only when:

- Builds successfully.
- No TypeScript errors.
- No ESLint errors.
- Responsive.
- Accessible.
- SEO considered.
- Uses reusable components.
- No duplicated logic.
- No unused imports.
- No dead code.
- Production ready.

---

# Golden Rule

Write code as if another senior engineer will maintain it for the next five years.

Favor clarity over cleverness.