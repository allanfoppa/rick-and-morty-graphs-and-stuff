# A PARTIR DO NODE VESÃO 16
FROM node:16

# INSTRUÇÃO DE ONDE VAMOS TRABALHAR DENTRO DO CONTAINER
WORKDIR /app

# PARA PASSAR PARA DENTRO DO CONTAINER DEVEMOS USAR
ENV PORT=3000

# EM QUAL PORTA VAMOS TRABALHAR
# EXPOSE 3000
# ou com variavel de ambiente
EXPOSE 3000

# QUEREMOS COLOCAR O NOSSO PROJETO DENTRO (COPIAR) DESSA IMAGEM

# copia tudo do diretório atual para a nossa imagem que vai gerar o container /app
# COPY /diretório-atual /diretório-dentro-container
# COPY . /app
# ou como ja foi passada a instrução de WORKDIR..
COPY . .

# INTALAMOS AS NOSSAS DEPENDENCIAS
RUN npm install

# NO FINAL COLOCAMOS O COMANDO A SER EXECUTADO
ENTRYPOINT [ "npm", "start" ]
