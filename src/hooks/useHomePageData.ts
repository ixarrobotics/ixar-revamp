import { useMemo } from 'react';
import React from 'react';
import {
  Eye,
  Compass,
  BookOpen,
  Users,
  Target
} from 'lucide-react';
import { Feature, Product, CompanyValue, ClientLogo } from '../types';

import iitLogo from '../assets/iit.ef6ee85c.png';
import mitgLogo from '../assets/mitg.1a413d64.jpeg';
import msmeLogo from '../assets/mitg.1a413d64.jpeg';
import sineLogo from '../assets/sine.558e30bd.jpeg';

export const useHomePageData = () => {
  const features = useMemo<Feature[]>(() => [
    {
      icon: React.createElement(BookOpen, { className: "w-8 h-8" }),
      title: "Our Story",
      description: "We solve the ineffectiveness of traditional inspection methods which often leading to poor asset management by revolutionizing underwater inspections with in-house ROVs and Crawlers powered by robotics, AI, and precision engineering to deliver unmatched clarity, safety, and confidence",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: React.createElement(Users, { className: "w-8 h-8" }),
      title: "Our Expertise",
      description: "Our team blends 5+ years of expertise in robotics, underwater inspection, and non-destructive testing with hands-on experience across offshore oil & gas assets, marine infrastructure, industrial tanks, and inland water systems.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: React.createElement(Target, { className: "w-8 h-8" }),
      title: "Our Commitment",
      description: "We are committed to pushing the boundaries of what's possible in underwater robotics, continuously innovating to solve our clients' most challenging inspection requirements while minimizing environmental impact and operational risk.",
      color: "from-blue-400 to-cyan-500"
    }
  ], []);

  const products = useMemo<Product[]>(() => [
    {
      name: "ROV 1.0",
      description: "Entry-level solution perfect for basic inspections and surveys",
      specs: ["200m depth rating", "6000 lumen illumination", "1080p HD camera"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-blue-500 to-cyan-500",
      link: "/product"
    },
    {
      name: "ROV Pro",
      description: "Professional-grade system for advanced underwater operations",
      specs: ["500m depth rating", "Advanced sensor suite", "4K recording"],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-purple-500 to-pink-500",
      link: "/rovpro"
    },
    {
      name: "ROV2",
      description: "Next-generation autonomous underwater vehicle",
      specs: ["1000m depth rating", "AI-powered navigation", "Multi-sensor array"],
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-emerald-500 to-teal-500",
      link: "/rov2"
    }
  ], []);

  const companyValues = useMemo<CompanyValue[]>(() => [
    {
      icon: React.createElement(Eye, { className: "w-8 h-8" }),
      title: 'Vision',
      description: 'To be the world’s most trusted provider of underwater intelligence by making critical infrastructure safer, more resilient and more sustainable'
    },
    {
      icon: React.createElement(Compass, { className: "w-8 h-8" }),
      title: 'Mission',
      description: 'To deliver precise, rapid and thorough underwater inspection data using rugged, in-house robotic systems and expert engineering analysis'
    }
  ], []);

  const clientLogos = useMemo<ClientLogo[]>(() => [
    { src: iitLogo, alt: 'IIT Bombay' },
    { src: mitgLogo, alt: 'MITG' },
    { src: msmeLogo, alt: 'MSME' },
    { src: sineLogo, alt: 'SINE' },
    { src: iitLogo, alt: 'IIT Bombay' }, // Duplicate for seamless loop
    { src: mitgLogo, alt: 'MITG' },
    { src: msmeLogo, alt: 'MSME' },
    { src: sineLogo, alt: 'SINE' },
  ], []);

  return {
    features,
    products,
    companyValues,
    clientLogos
  };
};