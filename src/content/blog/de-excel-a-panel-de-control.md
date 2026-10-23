---
title: 'De Excel a un panel de control: cuándo merece la pena dar el salto'
description: Señales de que tu empresa ha superado el Excel, qué es un panel de control a medida, cómo se construye y cuánto cuesta frente a herramientas como Power BI o Looker Studio.
date: 2026-10-23
service: paneles-de-control
tags: [panel de control empresa, dashboard a medida, cuadro de mando, Excel a dashboard, KPIs, Power BI, dashboard IoT]
---

**Respuesta corta:** merece la pena pasar de Excel a un panel de control cuando **dedicas horas cada semana a juntar datos a mano**, cuando varias personas trabajan con versiones distintas del mismo archivo o cuando necesitas ver los datos **en tiempo real**. Un panel sencillo puede estar funcionando en una semana, y el ahorro de tiempo suele recuperar la inversión en pocos meses.

## Señales de que el Excel se te ha quedado pequeño

- Cada lunes alguien pasa la mañana **copiando datos** de varios programas a una hoja.
- Hay archivos como `ventas_final_v3_BUENO.xlsx` y nadie sabe cuál es el bueno.
- Para saber cómo va el mes tienes que **pedírselo a alguien**.
- Un error en una fórmula ha llegado alguna vez a una decisión importante.
- Tienes máquinas o sensores con datos que **nadie mira** hasta que algo falla.

Si te reconoces en dos o más, un panel de control te va a ahorrar tiempo y disgustos.

## Qué es exactamente un panel de control

Un panel de control (o *dashboard*) es una página web privada que:

1. **Se conecta sola** a tus fuentes de datos: hojas de cálculo, bases de datos, tu programa de facturación o tus dispositivos.
2. **Calcula los indicadores** (KPIs) que importan para tu negocio.
3. Los muestra en **gráficas y cifras claras**, actualizadas, desde el ordenador o el móvil.
4. Permite dar **acceso a cada persona solo a lo que necesita**.

La diferencia con un Excel no es que sea más bonito: es que **nadie tiene que actualizarlo a mano**.

## Un caso real: de días a segundos

En el Ayuntamiento de Barcelona construí un cuadro de mando presupuestario para el departamento de Cultura. Obtener los indicadores clave llevaba **días** de recopilación manual; con flujos automáticos en Python y el cuadro de mando, pasó a llevar **segundos**. El panel acabó reutilizándose en otros servicios.

En una clínica dental, reunir la información de control llevaba **unas 4 horas a la semana**. Con su CRM y un cuadro de mando económico, esa información está disponible **al instante**.

## ¿Herramienta estándar o panel a medida?

| Opción | Ventajas | Inconvenientes |
|---|---|---|
| **Looker Studio** (Google) | Gratis, rápido con Google Sheets | Limitado con datos complejos o en tiempo real |
| **Power BI** | Muy potente para análisis | Licencias por usuario; curva de aprendizaje |
| **Panel a medida** | Hace exactamente lo que necesitas, con tus usuarios, alertas y datos de dispositivos | Requiere desarrollo inicial |

No siempre hace falta un desarrollo a medida. Si tus datos están en Google Sheets y solo quieres un par de gráficas, Looker Studio puede bastar, y te lo diré. El panel a medida compensa cuando necesitas **combinar varias fuentes, gestionar permisos, enviar alertas o recibir datos de dispositivos IoT**.

## Cómo se construye, paso a paso

1. **Preguntas de negocio.** ¿Qué decisiones quieres tomar con el panel? De ahí salen los indicadores. Empezar por las gráficas es empezar por el final.
2. **Inventario de datos.** Dónde está cada dato, cómo de limpio está y cómo conectarlo con seguridad.
3. **Boceto con datos reales**, para validar que el panel responde a tus preguntas antes de desarrollarlo entero.
4. **Desarrollo:** conexiones automáticas, usuarios, permisos y alertas.
5. **Puesta en marcha** y formación al equipo.

## Paneles IoT: ver tus dispositivos en tiempo real

Si tienes sensores, máquinas o dispositivos conectados, el panel puede recibir sus datos al momento (por ejemplo por **MQTT**), guardarlos, dibujarlos en directo y **avisarte cuando un valor se sale de rango**. Incluso puede enviar órdenes a los dispositivos.

Es lo que hice con el sensor de [MOOVIA](https://moovia.app): un panel web que muestra en directo la telemetría que envía el dispositivo.

## ¿Cuánto cuesta?

Trabajo con tres niveles de precio cerrado, IVA no incluido:

- **Panel esencial**, desde 300 €: una fuente de datos y hasta 6 indicadores, con filtros y acceso web.
- **Panel profesional**, desde 900 €: varias fuentes, usuarios con permisos, actualización automática, exportación y alertas por email.
- **Panel IoT en tiempo real**, desde 1.800 €: datos de dispositivos, gráficas en directo, alertas y control remoto.

Para hacer cuentas rápidas: si alguien de tu equipo dedica 4 horas a la semana a preparar informes, son más de 200 horas al año. Tienes el detalle de cada nivel en la página de [paneles de control](/servicios/paneles-de-control).
