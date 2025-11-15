

🚀 Skillforge Prime Roadmap: The Adaptive Persona Engine (v1.2)


Overview

Goal: To create a platform with an unlimited scope for skill acquisition, where every activity is a single, adaptive Competency-Building Event (CBE) rendered simultaneously as an academic module (The Credential Track) and a massive multiplayer quest (The Skillforge Realm).
Monorepo Strategy: All development will use a monorepo structure on GitHub with independent service deployment via GitHub Actions and Cloud Run path filtering.

Phase 1: Foundational Architecture & Core Services (Completed ✅)

This phase establishes the base technology and initial, non-adaptive content capabilities.
✅ Core Platform Setup: Initialize Next.js, Dockerfile, and establish Firestore/Firebase authentication and database connection.
✅ Initial AI & Content: Implement initial data models (Users, Simple Lesson Plans) and the basic "Talos" AI assistant.

Phase 2: Content Factory & CBE Unification (To Do 📝)

This phase establishes the CBE as the single source of truth and the core data model for the Unified Content and Progression Layer (U-CPL).
📝 (Sequence 1) Implement the CBE JSON Schema as the master data model, including fields for Academic_Objective, Quest_Objective, Assessment_Method, Karmic_Impact, and Target_Skill.
📝 (Sequence 2) Refactor the Lesson Planner architecture to use Gemini's structured output to generate and validate the complete CBE JSON Schema.
📝 (Sequence 3) Refactor teacher/admin content tools to exclusively manage CBE objects via the new AI generation and editing flow.
📝 (Sequence 4) Implement a robust client-side state management solution (e.g., Zustand) for dynamic UI updates.

Phase 3: The Adaptive AI Ecosystem & Dual-Path Backbone (To Do 📝)

This phase builds the high-performance communication and AI logic, formalizing gRPC and MCP.
📝 (Sequence 1) Implement gRPC Definitions and Contracts using Protocol Buffers (.proto files) for all synchronous internal calls (Talos Agent $\leftrightarrow$ Skillforge Engine). (NEW)
📝 (Sequence 2) Implement gRPC for Talos Agent (B1): Expose a high-performance gRPC endpoint for receiving user/service queries, ensuring low latency. (UPDATED)
📝 (Sequence 3) Model Context Protocol (MCP) Integration: Implement the MCP Server logic within the Talos Agent (B1) to enable the LLM to dynamically discover and securely use external tools (ChromaDB, Skillforge Engine). (NEW)
📝 (Sequence 4) Implement the Semantic Search Engine (ChromaDB) and a robust Ingestion Pipeline (triggered by Pub/Sub) to vectorize CBE Markdown Content upon creation.
📝 (Sequence 5) Implement the Vector Database (RAG foundation) for the Talos Agent, pointing it to the ChromaDB vector store for universal knowledge access.
📝 (Sequence 6) Implement the Adaptive Persona Engine logic: Skills Graph tracking, Profession Tags, and Karmic Alignment scores.

Phase 4: The Universal Interface & Immersive Reality (To Do 📝)

This phase focuses on the front-end rendering and the high-impact immersive features.
📝 (Sequence 1) Implement the Dual-Path Choice interface upon login (Credential Track vs. Skillforge Realm).
📝 (Sequence 2) Build the Traditional Path UI (LMS View) and the Co-Curricular Transcript generator.
📝 (Sequence 3) Build the Game-World Path UI (RPG View), displaying CBEs as quests and rendering Profession Tags as class abilities.
📝 (Sequence 4) Develop the prototype for the Runescape-Style VR/AR Environment (Extending the virtual field trip), configured to use HTTP/2 for gRPC streaming. (UPDATED)
📝 (Sequence 5) Implement the Haptic Suit Integration prototype for realistic simulation training and physical feedback.

📜 Skillforge Prime: Full Software Bill of Materials (SBOM)

This SBOM reflects the necessary components for the Skillforge Prime microservice architecture, including the high-performance communication layers (gRPC) and the agentic AI protocol (MCP).
Category
Component Name
Version
Unique Identifier (PURL/CPE)
License (SPDX)
Dependency Relationship
Core Framework
Next.js
[TBD]
pkg:npm/next
MIT
ROOT
Game Engine
Unreal Engine 5 (UE5)
5.x
Proprietary
Royalty-based/Custom
ROOT
Database (Vector)
ChromaDB
[TBD]
pkg:pypi/chromadb
Apache-2.0
ROOT/Ingestion Pipeline
Database (Primary)
Google Firestore
[TBD]
pkg:gcp/firestore
Google Cloud T.O.S.
ROOT
AI/LLM Service
Google Gemini API
[TBD]
pkg:google/gemini
Google Cloud T.O.S.
Lesson Planner/Talos Agent


Layer 1: The AI/Backend Ecosystem (gRPC & MCP)

This layer includes the Python dependencies critical for the CBE generation and the RAG-powered Adaptive AI Ecosystem.
Component Name
Version
Unique Identifier (PURL)
License (SPDX)
Dependency Relationship
Python
3.11+
pkg:pypi/python
Python License
ROOT
Protocol Buffers
[TBD]
pkg:pypi/protobuf
BSD
gRPC Data Serialization
gRPC Tools/Runtime
[TBD]
pkg:pypi/grpcio
Apache-2.0
gRPC Server/Client Implementation
MCP Client/Server SDK
[TBD]
pkg:pypi/mcp-sdk
MIT/Apache-2.0
Model Context Protocol Implementation
Pydantic
[TBD]
pkg:pypi/pydantic
MIT
Lesson Planner (JSON Schema/CBE)
Gemini Client SDK
[TBD]
pkg:pypi/google-genai
Apache-2.0
Lesson Planner / Talos Agent
Cloud Pub/Sub Client
[TBD]
pkg:pypi/google-cloud-pubsub
Apache-2.0
Asynchronous Communication


Layer 2: Frontend & Client-Side Logic

This layer represents the core tools for the user interface and game presentation.
Component Name
Version
Unique Identifier (PURL)
License (SPDX)
Dependency Relationship
React
[TBD]
pkg:npm/react
MIT
ROOT
TypeScript
[TBD]
pkg:npm/typescript
Apache-2.0
Development Tool
Zustand / Redux Toolkit
[TBD]
pkg:npm/zustand
MIT
State Management (Karmic/Skills)
gRPC-Web Proxy
[TBD]
pkg:npm/grpc-web
Apache-2.0
Browser Compatibility (for gRPC)
Three.js / React Three Fiber
[TBD]
pkg:npm/three
MIT
AR/VR Environment Rendering


Layer 3: Game Development & Cloud Infrastructure

This layer covers the core tools for heavy computational workloads and deployment.
Component Name
Version
Unique Identifier (PURL)
License (SPDX)
Dependency Relationship
Unreal Engine Source
5.x
Proprietary
Royalty-based
Game Logic/Rendering
C++ Compiler (GCC)
[TBD]
pkg:gnu/g++/
GPLv3
Game Logic (Core Engine)
Docker
[TBD]
pkg:docker/docker
Apache-2.0
CI/CD and Deployment
Golem Network SDK
[TBD]
pkg:pypi/golem
MIT/Apache-2.0
Distributed Computing Offload
Livepeer Network SDK
[TBD]
pkg:npm/livepeer
MIT
Decentralized Video/Comms


