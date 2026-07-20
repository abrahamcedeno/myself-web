---
title: Algoritmo de fusión de sensores
summary: >-
  Estimación de orientación y trayectoria 3D a partir de un IMU, con detección
  de repeticiones y cálculo de métricas de rendimiento. Filtro Madgwick por
  cuaterniones, Kalman 1D por eje con ZUPT y detección de la fase propulsiva.
tags: ['Madgwick', 'Kalman 1D', 'Cuaterniones', 'ZUPT', 'Procesado de señal']
categories: ['techsport', 'iot']
cover: 2
order: 2
---

## Contexto

A partir de la señal cruda de un IMU, había que estimar la orientación y la
trayectoria en 3D y, sobre eso, detectar y medir las repeticiones de un
ejercicio.

## Reto

La integración directa de la aceleración deriva rápidamente. Se necesitaba una
cadena de procesado robusta que entregara métricas repetibles y creíbles.

## Qué hice

- **Filtro Madgwick** para estimar la orientación mediante cuaterniones.
- **Kalman 1D por eje** con ZUPT (*Zero-Velocity Update*) para controlar la
  deriva, y estimación de gravedad por EMA.
- Detección de la **fase propulsiva** y cálculo de métricas: velocidad media
  propulsiva (VMP), altura y aceleración pico.
- Documentación técnica de los *trade-offs* de cada decisión.

## Resultado

Métricas de rendimiento fiables a partir de señal ruidosa, con la cadena de
procesado documentada y justificada.
