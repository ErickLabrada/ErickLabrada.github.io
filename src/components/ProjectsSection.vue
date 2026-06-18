<script setup lang="ts">
import Polaroid from "@/components/Polaroid.vue";

/* Images */
import aiAssistant from "@/assets/projects/AI_Assistant.jpg";
import sully from "@/assets/projects/sully.png";
import anam from "@/assets/projects/ANAM.png";
import peerReview from "@/assets/projects/peer-review.png";
import prompt from "@/assets/projects/prompt.png";
import me from "@/assets/me.jpg";
import sartre from "@/assets/projects/sartrecat.png";
import dailyAI from "@/assets/projects/DailyAI.png";
import opengo from "@/assets/projects/open-go-readme.png";
import greenHouse from "@/assets/projects/GreenHouse.png";
import cia from "@/assets/projects/CIA.png";
import engine3d from "@/assets/projects/3D_Engine.gif";
import wbot from "@/assets/projects/wbot.png";
</script>

<template>
  <section class="projects-section">
    <!-- HEADER -->
    <header class="section-header">
      <p class="section-label">Archive</p>

      <h2>Things I've Built</h2>

      <p class="section-description">
        A collection of software, experiments, and occasional rabbit holes.
        Some were built professionally, others started as curiosity and grew
        into something larger.
      </p>
    </header>

    <!-- PROFESSIONAL -->
    <div class="projects-group">
      <div class="group-header">
        <h3>Professional Work</h3>

        <p>
          Systems built for real teams, real users, and real business needs.
        </p>
      </div>

      <div class="featured-grid">
        <Polaroid
          title="AI Communication Assistant"
          description="Multi-component AI assistant for real-time business communication"
          full-description="Designed and implemented an AI-powered assistant with intent detection and a custom RAG pipeline using Hugging Face models. Built backend with Python and MongoDB. NDA restricts public UI/source."
          :image-src="aiAssistant"
          :rotation="-2"
          :technologies="['Python', 'MongoDB', 'Hugging Face']"
        />

        <Polaroid
          title="Distributed Ticket Receiver"
          description="Task management system for distributed workflows"
          full-description="Real-time dashboard for automated task processing and synchronized updates across distributed services."
          :image-src="sully"
          :rotation="2"
          :technologies="['Django', 'JavaScript', 'PostgreSQL', 'Redis']"
        />

        <Polaroid
          title="Ticket Source Service Migration"
          description="Refactor of legacy system into NestJS architecture"
          full-description="Migrated a legacy JS system into NestJS, improving scalability and maintainability with structured backend design."
          :image-src="anam"
          :rotation="-1"
          :technologies="['NestJS', 'PostgreSQL']"
        />
      </div>
    </div>

    <!-- PERSONAL -->
    <div class="projects-group">
      <div class="group-header">
        <h3>Experiments & Side Quests</h3>

        <p>
          Learning projects, automation tools, strange ideas, and things I
          wanted to see exist.
        </p>
      </div>

      <div class="stagger-grid">
        <Polaroid
          class="p1"
          title="DailyAI"
          description="Automated standup reporting tool using LLMs"
          full-description="Scrapes kanban activity with Playwright, enriches via GitLab API, generates structured reports using LLMs, and outputs via text-to-speech for meetings."
          :image-src="dailyAI"
          :rotation="-3"
          :technologies="['Python', 'Playwright', 'OpenAI API']"
        />

        <Polaroid
          class="p2"
          title="Distributed Greenhouse System"
          description="IoT monitoring platform with microservices architecture"
          full-description="Aggregates sensor data, detects thresholds, triggers SMS alerts via Twilio, and uses RabbitMQ for async communication. Includes ESP32 simulator."
          :image-src="greenHouse"
          :rotation="2"
          :technologies="['NestJS', 'RabbitMQ', 'MongoDB', 'MySQL', 'ESP32']"
        />

        <Polaroid
          class="p3"
          title="Academic Information System (CIA)"
          description="Enrollment system with validation and scheduling rules"
          full-description="Microfrontend-based academic system with JWT auth, prerequisite validation, and schedule conflict detection."
          :image-src="cia"
          :rotation="-1"
          :technologies="['JavaScript', 'JWT', 'Microfrontends']"
        />

        <Polaroid
          class="p4"
          title="3D Engine"
          description="Custom software rendering engine"
          full-description="Built from scratch using linear algebra concepts like projection matrices and rotation transforms for real-time rendering."
          :image-src="engine3d"
          :rotation="3"
          :technologies="['Java', 'Linear Algebra']"
        />

        <Polaroid
          class="p5"
          title="Photography Studio System"
          description="Backend + WhatsApp booking automation"
          full-description="Backend system for studio management with WhatsApp chatbot integration for booking and inquiries."
          :image-src="wbot"
          :rotation="-2"
          :technologies="['NestJS', 'TypeScript', 'MySQL', 'BuilderBot']"
        />

        <Polaroid
          title="Sartre's Cat"
          description="Anonymous feedback collection platform for self-reflection."
          full-description="A personal experiment built around a simple question: how do people perceive me when they can answer completely anonymously? The platform collects written responses and stores them for later analysis. The long-term goal is to apply sentiment analysis, clustering, and NLP techniques to identify recurring themes, blind spots, and patterns in how others experience me."
          :image-src="sartre"
          :rotation="-2"
          :technologies="['Vue', 'TypeScript', 'NLP', 'Data Analysis']"
        />

        <Polaroid
          title="Peer Review Automation"
          description="Automated analysis of merge requests and review patterns."
          full-description="A backend automation system that analyzes code review behavior across GitLab merge requests. It extracts reviewer patterns, comment density, and quality signals to generate structured insights for engineering teams. Built to improve review consistency and highlight bottlenecks in the development workflow."
          :image-src="peerReview"
          :rotation="2"
          :technologies="['Python', 'GitLab API', 'NLP', 'Automation']"
        />

        <Polaroid
          title="Prompt Generator"
          description="AI-assisted bootstrap generation from Kanban tasks."
          full-description="A personal productivity utility that extracts task information from a custom Kanban board and automatically generates structured prompts for AI-assisted development. The system gathers context from task metadata, requirements, and related artifacts, producing prompts that accelerate project bootstrapping, implementation planning, and documentation workflows."
          :image-src="prompt"
          :rotation="-1"
          :technologies="['Python', 'Playwright', 'LLMs', 'Automation']"
        />
         <Polaroid
          title="Open Go Readme"
          description="CLI tool that generates README files from Go projects"
          full-description="Scans Go repositories, builds AST-based file summaries, selects relevant files using an LLM, and generates structured README.md files using a two-pass context-aware pipeline."
          :image-src="open-go"
          :rotation="-1"
          :technologies="['Go', 'OpenAI API', 'AST parsing', 'CLI']"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* HEADER */
