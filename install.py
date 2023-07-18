import subprocess
import os

# Obtén la ruta absoluta del directorio que contiene el archivo ejecutable .exe
ruta_ejecutable = os.path.dirname(os.path.abspath(__file__))

# Obtén la ruta del directorio que contiene el archivo main.py
ruta_proyecto=ruta_ejecutable[:-34]+"Proyecto\Codigo\PaginaWebApp"

# Cambia al directorio del proyecto
os.chdir(ruta_proyecto)

# Ejecutar "npm run dev" en una nueva ventana de terminal y minimizarla
subprocess.Popen(["start", "cmd", "/min", "/k", "npm", "install"], shell=True)
