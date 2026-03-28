@echo off
echo TESTE DE AMBIENTE
echo =================
echo.
echo Diretorio atual: %CD%
echo.
echo Procurando Python...
where python
echo.
echo Versao do Python:
python --version
echo.
echo Listando arquivos na pasta:
dir *.py
echo.
echo Pressione qualquer tecla para continuar...
pause
