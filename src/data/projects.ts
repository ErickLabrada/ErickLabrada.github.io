import itzai from "@/assets/projects/itzai.png";
import sully from "@/assets/projects/sully.png";
import anam from "@/assets/projects/ANAM.png";
import peerReview from "@/assets/projects/peer-review.png";
import sartre from "@/assets/projects/sartrecat.png";
import omniAereaImage from "@/assets/projects/omniaerea.png";
import opengo from "@/assets/projects/open-go-readme.png";
import engine3d from "@/assets/projects/3D_Engine.gif";
import facecat from "@/assets/projects/facecat.png";
import ecommerceAdmin from "@/assets/projects/ecommerceAdmin.png";
import ecommerceStorefront from "@/assets/projects/ecommerceStorefront.png";

export type ProjectCategory = "professional" | "personal";

export type Project = {
  slug: string;
  title: string;
  translationKey: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  rotation: number;
  visibleInArchive: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-assistant",
    title: "AI Communication Assistant",
    translationKey: "itzai",
    category: "professional",
    image: itzai,
    technologies: ["Python", "MongoDB", "Hugging Face"],
    rotation: -1.2,
    visibleInArchive: true,
  },
  {
    slug: "ticket-receiver",
    title: "Distributed Ticket Receiver",
    translationKey: "ticketReceiver",
    category: "professional",
    image: sully,
    technologies: ["Django", "JavaScript", "PostgreSQL", "Celery"],
    rotation: 0.9,
    visibleInArchive: true,
  },
  {
    slug: "ticket-migration",
    title: "Ticket Source Service Migration",
    translationKey: "ticketMigration",
    category: "professional",
    image: anam,
    technologies: ["NestJS", "Angular","PostgreSQL", "Docker"],
    rotation: -0.6,
    visibleInArchive: true,
  },
  {
    slug: "ecommerce-admin",
    title: "Ecommerce Admin Site",
    translationKey: "ecommerce-admin",
    category: "professional",
    image: ecommerceAdmin,
    technologies: ["NestJS", "Angular", "PostgreSQL", "Redis", "Docker"],
    rotation: 1.4,
    visibleInArchive: true,
  },
  {
    slug: "ecommerce-storefront",
    title: "Ecommerce Storefront",
    translationKey: "ecommerce-storefront",
    category: "professional",
    image: ecommerceStorefront,
    technologies: ["NestJS", "Svelte", "PostgreSQL", "Redis", "Docker"],
    rotation: -0.8,
    visibleInArchive: true,
  },
  {
    slug: "omniaerea",
    title: "OmniAerea",
    translationKey: "omniAerea",
    category: "personal",
    image: omniAereaImage,
    technologies: ["Python", "Playwright"],
    rotation: 1.1,
    visibleInArchive: true,
  },
  {
    slug: "3d-engine",
    title: "3D Engine",
    translationKey: "engine3d",
    category: "personal",
    image: engine3d,
    technologies: ["Java"],
    rotation: -1.4,
    visibleInArchive: false,
  },
  {
    slug: "sartres-cat",
    title: "Sartre's Cat",
    translationKey: "sartreCat",
    category: "personal",
    image: sartre,
    technologies: ["Vue", "TypeScript", "Python", "Hugging Face", "Docker"],
    rotation: -0.9,
    visibleInArchive: true,
  },
  {
    slug: "peer-review",
    title: "Peer Review Automation",
    translationKey: "peerReview",
    category: "personal",
    image: peerReview,
    technologies: ["Python", "Playwright", "OpenAI API"],
    rotation: 1.3,
    visibleInArchive: true,
  },
  {
    slug: "facecat",
    title: "FaceCat",
    translationKey: "facecat",
    category: "personal",
    image: facecat,
    technologies: ["Python", "PyTorch","ResNet","TypeScript", "RabbitMQ"],
    rotation: -1.1,
    visibleInArchive: true,
  },
  {
    slug: "open-go-readme",
    title: "Open Go Readme",
    translationKey: "openGoReadme",
    category: "personal",
    image: opengo,
    technologies: ["Go", "OpenAI API"],
    rotation: 0.7,
    visibleInArchive: true,
  },
];

export const professionalProjects = projects.filter(
  (project) => project.category === "professional" && project.visibleInArchive,
);

export const personalProjects = projects.filter(
  (project) => project.category === "personal" && project.visibleInArchive,
);

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, Project>;