.section-header h2 {
  font-size: 2rem;
  margin: 0;
}

.section-header p {
  margin-top: 10px;
  color: #b5bfd1;
  line-height: 1.6;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #7f8aa3;
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.section-description {
  max-width: 650px;
}

/* GROUPS */
.group-header {
  margin-bottom: 24px;
}

.group-header h3 {
  margin-bottom: 8px;
  font-size: 1.3rem;
  color: #d7dbe6;
}

.group-header p {
  color: #a8b0c2;
  line-height: 1.6;
}

/* FEATURED GRID */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

/* STAGGER GRID */
.stagger-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: start;
}

/* STAGGER POSITIONING */
.p1 {
  grid-column: 1 / 2;
}

.p2 {
  grid-column: 3 / 4;
  transform: translateY(30px);
}

.p3 {
  grid-column: 2 / 3;
  transform: translateY(-10px);
}

.p4 {
  grid-column: 4 / 5;
  transform: translateY(20px);
}

.p5 {
  grid-column: 1 / 3;
  transform: translateY(10px);
}

@media (max-width: 1100px) {
  .featured-grid,
  .stagger-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .p1,
  .p2,
  .p3,
  .p4,
  .p5 {
    grid-column: auto;
    transform: none;
  }
}

@media (max-width: 768px) {
  .featured-grid,
  .stagger-grid {
    grid-template-columns: 1fr;
  }
}
</style>
