import { useMemo } from 'react';
import React from 'react';
import {
  Shield,
  Zap,
  Award,
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
      icon: React.createElement(Zap, { className: "w-8 h-8" }),
      title: "Rapid Deployment",
      description: "Get operational within hours with our portable ROV systems",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: React.createElement(Shield, { className: "w-8 h-8" }),
      title: "24/7 Operations",
      description: "Continuous underwater monitoring and inspection capabilities",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: React.createElement(Award, { className: "w-8 h-8" }),
      title: "Cost Effective",
      description: "Indigenous technology delivering premium results at competitive rates",
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
      icon: React.createElement(Target, { className: "w-8 h-8" }),
      title: 'Innovation First',
      description: 'Pushing boundaries in underwater robotics technology'
    },
    {
      icon: React.createElement(Users, { className: "w-8 h-8" }),
      title: 'Team Excellence',
      description: 'Collaborative approach with diverse expertise'
    },
    {
      icon: React.createElement(Award, { className: "w-8 h-8" }),
      title: 'Quality Commitment',
      description: 'Delivering reliable solutions that exceed expectations'
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