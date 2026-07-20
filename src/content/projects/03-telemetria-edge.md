---
title: Laboratorio de telemetría edge
summary: >-
  Pipeline IoT end-to-end, local y seguro: broker MQTT en Docker con
  autenticación, publisher/subscriber en Python con QoS y reconexión,
  healthcheck en Bash y endurecimiento básico (secretos fuera de git).
tags: ['MQTT', 'Docker', 'Linux', 'Bash', 'Python']
cover: 3
order: 3
---

## Contexto

Proyecto propio para dominar la capa de conectividad y nube del stack IoT:
montar un pipeline de telemetría de extremo a extremo, ejecutándose en local y
con criterios de seguridad desde el principio.

## Reto

Que la telemetría fuera **fiable y resiliente**: entrega garantizada, validación
del *payload* y recuperación automática ante caídas de red.

## Qué hice

- Broker **MQTT (Mosquitto)** en **Docker** con autenticación.
- *Publisher/subscriber* en **Python** con QoS y reconexión automática.
- *Healthcheck* en **Bash** y endurecimiento básico (secretos fuera de git).

## Resultado

Telemetría fiable con validación de *payload* y resiliencia ante caídas — la
base sobre la que seguir subiendo hacia Edge-AI y nube IoT.
