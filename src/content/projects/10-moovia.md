---
title: MOOVIA — wearable de análisis del rendimiento en fuerza
org: MOOVIA · startup propia
role: Fundador y responsable técnico
period: Ago 2025 — actualidad
summary: >-
  Un sensor que se coloca en la barra y mide en tiempo real la velocidad de
  cada repetición. Lo he llevado de la idea a un prototipo funcional con
  usuarios de prueba, diseñando yo el hardware, el firmware y el algoritmo.
metrics:
  - value: 999 Hz
    label: de muestreo efectivo en streaming continuo
  - value: '0'
    label: paquetes perdidos en 20.670 muestras (20,7 s)
  - value: 0,03 m/s
    label: de diferencia en velocidad pico frente a un sistema VBT comercial
  - value: 8 / 8
    label: repeticiones contadas correctamente en la prueba de contraste
did:
  - 'Escribí desde cero el driver del IMU ICM-42688-P por SPI (FIFO, lecturas en ráfaga, ODR de 1 kHz).'
  - 'Desarrollé el firmware en C/C++ con FreeRTOS sobre un SoC Microchip WBZ351 (ARM Cortex-M4F, BLE 5.2).'
  - 'Definí un contrato BLE/GATT propio con numeración de secuencia para detectar pérdidas de datos.'
  - 'Implementé fusión de sensores (Madgwick, Kalman 1D y ZUPT) para calcular velocidad, altura y aceleración pico.'
  - 'Diseñé la PCB de 4 capas en KiCad, soldé los prototipos e hice el bring-up de la placa.'
  - 'Presenté el proyecto en B-Step, el programa de Barcelona Activa para startups del sector deportivo.'
tags: ['C/C++', 'FreeRTOS', 'ARM Cortex-M4F', 'BLE / GATT', 'SPI', 'KiCad', 'Python']
cover: 1
link: https://moovia.app
linkLabel: moovia.app
order: 10
---
