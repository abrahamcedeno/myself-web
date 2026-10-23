---
title: 'Cómo desarrollar un dispositivo con Bluetooth: del prototipo a la PCB'
description: Las fases reales para convertir una idea en un dispositivo electrónico con BLE, qué microcontrolador elegir, cuánto tiempo lleva y los errores que más encarecen el proyecto.
date: 2026-10-23
service: desarrollo-sistemas-embebidos
tags: [desarrollo dispositivo bluetooth, firmware BLE, ESP32, nRF52, diseño PCB, prototipo electrónico, sistemas embebidos]
---

**Respuesta corta:** un dispositivo con Bluetooth Low Energy (BLE) se desarrolla en cinco fases: **requisitos, prototipo con placa de desarrollo, firmware, PCB propia y validación**. Un primer prototipo funcional puede estar listo en **3 a 8 semanas** si el alcance está claro. Lo que más encarece un proyecto no es la electrónica, sino cambiar los requisitos a mitad de camino.

Lo explico con el ejemplo de [MOOVIA](https://moovia.app), un sensor para entrenamiento de fuerza que diseñé de principio a fin: placa, firmware y algoritmo.

## 1. Requisitos: qué tiene que hacer exactamente

Antes de elegir ningún chip hay que responder por escrito:

- **Qué mide o controla** el dispositivo, y con qué precisión.
- **Cada cuánto envía datos** y a dónde: ¿una app del móvil, una pasarela, la nube?
- **Batería:** cuánto tiene que durar y qué tamaño puede tener.
- **Tamaño, entorno** (agua, golpes, temperatura) y **coste objetivo** por unidad.

En MOOVIA el requisito clave era medir la velocidad de una barra con un error comparable al de un sistema comercial. Eso obligó a muestrear el sensor a 1 kHz y a no perder ni una muestra por Bluetooth.

## 2. Elegir el microcontrolador

Con BLE, la mayoría de proyectos acaban en una de estas familias:

| Familia | Cuándo encaja | A tener en cuenta |
|---|---|---|
| **ESP32** (Espressif) | Prototipos rápidos, wifi + BLE, mucha comunidad | Consume más; no es lo ideal para años con pila de botón |
| **nRF52 / nRF54** (Nordic) | Wearables y sensores de bajo consumo | Referencia en BLE; curva de aprendizaje con Zephyr |
| **STM32WB** (ST) | Si ya trabajas con el ecosistema STM32 | Buen equilibrio entre consumo y periféricos |
| **WBZ35x** (Microchip) | BLE con Cortex-M4F y FreeRTOS | Es el que usé en MOOVIA |

Un consejo que ahorra meses: **usa un módulo con antena y certificación de radio ya incluidas** en lugar del chip suelto. Diseñar la antena y certificarla es caro y lento.

## 3. Prototipo con placa de desarrollo

Antes de diseñar ninguna PCB, el sistema se monta con placas de desarrollo y módulos de sensores conectados con cables. El objetivo es **demostrar que la idea funciona** cuanto antes:

- ¿El sensor da datos fiables?
- ¿El Bluetooth llega a la velocidad necesaria?
- ¿El consumo es razonable?

Esta fase es barata y es donde más se aprende. Saltársela para «ir más rápido» es el error más caro que veo.

## 4. Firmware: donde está la mayor parte del trabajo

El firmware es el programa que corre dentro del microcontrolador. Normalmente se escribe en **C o C++**, a menudo sobre un sistema operativo de tiempo real como **FreeRTOS**. Incluye:

- **Drivers** de los sensores (SPI, I2C, UART).
- El **servicio BLE (GATT)**: qué datos se envían, cómo y con qué control de errores.
- **Gestión de energía**: dormir el máximo tiempo posible.
- **Procesado de señal**: filtrar, calibrar y calcular la métrica final.

En MOOVIA escribí el driver del sensor desde cero para leerlo a 1 kHz. Además diseñé un protocolo BLE con numeración de paquetes para detectar cualquier pérdida: en las pruebas, **0 paquetes perdidos en más de 20.000 muestras**.

## 5. Diseño de la PCB

Cuando el prototipo funciona, se diseña la placa propia, normalmente en **KiCad**:

1. **Esquemático:** qué componentes y cómo se conectan.
2. **Layout:** colocar componentes y trazar pistas. Con radio, la zona de la antena manda.
3. **Ficheros de fabricación:** Gerbers, lista de materiales (BOM) y posiciones de montaje.

Fabricar y montar unas pocas placas de prueba en fabricantes asiáticos es asequible hoy en día, pero la primera versión **casi nunca sale perfecta**. Cuenta con al menos dos iteraciones.

## 6. Validación con medidas reales

Un dispositivo no está terminado porque «parece que funciona». Hay que medir:

- Señales con **osciloscopio y analizador lógico**.
- **Consumo real** en cada modo.
- **Precisión** frente a una referencia. En MOOVIA, la diferencia con un sistema comercial fue de **0,03 m/s**.

## 7. Antes de vender: marcado CE

Para vender en la Unión Europea un equipo con radio, el producto debe cumplir la **Directiva de Equipos Radioeléctricos (RED)** y llevar el marcado CE. Usar un módulo de radio ya certificado simplifica mucho el proceso, pero el producto final sigue necesitando su evaluación. Es una fase que conviene planificar desde el principio con un laboratorio de ensayos.

## Errores que más encarecen un proyecto

- Empezar por la PCB sin un prototipo que funcione.
- No fijar los requisitos por escrito y cambiarlos a mitad de proyecto.
- Elegir el chip por precio unitario sin mirar consumo, herramientas ni disponibilidad.
- No guardar el código en Git ni documentar las decisiones: si cambia el desarrollador, se empieza de cero.

## ¿Cuánto cuesta?

Depende sobre todo del alcance. Como referencia, en mis servicios trabajo con tres niveles, IVA no incluido:

- **Diagnóstico**, desde 50 €: reviso tu código o tu placa y desbloqueo un problema concreto.
- **Funcionalidad**, desde 500 €: un driver, un servicio BLE o una tarea de FreeRTOS, probados en hardware.
- **Dispositivo completo**, desde 1.100 €: arquitectura, firmware, PCB y validación.

Tienes el detalle y el proceso en la página de [desarrollo de sistemas embebidos](/servicios/desarrollo-sistemas-embebidos).
