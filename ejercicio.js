<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java Script  Propina</title>
</head>
<body>
    <script>
        // Tu código JavaScript aquí
        function CalProp(TotalCuenta,CalidadServicio){
            switch(CalidadServicio.toLowerCase()){
                case "excelente":
                return TotalCuenta*0.20;

                case "buena":
                return TotalCuenta*0.15;

                case "regular":
                return TotalCuenta*0.10;

                case "mala":
                return TotalCuenta*0.05;

            default: 
            return "Calidad del Servicio no Identificada";
            }
        }

        console.log(CalProp(500,"excelente")); 

    </script>
</body>
</html>