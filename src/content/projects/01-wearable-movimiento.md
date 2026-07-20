---
title: Wearable de medición de movimiento
summary: >-
  Firmware en tiempo real para capturar el movimiento de una barra en
  entrenamiento de fuerza y entregar métricas fiables con batería y recursos
  limitados. Driver de IMU desarrollado desde cero por SPI (FIFO, burst reads,
  ODR) y comunicación BLE GATT, validado con osciloscopio y analizador lógico.
tags: ['C/C++', 'FreeRTOS', 'ARM Cortex-M4', 'SPI', 'BLE', 'KiCad']
cover: 1
order: 1
---

## Contexto

Dispositivo wearable para deporte de rendimiento que debía capturar el
movimiento de una barra durante entrenamientos de fuerza y entregar métricas en
tiempo real, funcionando con batería y recursos muy limitados.

## Reto

Sacar una señal de movimiento estable y de alta frecuencia de un IMU, sin
perder muestras, manteniendo un consumo bajo y una latencia acotada para poder
transmitir por BLE.

## Qué hice

- Firmware en C/C++ sobre un SoC wireless ARM Cortex-M4 con FreeRTOS,
  con arquitectura HAL / driver / aplicación.
- Driver de IMU **desde cero** por SPI: configuración de FIFO, *burst reads* y
  tasa de muestreo (ODR) para no perder datos.
- Comunicación **BLE GATT** para telemetría hacia la app.
- Validación con osciloscopio y analizador lógico.

## Resultado

Pipeline de captura estable a 100–200 Hz y una base de datos de señal fiable
para el análisis posterior de rendimiento.
