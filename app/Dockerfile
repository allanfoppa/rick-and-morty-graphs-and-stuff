# A PARTIR DO NODE VESÃO 16
FROM node:16

# INSTRUÇÃO DE ONDE VAMOS TRABALHAR DENTRO DO CONTAINER
WORKDIR /usr/src/app

# COPIAMOS O PACKAGE PARA O CONTAINER
COPY package*.json .

# INTALAMOS AS NOSSAS DEPENDENCIAS
RUN npm install

# QUEREMOS COLOCAR O NOSSO PROJETO DENTRO (COPIAR) DESSA IMAGEM
COPY . .

# EM QUAL PORTA VAMOS TRABALHAR
EXPOSE 3000

# NO FINAL COLOCAMOS O COMANDO A SER EXECUTADO
ENTRYPOINT [ "npm", "start" ]
