export const antiguedad_licencia = `
WITH LicenciasUnificadas AS (
    SELECT 
        Numero_Licencia,
        Fecha_Emision,
        COALESCE(Fecha_Control, Fecha_Control_Ant) AS Fecha_Control_Final,
        CAST(CASE WHEN Clase_A1 = 1 THEN 'A1 Ley 18.290' ELSE NULL END AS VARCHAR(20)) AS Clase_A1,
        CAST(CASE WHEN Clase_A2 = 1 THEN 'A2 Ley 18.290' ELSE NULL END AS VARCHAR(20)) AS Clase_A2,
        CAST(CASE WHEN Clase_B = 1 THEN 'B' ELSE NULL END AS VARCHAR(20)) AS Clase_B,
        CAST(CASE WHEN Clase_C = 1 THEN 'C' ELSE NULL END AS VARCHAR(20)) AS Clase_C,
        CAST(CASE WHEN Clase_D = 1 THEN 'D' ELSE NULL END AS VARCHAR(20)) AS Clase_D,
        CAST(CASE WHEN Clase_E = 1 THEN 'E' ELSE NULL END AS VARCHAR(20)) AS Clase_E,
        CAST(CASE WHEN Clase_A1_Prof = 1 THEN 'A1 Ley 19.495' ELSE NULL END AS VARCHAR(20)) AS Clase_A1_Prof,
        CAST(CASE WHEN Clase_A2_Prof = 1 THEN 'A2 Ley 19.495' ELSE NULL END AS VARCHAR(20)) AS Clase_A2_Prof,
        CAST(CASE WHEN Otras_Clases LIKE '%1___%' THEN 'A3' ELSE NULL END AS VARCHAR(20)) AS Clase_A3,
        CAST(CASE WHEN Otras_Clases LIKE '%_1__%' THEN 'A4' ELSE NULL END AS VARCHAR(20)) AS Clase_A4,
        CAST(CASE WHEN Otras_Clases LIKE '%__1_%' THEN 'A5' ELSE NULL END AS VARCHAR(20)) AS Clase_A5,
        CAST(CASE WHEN Otras_Clases LIKE '%___1%' THEN 'F' ELSE NULL END AS VARCHAR(20)) AS Clase_F
    FROM Licencias
    WHERE Numero_Licencia = @numero_licencia
),
LicenciasExpandidas AS (
    SELECT 
        Numero_Licencia,
        Fecha_Emision,
        Fecha_Control_Final,
        Clase_Licencia
    FROM LicenciasUnificadas
    UNPIVOT (
        Clase_Licencia FOR Clase IN (
            Clase_A1, Clase_A2, Clase_B, Clase_C, Clase_D, Clase_E,
            Clase_A1_Prof, Clase_A2_Prof, Clase_A3, Clase_A4, Clase_A5, Clase_F
        )
    ) AS unpvt
    WHERE Clase_Licencia IS NOT NULL
)
SELECT 
    Numero_Licencia,
    Clase_Licencia,
    MIN(Fecha_Emision) AS Fecha_Otorgamiento,
    MAX(Fecha_Control_Final) AS Fecha_Control_Final,
    DATEDIFF(YEAR, MIN(Fecha_Emision), GETDATE()) 
        - CASE 
            WHEN DATEADD(YEAR, DATEDIFF(YEAR, MIN(Fecha_Emision), GETDATE()), MIN(Fecha_Emision)) > GETDATE() THEN 1 
            ELSE 0 
          END AS Antiguedad_Anios,
    DATEDIFF(MONTH, MIN(Fecha_Emision), GETDATE()) % 12 AS Antiguedad_Meses
FROM LicenciasExpandidas
GROUP BY Numero_Licencia, Clase_Licencia;`;
