import React, { useState, useEffect, useContext } from 'react';
import '../styles/dashboard.css';
import RouteGuard from '../components/routeguard';
import Layout from '../components/Layout/layout';

const Results = () => {
  return (
    <div>
      <Layout>
        <RouteGuard />
        <div
          style={{
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '10px'
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Results and Personalized Protocol
          </h1>
          <hr style={{ marginBottom: '10px' }} />
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
            }}
          >
            At BeOne, we believe in delivering personalized health solutions tailored to individual needs. Our Results and Personalized Protocol feature is designed to provide comprehensive insights and customized plans for each user.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
            }}
          >
            With our advanced analytics and cutting-edge technology, we analyze various health parameters and data points to generate detailed reports and recommendations. Our goal is to empower individuals with the knowledge and tools they need to optimize their health and well-being.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
            }}
          >
            The Results section of our platform presents a clear overview of your health status, highlighting key metrics and areas of improvement. We provide detailed analysis and interpretation of your test results, helping you understand the implications and take proactive steps towards better health.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
            }}
          >
            Additionally, our Personalized Protocol feature takes into account your unique health profile, lifestyle factors, and goals to create a tailored plan for you. Whether you're looking to manage a specific condition, optimize your nutrition, or enhance your fitness routine, our platform generates personalized recommendations and guidelines to support your journey.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
            }}
          >
            BeOne's Results and Personalized Protocol feature is backed by a team of experts, including doctors, nutritionists, and fitness professionals, who continuously update our algorithms and recommendations based on the latest research and scientific findings.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
            }}
          >
            Join BeOne today and unlock the power of personalized health. Take control of your well-being with our Results and Personalized Protocol, and embark on a journey towards a healthier, happier you.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Results;
