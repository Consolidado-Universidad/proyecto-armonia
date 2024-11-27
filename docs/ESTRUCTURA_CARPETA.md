```
/proyecto-armonia
│
├── /src                       # Carpeta principal de código fuente
│   ├── /app                   # Directorio de rutas y páginas de Next.js (App Router)
│   │   │   └── [software]     # Rutas dinámicas para cada software
│   │   │       └── route.ts   # Endpoint para manejar peticiones a un software específico
│   │
│   ├── /empresas              # Agrupación de empresas
│   │   ├── /empresa1          # Carpeta para empresa 1
│   │   │   ├── /software1     # Carpeta para software 1 de empresa 1
│   │   │   │   ├── models     # Modelos de datos específicos del software
│   │   │   │   ├── queries    # Consultas SQL específicas del software
│   │   │   │   └── mappings   # Mapeos y normalización de campos del software
│   │   │   └── /software2     # Carpeta para software 2 de empresa 1
│   │   │       ├── models     # Modelos de datos específicos del software
│   │   │       ├── queries    # Consultas SQL específicas del software
│   │   │       └── mappings   # Mapeos y normalización de campos del software
│   │   ├── /empresa2          # Carpeta para empresa 2
│   │   │   └── /software1     # Carpeta para software 1 de empresa 2
│   │   │       ├── models     # Modelos de datos específicos del software
│   │   │       ├── queries    # Consultas SQL específicas del software
│   │   │       └── mappings   # Mapeos y normalización de campos del software
│   │   └── ...                # Otras empresas y softwares
│   │
│   ├── /utilidades            # Utilidades generales
│   │
├── middleware.ts              # Middlewares globales para autenticación, manejo de
├── next.config.js             # Configuración de Next.js
├── package.json               # Dependencias del proyecto
└── README.md                  # Documentación del proyecto

```
